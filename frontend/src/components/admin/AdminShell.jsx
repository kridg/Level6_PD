const AdminShell = ({ children, onLogout }) => (
  <div className="min-h-screen bg-[#f5f7fb] text-gray-900">
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
            AI
          </div>
          <div>
            <p className="text-sm text-gray-500">Admin Console</p>
            <p className="font-semibold text-gray-900">AI-Solutions</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 rounded-lg bg-orange-50 border border-orange-200 text-sm text-primary hover:bg-orange-100"
        >
          Logout
        </button>
      </div>
    </header>
    <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
  </div>
);

export default AdminShell;

