import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

const FAQHero = () => (
  <section className="py-12 sm:py-14 md:py-16 bg-white border-b border-gray-200 w-full">
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-3 sm:space-y-4">
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

