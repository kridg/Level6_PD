import { useEffect, useState } from "react";
import { fetchEvents } from "../services/api";

const EventsGrid = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="events" className="py-16 bg-orange-50 border-t border-orange-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Catch us at</h2>
            <span className="pill">Workshops · Panels · Roundtables</span>
          </div>
          <div className="text-center py-8 text-gray-500">Loading events...</div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <section id="events" className="py-12 sm:py-14 md:py-16 bg-orange-50 border-t border-orange-100 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-wrap gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Catch us at</h2>
          <span className="pill text-xs sm:text-sm">Workshops · Panels · Roundtables</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="card overflow-hidden bg-gradient-to-br from-white to-orange-50/20 hover-lift hover-glow animate-zoom-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {event.image_url ? (
                <div className="h-36 w-full overflow-hidden group">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="h-36 w-full bg-gradient-to-br from-orange-100 via-orange-50 to-white border-b border-orange-100" />
              )}
              <div className="p-5 space-y-2">
                <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {event.date}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-xs text-gray-600">{event.location}</p>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {event.description}
                </p>
                <button className="mt-3 text-sm font-semibold text-primary hover:text-orange-600 hover:underline transition-all duration-300 hover:scale-105 inline-block">
                  Save the date →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;


