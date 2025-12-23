const AdminTable = ({
  data,
  onDelete,
  onExport,
  selectedIds = [],
  onToggleSelect,
  onToggleAll,
  onView,
  onToggleReviewed,
}) => {
  const allSelected = data.length > 0 && selectedIds.length === data.length;
  const hasSelection = selectedIds.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm text-gray-700">
          Recent inquiries
          {hasSelection && (
            <span className="ml-2 text-xs text-primary">({selectedIds.length} selected)</span>
          )}
        </p>
        <div className="flex gap-2">
          <button
            onClick={onExport}
            disabled={!hasSelection}
            className="px-3 py-2 text-xs bg-orange-50 rounded-lg border border-orange-100 text-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export selected
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left w-12">
                <input
                  type="checkbox"
                  aria-label="Select all inquiries"
                  checked={allSelected}
                  onChange={(e) => onToggleAll?.(e.target.checked)}
                />
              </th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Country</th>
              <th className="px-4 py-3 text-left">Job</th>
              <th className="px-4 py-3 text-left">Job Type</th>
              <th className="px-4 py-3 text-left">Reviewed</th>
              <th className="px-4 py-3 text-left">Created</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const isChecked = selectedIds.includes(row.id);
              return (
                <tr key={row.id} className="border-t border-gray-100">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      aria-label={`Select inquiry ${row.name}`}
                      checked={isChecked}
                      onChange={() => onToggleSelect?.(row.id)}
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.name}</td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.country}</td>
                  <td className="px-4 py-3 text-gray-700">{row.job_title}</td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.job_type}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {row.reviewed ? (
                      <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">
                        Reviewed
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Unreviewed
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => onView?.(row)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-primary/30 text-primary bg-primary/10 hover:bg-primary/15 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors"
                      >
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => onToggleReviewed?.(row.id, !row.reviewed)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors ${
                          row.reviewed
                            ? "border-amber-200 text-amber-800 bg-amber-50 hover:bg-amber-100"
                            : "border-green-200 text-green-800 bg-green-50 hover:bg-green-100"
                        }`}
                      >
                        {row.reviewed ? "Mark unreviewed" : "Mark reviewed"}
                      </button>
                      <button
                        onClick={() => onDelete(row.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-red-200 text-red-700 bg-red-50 hover:bg-red-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors"
                      >
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={8}>
                  No inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;

