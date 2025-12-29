import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

const SecondaryHero = () => (
  <section className="py-12 sm:py-14 md:py-16 bg-white border-b border-gray-200 w-full" id="approach">
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
      <div className="space-y-4 sm:space-y-5 w-full">
        <span className="pill text-xs sm:text-sm">Blueprints to production</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          More than prompts — platform-grade AI with observability and control.
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          We design, build, and operate AI systems with traceability, evals, and strong
          safety rails. Each engagement ships with runbooks, dashboards, and on-call ready
          handover so teams can own outcomes with confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
      <div className="card p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 bg-gradient-to-br from-orange-50 to-white border-orange-100 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500">Coverage</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">End-to-end</p>
            <p className="text-xs text-gray-600">Discovery → Delivery → MLOps</p>
          </div>
          <span className="pill bg-white text-primary border-orange-200 whitespace-nowrap">Playbooks included</span>
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

const ProcessSection = () => (
  <section className="py-12 sm:py-14 md:py-16 bg-orange-50 border-t border-orange-100 w-full" id="process">
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-wrap gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">How we deliver</h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-1">
            A clear, measurable path from discovery to production with checkpoints and demos.
          </p>
        </div>
        <span className="pill text-xs sm:text-sm">Transparent milestones · Weekly demos</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {[
          {
            title: "Discover",
            text: "Align on goals, risks, data readiness, and define success metrics.",
          },
          {
            title: "Design",
            text: "Blueprint architecture, data contracts, eval harnesses, and safety rails.",
          },
          {
            title: "Build",
            text: "Implement features with CI/CD, observability, and rollback plans.",
          },
          {
            title: "Operate",
            text: "SLOs, alerts, playbooks, and handover to your teams with training.",
          },
        ].map((step, idx) => (
          <div
            key={step.title}
            className="card h-full p-5 flex flex-col gap-3 bg-white/70 border-orange-100"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-primary">Step {idx + 1}</p>
              <span className="text-xs text-gray-500">Week {idx * 2 + 1}-{idx * 2 + 2}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed flex-1">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LandingPage = () => (
  <>
    <Hero />
    <SecondaryHero />
    <ProcessSection />
    <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 py-12 sm:py-14 md:py-16 border-t border-orange-100 w-full" id="contact">
      <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
          <div className="md:w-1/2 space-y-3 sm:space-y-4 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Engage with our architects</h2>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Tell us about your use case and constraints. We respond with a tailored pod,
              clear milestones, and a risk plan. No fluff—just a practical plan to ship safely.
            </p>
            <div className="card p-4 sm:p-5 bg-white/80 border-orange-100">
              <p className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3">What you get</p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  Readiness check on data, infra, and security posture.
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  Delivery plan with checkpoints, SLOs, and demo cadence.
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  Embedded runbooks and observability from day one.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default LandingPage;


