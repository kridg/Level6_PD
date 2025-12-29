import { Link } from "react-router-dom";

const CTASection = () => {
  const patternBg = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.2
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-primary via-orange-600 to-primary text-white relative overflow-hidden w-full">
      <div className="absolute inset-0" style={patternBg}></div>
      <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 items-center relative z-10">
        <div className="lg:col-span-7 space-y-3 sm:space-y-4 animate-zoom-in w-full">
          <p className="pill bg-white/20 text-white border border-white/40 hover:bg-white/30 hover-zoom transition-all duration-300 text-xs sm:text-sm">
            Co-build with production engineers
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            Ready to move from prototype to production?
          </h2>
          <p className="text-sm sm:text-base text-orange-50">
            We assemble a pod in days, ship in weeks, and leave you with playbooks,
            dashboards, and confidence to run it.
          </p>
          <ul className="text-xs sm:text-sm space-y-2 text-orange-50">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Weekly demos and decision-ready updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Security, compliance, and observability included</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Handoff with documentation and training</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-5 animate-bounce-in w-full">
          <div className="bg-white text-charcoal rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl hover:shadow-3xl hover-lift transition-all duration-300 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3">
              <div>
                <p className="text-xs text-gray-500">Avg. kickoff</p>
                <p className="text-xl sm:text-2xl font-bold gradient-text animate-pulse-slow">5 days</p>
              </div>
              <div className="pill bg-primary/10 text-primary hover-zoom whitespace-nowrap">Pilot-ready</div>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">
              Share your context and constraints—get a tailored plan with timeline,
              dependencies, and risk mitigation steps.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary to-orange-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-center min-h-[44px] flex items-center justify-center font-semibold"
              >
                Start a project
              </Link>
              <Link
                to="/feedback"
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border-2 border-gray-200 text-charcoal hover:border-primary hover:text-primary hover:bg-orange-50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-center min-h-[44px] flex items-center justify-center font-semibold"
              >
                See results
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

