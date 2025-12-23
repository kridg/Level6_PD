import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

const FAQHero = () => (
  <section className="py-12 sm:py-14 md:py-16 bg-white border-b border-gray-200 w-full">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 w-full">
      <span className="pill text-xs sm:text-sm">Transparent ways of working</span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Frequently asked questions</h1>
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
        How we start, how we ship, and how we keep teams safe, aligned, and production-ready.
      </p>
    </div>
  </section>
);

const FAQPage = () => (
  <>
    <FAQHero />
    <FAQ />
    <CTASection />
  </>
);

export default FAQPage;

