const TermsPage = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      <p className="text-sm text-gray-700">
        By using our site and services, you agree to follow applicable laws and respect our IP. We provide services
        on a best-effort basis; uptime and deliverables are governed by mutually signed agreements.
      </p>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>• Acceptable use: no abuse, reverse engineering, or unauthorized access.</li>
        <li>• Content: all site content is provided for informational purposes.</li>
        <li>• Liability: limited to the extent permitted by law; production SLOs are contract-based.</li>
        <li>• Changes: we may update these terms; continued use means acceptance.</li>
      </ul>
    </div>
  </section>
);

export default TermsPage;

