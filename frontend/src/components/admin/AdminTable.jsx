const AdminTable = ({ data, onDelete, onExport }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <div className="flex items-center justify-between px-4 py-3">
      <p className="text-sm text-gray-700">Recent inquiries</p>
      <div className="flex gap-2">
        <button
          onClick={onExport}
          className="px-3 py-2 text-xs bg-orange-50 rounded-lg border border-orange-100 text-primary"
        >
          Export CSV
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Country</th>
            <th className="px-4 py-3 text-left">Job</th>
            <th className="px-4 py-3 text-left">Job Type</th>
            <th className="px-4 py-3 text-left">Created</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t border-gray-100">
              <td className="px-4 py-3 font-semibold text-gray-900">{row.name}</td>
              <td className="px-4 py-3 text-gray-700">{row.email}</td>
              <td className="px-4 py-3 text-gray-700">{row.country}</td>
              <td className="px-4 py-3 text-gray-700">{row.job_title}</td>
              <td className="px-4 py-3 text-gray-700">{row.job_type}</td>
              <td className="px-4 py-3 text-gray-500">
                {new Date(row.created_at).toLocaleString()}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => onDelete(row.id)}
                  className="text-xs text-red-600 hover:text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td className="px-4 py-6 text-center text-gray-500" colSpan={7}>
                No inquiries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminTable;

