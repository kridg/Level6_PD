import { useEffect, useMemo, useState } from "react";
import {
  deleteInquiry,
  fetchInquiries,
  fetchStats,
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

  const handleExport = () => {
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
      ...inquiries.map((row) =>
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
        <div className="grid sm:grid-cols-3 gap-3">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm"
            >
              <p className="text-xs text-gray-500">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
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
          />
        )}
      </div>
    </AdminShell>
  );
};

export default AdminPanel;

