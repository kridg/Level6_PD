import ContactForm from "../components/ContactForm";

const ContactPage = () => (
  <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 w-full" id="contact">
    <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
      <div className="lg:col-span-5 rounded-2xl border border-orange-100 bg-white/90 p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 text-gray-900 shadow-sm w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Contact AI-Solutions</h1>
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
          Share your project vision and constraints. We respond with a concise plan,
          risks, and timeline within one business day.
        </p>
        <div className="rounded-xl bg-orange-50 text-gray-900 p-3 sm:p-4 text-xs sm:text-sm border border-orange-100">
          <p className="font-semibold">What to expect</p>
          <ul className="mt-2 space-y-1 text-gray-800">
            <li>• 30-min discovery with product + platform leads</li>
            <li>• A draft plan within 48 hours</li>
            <li>• Clear milestones and KPIs before kickoff</li>
          </ul>
        </div>
        <div className="text-xs sm:text-sm text-gray-700">
          Prefer email? <span className="font-semibold text-gray-900">hello@ai-solutions.demo</span>
        </div>
      </div>
      <div className="lg:col-span-7 w-full">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactPage;


