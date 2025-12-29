import Hero from "../components/Hero";

const ApproachHero = () => (
  <section className="py-16 bg-white border-b border-gray-200">
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
      <div className="space-y-4">
        <span className="pill">Blueprints to production</span>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          More than prompts — platform-grade AI with observability and control.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We design, build, and operate AI systems with traceability, evals, and strong
          safety rails. Each engagement ships with runbooks, dashboards, and on-call ready
          handover so teams can own outcomes with confidence.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Secure data pathways with red-team checks",
            "Latency and cost budgets with auto-tuning",
            "Human-in-the-loop fallbacks and audit trails",
            "Quality guardrails with continuous evals",
          ].map((item) => (
            <div key={item} className="card p-4 flex gap-3 items-start">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6 space-y-5 bg-gradient-to-br from-orange-50 to-white border-orange-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Coverage</p>
            <p className="text-2xl font-bold text-primary">End-to-end</p>
            <p className="text-xs text-gray-600">Discovery → Delivery → MLOps</p>
          </div>
          <span className="pill bg-white text-primary border-orange-200">Playbooks included</span>
        </div>
        <ul className="space-y-3 text-sm text-gray-800">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            Architecture that scales safely across clouds and regions.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            Evaluation harnesses that measure quality, bias, and drift.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            Operational runbooks with SLOs, alerts, and incident playbooks.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            Governance and audit trails for regulated environments.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const ApproachPage = () => (
  <>
    <Hero />
    <ApproachHero />
  </>
);

export default ApproachPage;

