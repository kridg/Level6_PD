import { useEffect, useState } from "react";
import { fetchStats } from "../services/api";

const StatCard = ({ label, value, helper }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition duration-200">
    <div className="text-xs text-gray-500">{label}</div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    {helper && <div className="text-xs text-gray-500 mt-1">{helper}</div>}
  </div>
);

const StatsCards = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats().then(setStats).catch(() => setStats(null));
  }, []);

  if (!stats) return null;

  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-6">
      <StatCard label="Total inquiries" value={stats.total} helper="Active interest this quarter" />
      <StatCard label="Countries represented" value={stats.by_country.length} helper="Global reach" />
      <StatCard label="Job types" value={stats.by_job.length} helper="Diverse collaboration models" />
    </div>
  );
};

export default StatsCards;


