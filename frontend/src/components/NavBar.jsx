import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import SiteLogo from "./SiteLogo";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/approach", label: "Approach" },
    { href: "/solutions", label: "Solutions" },
    { href: "/process", label: "Process" },
    { href: "/feedback", label: "Results" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-orange-100 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 md:py-4 flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2 group min-w-[44px] min-h-[44px] flex-shrink-0">
          <SiteLogo size="md" />
        </Link>
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium text-gray-800 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all duration-300 transform min-h-[44px] flex items-center ${
                location.pathname === link.href
                  ? "text-primary shadow-sm bg-orange-50"
                  : "text-gray-700 hover:text-primary hover:bg-orange-50/70 hover:scale-105"
              }`}
            >
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow hover:shadow-md hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 min-h-[44px] whitespace-nowrap"
          >
            <PhoneCall className="h-4 w-4 flex-shrink-0" />
            <span className="hidden sm:inline">Contact</span>
          </Link>
        </nav>
        <button
          className="lg:hidden inline-flex flex-col items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-gray-200 bg-white/90 hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation min-w-[44px] min-h-[44px]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          type="button"
        >
          <span className={`w-5 h-0.5 bg-gray-900 block transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} aria-hidden="true"></span>
          <span className={`w-5 h-0.5 bg-gray-900 block my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`} aria-hidden="true"></span>
          <span className={`w-5 h-0.5 bg-gray-900 block transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} aria-hidden="true"></span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-sm animate-slideDown w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-2 text-sm w-full">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-gray-900 hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-orange-50 min-h-[44px] flex items-center"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex w-full justify-center items-center bg-primary text-white px-4 py-3 rounded-lg min-h-[44px] mt-2 font-medium"
              onClick={() => setOpen(false)}
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;


