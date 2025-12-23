import { useState, useEffect } from "react";
import { fetchFAQs } from "../services/api";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFAQs()
      .then((data) => setFaqs(data))
      .catch(() => setFaqs([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h2 className="text-2xl font-bold text-charcoal">Frequently asked</h2>
            <span className="pill">Transparent ways of working</span>
          </div>
          <div className="text-center py-8 text-gray-500">Loading FAQs...</div>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <h2 className="text-2xl font-bold text-charcoal">Frequently asked</h2>
          <span className="pill">Transparent ways of working</span>
        </div>
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const open = idx === openIndex;
            return (
              <div
                key={item.id}
                className="card p-4 transition-all duration-300 hover:shadow-md"
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                >
                  <span className="text-sm sm:text-base font-semibold text-charcoal">
                    {item.question}
                  </span>
                  <span className="text-primary text-xl transition-transform duration-300">
                    {open ? "–" : "+"}
                  </span>
                </button>
                {open && (
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed animate-fadeIn">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

