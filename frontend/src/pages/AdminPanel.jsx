import { useEffect, useMemo, useState } from "react";
import {
  deleteInquiry,
  fetchInquiries,
  fetchStats,
  updateInquiry,
} from "../services/api";
import AdminShell from "../components/admin/AdminShell";
import AdminLogin from "../components/admin/AdminLogin";
import AdminFilters from "../components/admin/AdminFilters";
import AdminTable from "../components/admin/AdminTable";

const AdminPanel = () => {
  const [token, setToken] = useState(() => localStorage.getItem("adminToken"));
  const [stats, setStats] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [filters, setFilters] = useState({});
  const [activeInquiry, setActiveInquiry] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async (activeToken, currentFilters = filters) => {
    if (!activeToken) return;
    setLoading(true);
    setError(null);
    try {
      const [fetchedStats, fetchedInquiries] = await Promise.all([
        fetchStats(activeToken),
        fetchInquiries(activeToken, currentFilters),
      ]);
      setStats(fetchedStats);
      setInquiries(fetchedInquiries);
      setSelectedIds([]);
      setActiveInquiry(null);
    } catch (err) {
      setError("Failed to load data. Check your credentials or network.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(token);
  }, [token]);

  const handleLogin = (newToken) => {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setStats(null);
    setInquiries([]);
  };

  const handleDelete = async (id) => {
    if (!token) return;
    await deleteInquiry(token, id);
    loadData(token);
  };

  const handleView = (inquiry) => {
    setActiveInquiry(inquiry);
  };

  const handleToggleReviewed = async (id, reviewed) => {
    if (!token) return;
    const updated = await updateInquiry(token, id, { reviewed });
    setInquiries((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updated } : row))
    );
    setActiveInquiry((prev) => (prev && prev.id === id ? { ...prev, ...updated } : prev));
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(inquiries.map((row) => row.id));
    } else {
      setSelectedIds([]);
    }
  };

  const selectedRows = useMemo(
    () => inquiries.filter((row) => selectedIds.includes(row.id)),
    [inquiries, selectedIds]
  );

  const handleExport = () => {
    const rowsToExport = selectedRows;
    if (rowsToExport.length === 0) {
      return;
    }
    const headers = [
      "name",
      "email",
      "phone",
      "company_name",
      "country",
      "job_title",
      "job_type",
      "job_details",
      "created_at",
    ];
    const csv = [
      headers.join(","),
      ...rowsToExport.map((row) =>
        headers
          .map((key) => `"${(row[key] || "").toString().replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "inquiries.csv";
    link.click();
  };

  const statCards = useMemo(() => {
    if (!stats) return [];
    return [
      { label: "Total inquiries", value: stats.total },
      { label: "Countries", value: stats.by_country.length },
      { label: "Job types", value: stats.by_job.length },
    ];
  }, [stats]);

  if (!token) {
    return <AdminLogin onSuccess={handleLogin} />;
  }

  return (
    <AdminShell onLogout={handleLogout}>
      <div className="space-y-4 text-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm"
            >
              <p className="text-xs sm:text-sm text-gray-500">{card.label}</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
            </div>
          ))}
        </div>
        <AdminFilters
          filters={filters}
          onChange={setFilters}
          onRefresh={() => loadData(token, filters)}
        />
        {error && <div className="text-sm text-red-300">{error}</div>}
        {loading ? (
          <div className="text-gray-600">Loading...</div>
        ) : (
          <AdminTable
            data={inquiries}
            onDelete={handleDelete}
            onExport={handleExport}
            selectedIds={selectedIds}
            onToggleSelect={handleSelect}
            onToggleAll={handleSelectAll}
            onView={handleView}
            onToggleReviewed={handleToggleReviewed}
          />
        )}
        {activeInquiry && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6 bg-black/50"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-white shadow-2xl border border-gray-200 p-4 sm:p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Inquiry detail</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-xl font-semibold text-gray-900">{activeInquiry.name}</p>
                    {activeInquiry.reviewed ? (
                      <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">
                        Reviewed
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Unreviewed
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    Received: {new Date(activeInquiry.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  <button
                    onClick={() => handleToggleReviewed(activeInquiry.id, true)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-green-200 bg-green-50 text-green-700 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-green-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={activeInquiry.reviewed}
                  >
                    Mark reviewed
                  </button>
                  <button
                    onClick={() => handleToggleReviewed(activeInquiry.id, false)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-amber-200 bg-amber-50 text-amber-700 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-amber-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!activeInquiry.reviewed}
                  >
                    Mark unreviewed
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors"
                    onClick={() => setActiveInquiry(null)}
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-800">
                <div><span className="font-semibold">Email:</span> {activeInquiry.email}</div>
                <div><span className="font-semibold">Phone:</span> {activeInquiry.phone || "—"}</div>
                <div><span className="font-semibold">Company:</span> {activeInquiry.company_name || "—"}</div>
                <div><span className="font-semibold">Country:</span> {activeInquiry.country}</div>
                <div><span className="font-semibold">Job Title:</span> {activeInquiry.job_title}</div>
                <div><span className="font-semibold">Job Type:</span> {activeInquiry.job_type}</div>
                <div className="sm:col-span-2">
                  <span className="font-semibold">Details:</span>
                  <div className="mt-1 text-gray-700 whitespace-pre-wrap">{activeInquiry.job_details}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
};

export default AdminPanel;

