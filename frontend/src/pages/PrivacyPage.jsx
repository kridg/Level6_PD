const PrivacyPage = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="text-sm text-gray-700">
        We respect your privacy. We only collect information necessary to respond to inquiries, improve our services,
        and operate our platform. We do not sell your data. For any data requests, contact hello@ai-solutions.demo.
      </p>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>• Data we collect: inquiry form details, analytics for performance, and error logs.</li>
        <li>• How we use it: respond to requests, improve reliability, and secure the platform.</li>
        <li>• How we store it: encrypted at rest and in transit; restricted access.</li>
        <li>• Your rights: request access or deletion by emailing us.</li>
      </ul>
    </div>
  </section>
);

export default PrivacyPage;

