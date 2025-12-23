import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import SiteLogo from "./SiteLogo";

const Footer = () => (
  <footer className="bg-gradient-to-b from-white via-orange-50 to-white border-t border-orange-100 pt-8 sm:pt-10 mt-8 sm:mt-12 w-full">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="card bg-white/90 border-orange-100 p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center justify-between w-full">
        <div className="w-full md:w-auto">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
            Ready to launch responsibly?
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-1">Let's assemble your AI delivery pod</h3>
          <p className="text-xs sm:text-sm text-gray-700 mt-1">
            Discovery, delivery, and MLOps with safety rails, dashboards, and runbooks included.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow hover:shadow-md transition min-h-[44px] w-full md:w-auto justify-center"
        >
          Talk to us <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-sm text-gray-700">
        <div className="space-y-3">
          <SiteLogo size="md" />
          <p className="text-gray-700 leading-relaxed">
            Applied AI delivery teams for enterprises that need reliability, speed, and measurable ROI.
          </p>
          <div className="flex gap-3 text-xs text-gray-600">
            <span className="pill">Trusted partner</span>
            <span className="pill">Enterprise-grade</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Company</p>
          <a className="block hover:text-primary" href="/approach">
            Approach
          </a>
          <a className="block hover:text-primary" href="/solutions">
            Capabilities
          </a>
          <a className="block hover:text-primary" href="/process">
            Delivery process
          </a>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Resources</p>
          <a className="block hover:text-primary" href="/contact">
            Contact
          </a>
          <a className="block hover:text-primary" href="/admin-panel">
            Admin Console
          </a>
          <a className="block hover:text-primary" href="/feedback">
            Results
          </a>
          <a className="block hover:text-primary" href="/faq">
            FAQ
          </a>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-gray-900">Contact</p>
          <div className="flex items-start gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer">
            <Mail className="h-4 w-4 text-primary mt-0.5" /> aisolutions@gmail.com
          </div>
          <div className="flex items-start gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer">
            <Phone className="h-4 w-4 text-primary mt-0.5" /> +44 191 1234567890
          </div>
          <div className="flex items-start gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer">
            <MapPin className="h-4 w-4 text-primary mt-0.5" /> Sunderland, UK
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-orange-100 text-xs sm:text-sm text-gray-600">
        <span className="order-2 sm:order-1">© {new Date().getFullYear()} AI-Solutions. All rights reserved.</span>
        <span className="flex flex-wrap gap-3 sm:gap-4 order-1 sm:order-2">
          <a className="hover:text-primary transition-colors min-h-[44px] flex items-center" href="/privacy">
            Privacy
          </a>
          <a className="hover:text-primary transition-colors min-h-[44px] flex items-center" href="/terms">
            Terms
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;


