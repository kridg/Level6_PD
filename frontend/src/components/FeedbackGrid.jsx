import { useEffect, useState } from "react";
import { fetchFeedback } from "../services/api";

const FeedbackGrid = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedback()
      .then((data) => setFeedback(data))
      .catch(() => setFeedback([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="feedback" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">What partners say</h2>
            <span className="pill">High trust · Fast delivery · Observable AI</span>
          </div>
          <div className="text-center py-8 text-gray-500">Loading feedback...</div>
        </div>
      </section>
    );
  }

  if (feedback.length === 0) {
    return null;
  }

  return (
    <section id="feedback" className="py-12 sm:py-14 md:py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-wrap gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">What partners say</h2>
          <span className="pill text-xs sm:text-sm">High trust · Fast delivery · Observable AI</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {feedback.map((item, idx) => (
            <div
              key={item.id}
              className="card p-5 h-full flex flex-col gap-4 bg-gradient-to-br from-white to-orange-50/20 hover-lift hover-glow animate-zoom-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="text-4xl text-primary leading-none animate-float">"</div>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">{item.quote}</p>
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-orange-600 border-2 border-orange-200 overflow-hidden flex items-center justify-center text-white font-semibold shadow-lg hover-zoom transition-transform duration-300">
                    {item.avatar_url ? (
                      <img
                        src={item.avatar_url}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      item.name?.charAt(0) || "U"
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackGrid;


