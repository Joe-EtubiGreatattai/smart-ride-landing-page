import Image from "next/image";

import { WaitlistForm } from "@/components/WaitlistForm";

const serviceOptions = [
  {
    name: "Pick n drop",
    detail:
      "Quick local trips around Zaria with pickup and dropoff handled in-app.",
    price: "Local rides",
  },
  {
    name: "School and home pickup",
    detail: "Planned rides for students, pupils, families, and daily movement.",
    price: "Scheduled",
  },
  {
    name: "Intercity and airport trips",
    detail:
      "Trips to Kaduna, Rigasa train station, Aminu Kano Airport, and more.",
    price: "On request",
  },
];

const cityStats = [
  ["Zaria", "built around Samaru, ABU, Sabon Gari, and city routes"],
  ["Managed", "Smart Ride drivers only, reviewed by the operations team"],
  ["No DMs", "book rides in the app instead of posting in WhatsApp groups"],
];

const bookingSteps = [
  "Choose your pickup, dropoff, and service type without searching through group messages.",
  "Get clear trip details from Smart Ride operations and your assigned driver.",
  "Track the ride, chat when needed, and keep your booking history in one place.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Smart Ride home">
          <Image src="/brand-mark.png" alt="" width={44} height={44} priority />
          <span>Smart Ride</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#ride">Ride</a>
          <a href="#service">Service</a>
          <a href="#business">Business</a>
          <a href="#safety">Safety</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <div className="header-actions">
          <a className="pill-button small" href="#waitlist">
            Join waitlist
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <h1>Book Smart Ride without WhatsApp</h1>
          <p>
            Smart Ride already moves people around Zaria through WhatsApp. The
            app gives customers a cleaner way to request pickup, delivery,
            school runs, airport trips, and special rides.
          </p>

          <div id="ride" className="request-panel" aria-label="Request a ride">
            <label>
              Pickup location
              <span className="fake-input">
                <span className="dot" />
                Enter pickup address
              </span>
            </label>
            <label>
              Dropoff location
              <span className="fake-input">
                <span className="dot hollow" />
                Where to?
              </span>
            </label>
            <div className="panel-actions">
              <a className="pill-button" href="#waitlist">
                Join waitlist
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Smart Ride app preview">
          <div className="map-lines" />
          <Image
            className="hero-car"
            src="/hero-cutout.png"
            alt="Smart Ride car"
            width={768}
            height={512}
            priority
          />
          <div className="floating-card pickup-card">
            <span>Pickup</span>
            <strong>Samaru, Zaria</strong>
          </div>
          <div className="floating-card fare-card">
            <span>Smart Comfort</span>
            <strong>₦2,600</strong>
          </div>
        </div>
      </section>

      <section className="stat-strip" aria-label="Smart Ride highlights">
        {cityStats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="split-section">
        <div className="section-copy">
          <h2>All Smart Ride services in one place</h2>
          <p>
            Book the same services customers already request in the WhatsApp
            group: pick n drop, home pickup, hotel and club pickup, school runs,
            parcel delivery, Kaduna trips, airport trips, and special rides.
          </p>
          <a className="text-link" href="#waitlist">
            Join the app waitlist
          </a>
        </div>

        <div className="ride-options">
          {serviceOptions.map((option) => (
            <article key={option.name} className="ride-option">
              <Image src="/car-comfort.png" alt="" width={80} height={72} />
              <div>
                <h3>{option.name}</h3>
                <p>{option.detail}</p>
              </div>
              <strong>{option.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="service" className="dark-section">
        <div className="section-copy">
          <h2>Not an open driver app</h2>
          <p>
            Smart Ride is operated by its own team and trusted drivers. The app
            is for customers to book more easily, while operations assigns and
            manages each trip.
          </p>
          <a className="light-button" href="#waitlist">
            Join the customer waitlist
          </a>
        </div>

        <div className="driver-steps">
          {bookingSteps.map((step, index) => (
            <div key={step} className="driver-step">
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="business" className="business-section">
        <div className="business-card">
          <div className="business-copy">
            <h2>Trips for teams, guests, and daily operations</h2>
            <p>
              Move staff, visitors, students, and field teams around Zaria with
              managed Smart Ride drivers, trip history, clear requests, and
              simple controls for repeated travel.
            </p>
            <a className="pill-button" href="#waitlist">
              Join waitlist
            </a>
          </div>

          <Image
            className="business-cutout"
            src="/business-cutout.png"
            alt="Smart Ride driver and passengers"
            width={768}
            height={512}
          />
        </div>
      </section>

      <section id="safety" className="feature-grid">
        <article>
          <h2>Safety built into every trip</h2>
          <p>
            The WhatsApp group is useful, but trip details can get buried. Smart
            Ride brings requests, driver assignment, live status, chat, and
            support into one app flow.
          </p>
        </article>
        <article>
          <h3>Smart Ride drivers</h3>
          <p>
            Trips are handled by Smart Ride&apos;s own driver network, reviewed
            and managed by the operations team.
          </p>
        </article>
        <article>
          <h3>No lost requests</h3>
          <p>
            Customers no longer need to scroll through WhatsApp threads or wait
            for a group reply to place a ride request.
          </p>
        </article>
        <article>
          <h3>Local routes</h3>
          <p>
            Built around Zaria routes, with support for Kaduna, Rigasa train
            station, Aminu Kano Airport, and special trips.
          </p>
        </article>
      </section>

      <section id="waitlist" className="waitlist-section">
        <div className="waitlist-copy">
          <p className="waitlist-eyebrow">Zaria bookings</p>
          <h2>Move from WhatsApp to the app</h2>
          <p>
            Leave your email and we&apos;ll tell you when Smart Ride is ready
            for app bookings, so you can request rides without sending a DM or
            posting in the WhatsApp group.
          </p>
        </div>

        <WaitlistForm />
      </section>
      <footer className="site-footer">
        <div className="brand footer-brand">
          <Image src="/brand-mark.png" alt="" width={28} height={28} />
          <span>Smart Ride</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#ride">Ride</a>
          <a href="#service">Service</a>
          <a href="#business">Business</a>
          <a href="#safety">Safety</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
        <p>© 2026 Smart Ride. All rights reserved.</p>
      </footer>
    </main>
  );
}
