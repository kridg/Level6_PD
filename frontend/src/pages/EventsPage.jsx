import EventsGrid from "../components/EventsGrid";
import CTASection from "../components/CTASection";

const EventsHero = () => (
  <section className="py-14 bg-gradient-to-br from-white to-orange-50 border-b border-orange-100">
    <div className="max-w-6xl mx-auto px-4 space-y-3">
      <span className="pill">Join us live</span>
      <h1 className="text-3xl font-bold text-gray-900">Events, workshops, and roundtables</h1>
      <p className="text-lg text-gray-700 max-w-3xl">
        Meet our teams, see live demos, and learn how we build safe, observable AI systems across industries.
      </p>
    </div>
  </section>
);

const EventsPage = () => (
  <>
    <EventsHero />
    <EventsGrid />
    <CTASection />
  </>
);

export default EventsPage;

