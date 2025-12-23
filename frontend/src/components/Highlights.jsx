import { useEffect, useState } from "react";
import {
  Compass,
  Database,
  ServerCog,
  LayoutDashboard,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { fetchServices } from "../services/api";

const iconMap = {
  Compass,
  Database,
  ServerCog,
  LayoutDashboard,
  ShieldCheck,
  GraduationCap,
};

const Highlights = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices()
      .then((data) => setServices(data))
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-gray-900">What we deliver</h2>
            <span className="pill">Outcome-led roadmaps · Secure by design</span>
          </div>
          <div className="text-center py-8 text-gray-500">Loading services...</div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="solutions" className="py-12 sm:py-14 md:py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 flex-wrap gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">What we deliver</h2>
          <span className="pill text-xs sm:text-sm">Outcome-led roadmaps · Secure by design</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((item, idx) => {
            const IconComponent = iconMap[item.icon_name] || Compass;
            return (
              <div
                key={item.id}
                className="card p-5 bg-gradient-to-br from-white to-orange-50/20 hover-lift hover-glow animate-zoom-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-lg hover-zoom transition-transform duration-300">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <span className="h-2 w-2 rounded-full bg-primary inline-block animate-pulse-slow"></span>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {item.badge}
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;


