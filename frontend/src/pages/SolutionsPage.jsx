import Highlights from "../components/Highlights";
import CTASection from "../components/CTASection";

const SolutionsHero = () => (
  <section className="py-14 bg-gradient-to-br from-white to-orange-50 border-b border-orange-100">
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <span className="pill">Capabilities that ship safely</span>
      <h1 className="text-3xl font-bold text-gray-900">AI solutions with safety, scale, and clarity</h1>
      <p className="text-lg text-gray-700 max-w-3xl">
        Product, data, and platform teams working together to deliver production-grade AI: discovery,
        delivery, MLOps, governance, and enablement—packaged with playbooks and dashboards.
      </p>
    </div>
  </section>
);

const SolutionsPage = () => (
  <>
    <SolutionsHero />
    <Highlights />
    <CTASection />
  </>
);

export default SolutionsPage;

