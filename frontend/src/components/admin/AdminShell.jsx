import { UserCircle2 } from "lucide-react";

const AdminShell = ({ children, onLogout }) => (
  <div className="min-h-screen bg-[#f5f7fb] text-gray-900">
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-primary flex-shrink-0">
            <UserCircle2 className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Admin Console</p>
            <p className="text-sm sm:text-base font-semibold text-gray-900">AI-Solutions</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-orange-50 border border-orange-200 text-xs sm:text-sm text-primary hover:bg-orange-100 transition-colors min-h-[44px] whitespace-nowrap"
        >
          Logout
        </button>
      </div>
    </header>
    <main className="w-full max-w-full lg:max-w-7xl xl:max-w-[95%] 2xl:max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 sm:py-6">{children}</main>
  </div>
);

export default AdminShell;

