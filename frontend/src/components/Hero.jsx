import { Link } from "react-router-dom";

const Hero = () => (
  <section
    id="mission"
    className="bg-gradient-to-br from-white to-orange-50 py-12 sm:py-14 md:py-16 border-b border-orange-100 w-full overflow-hidden"
  >
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
      <div className="lg:col-span-7 space-y-4 sm:space-y-5 fade-up w-full">
        <div className="pill text-xs sm:text-sm">
          Proven delivery pods · Responsible AI · End-to-end ownership
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          Applied AI that ships fast, scales safely, and earns trust.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          AI-Solutions embeds product, data, and platform engineers to turn AI ideas
          into resilient production systems—covering discovery, delivery, MLOps, and
          ongoing observability.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-primary to-orange-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-bounce-in text-center min-h-[44px] flex items-center justify-center"
          >
            Book a discovery call
          </Link>
          <Link
            to="/solutions"
            className="px-5 py-3 rounded-full border-2 border-gray-300 text-gray-800 hover:border-primary hover:text-primary hover:-translate-y-1 hover:scale-105 hover:bg-orange-50 transition-all duration-300 text-center min-h-[44px] flex items-center justify-center"
          >
            Explore capabilities
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
          {[
            "Productionized 40+ AI services in fintech, health, and logistics.",
            "Playbooks for secure data pipelines, CI/CD for models, and fast rollback.",
            "Partnered squads with weekly demos and measurable KPIs.",
          ].map((item, idx) => (
            <div
              key={item}
              className="card p-4 flex items-start gap-3 hover-lift animate-zoom-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse-slow"></span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 fade-up animate-zoom-in w-full">
        <div className="card p-4 sm:p-5 md:p-6 space-y-4 bg-gradient-to-br from-white to-orange-50/30 hover-glow w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="w-full sm:w-auto">
              <p className="text-xs text-gray-500">Delivery health</p>
              <p className="text-xl sm:text-2xl font-bold gradient-text animate-pulse-slow">98%</p>
              <p className="text-xs text-gray-500">projects shipped on time</p>
            </div>
            <div className="pill bg-orange-100 text-orange-700 border-orange-200 hover-zoom whitespace-nowrap">
              Trusted partner
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-4 border border-orange-100 hover-lift hover-glow transition-all duration-300">
              <div className="text-xs text-gray-500">Avg. launch</div>
              <div className="text-xl font-semibold text-gray-900">6 weeks</div>
              <div className="text-xs text-gray-500">from idea to pilot</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-4 border border-orange-100 hover-lift hover-glow transition-all duration-300">
              <div className="text-xs text-gray-500">SRE-ready</div>
              <div className="text-xl font-semibold text-gray-900">99.9%</div>
              <div className="text-xs text-gray-500">designed uptime</div>
            </div>
          </div>
          <div className="rounded-xl bg-white border border-gray-200 p-4 hover-lift transition-all duration-300">
            <p className="text-sm font-semibold text-gray-900">Engagement models</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Discovery sprints for roadmap clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Build squads for net-new AI features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>MLOps acceleration and runbook handoff</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;


