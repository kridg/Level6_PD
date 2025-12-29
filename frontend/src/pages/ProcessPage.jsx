const ProcessSection = () => (
  <section className="py-16 bg-orange-50 border-t border-orange-100">
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">How we deliver</h2>
          <p className="text-sm text-gray-700 mt-1">
            A clear, measurable path from discovery to production with checkpoints and demos.
          </p>
        </div>
        <span className="pill">Transparent milestones · Weekly demos</span>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
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

const ProcessPage = () => (
  <div className="bg-white">
    <section className="py-14 bg-gradient-to-r from-orange-50 via-white to-orange-50 border-b border-orange-100">
      <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-3">
        <span className="pill">Clarity from day one</span>
        <h1 className="text-3xl font-bold text-gray-900">A delivery path you can see and measure</h1>
        <p className="text-gray-700 max-w-3xl">
          We keep stakeholders aligned with demos, metrics, and transparent runbooks—so launches are predictable
          and safe.
        </p>
      </div>
    </section>
    <ProcessSection />
  </div>
);

export default ProcessPage;

