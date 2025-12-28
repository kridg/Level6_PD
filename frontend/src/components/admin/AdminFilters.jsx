const AdminFilters = ({ filters, onChange, onRefresh }) => (
  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm">
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
      <input
        placeholder="Country"
        value={filters.country || ""}
        onChange={(e) => onChange({ ...filters, country: e.target.value })}
        className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
      />
      <select
        value={filters.job_type || ""}
        onChange={(e) => onChange({ ...filters, job_type: e.target.value })}
        className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
      >
        <option value="">All roles</option>
        <option value="ai_engineer">AI Engineer</option>
        <option value="data_scientist">Data Scientist</option>
        <option value="ml_ops">ML Ops</option>
        <option value="research">Research</option>
        <option value="other">Other</option>
      </select>
      <select
        value={filters.reviewed ?? ""}
        onChange={(e) => onChange({ ...filters, reviewed: e.target.value })}
        className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
      >
        <option value="">All statuses</option>
        <option value="true">Reviewed</option>
        <option value="false">Unreviewed</option>
      </select>
    </div>
    <div className="flex gap-2 sm:flex-shrink-0">
      <button
        onClick={onRefresh}
        className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-orange-600 transition-colors min-h-[44px] whitespace-nowrap"
      >
        Apply
      </button>
      <button
        onClick={() => onChange({})}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200 hover:bg-gray-200 transition-colors min-h-[44px] whitespace-nowrap"
      >
        Reset
      </button>
    </div>
  </div>
);

export default AdminFilters;

