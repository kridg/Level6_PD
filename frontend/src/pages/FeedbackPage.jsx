import FeedbackGrid from "../components/FeedbackGrid";
import CTASection from "../components/CTASection";

const FeedbackHero = () => (
  <section className="py-12 sm:py-14 md:py-16 bg-white border-b border-gray-200 w-full">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 w-full">
      <span className="pill text-xs sm:text-sm">Proof through outcomes</span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Results from teams that ship with us</h1>
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
        Testimonials and outcomes across fintech, health, and logistics. Real production launches with
        safety, observability, and measurable KPIs.
      </p>
    </div>
  </section>
);

const FeedbackPage = () => (
  <>
    <FeedbackHero />
    <FeedbackGrid />
    <CTASection />
  </>
);

export default FeedbackPage;

