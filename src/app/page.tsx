import Image from "next/image";

const rideOptions = [
  {
    name: "Smart Eco",
    detail: "Everyday rides at a lower fare",
    price: "from ₦1,900",
  },
  {
    name: "Smart Comfort",
    detail: "More space, newer cars",
    price: "from ₦2,600",
  },
  {
    name: "Smart Premium",
    detail: "Higher-rated drivers and executive cars",
    price: "from ₦3,900",
  },
];

const cityStats = [
  ["Zaria", "built around Samaru, ABU, Sabon Gari, and city routes"],
  ["24/7", "trip support for riders and drivers"],
  ["₦0", "cash or card, no hidden signup fees"],
];

const driverSteps = [
  "Apply with your licence, insurance, and vehicle photo.",
  "Get reviewed by Smart Ride operations.",
  "Go online and accept trips when you want to earn.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Smart Ride home">
          <Image src="/brand-mark.png" alt="" width={32} height={32} priority />
          <span>Smart Ride</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#ride">Ride</a>
          <a href="#drive">Drive</a>
          <a href="#business">Business</a>
          <a href="#safety">Safety</a>
        </nav>

        <div className="header-actions">
          <a className="link-button" href="#download">
            Log in
          </a>
          <a className="pill-button small" href="#download">
            Sign up
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <h1>Go anywhere with Smart Ride</h1>
          <p>
            Request reliable rides across Zaria, compare fare options, chat with
            your driver, and pay the way that works for you.
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
              <a className="pill-button" href="#download">
                Request now
              </a>
              <a className="secondary-button" href="#download">
                Schedule for later
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Smart Ride app preview">
          <div className="map-lines" />
          <Image
            className="hero-car"
            src="/hero-ride.png"
            alt="Smart Ride car"
            width={420}
            height={300}
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
          <h2>Ride your way</h2>
          <p>
            Choose a cheaper daily ride, a roomier car, or a premium trip. Smart
            Ride shows the fare before you book, whether you are heading to ABU,
            Sabon Gari, Kwangila, or the city centre.
          </p>
          <a className="text-link" href="#download">
            See ride options
          </a>
        </div>

        <div className="ride-options">
          {rideOptions.map((option) => (
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

      <section id="drive" className="dark-section">
        <div className="section-copy">
          <h2>Drive when it works for you</h2>
          <p>
            Smart Ride gives drivers a clear online switch, trip requests with
            pickup and dropoff details, and an earnings view that stays easy to
            read.
          </p>
          <a className="light-button" href="#download">
            Start driving
          </a>
        </div>

        <div className="driver-steps">
          {driverSteps.map((step, index) => (
            <div key={step} className="driver-step">
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="business" className="business-section">
        <div className="business-card">
          <h2>Trips for teams, guests, and daily operations</h2>
          <p>
            Move staff, visitors, students, and field teams around Zaria with
            trip history, clear pricing, and simple controls for repeated
            travel.
          </p>
          <a className="pill-button" href="#download">
            Create a business account
          </a>
        </div>
      </section>

      <section id="safety" className="feature-grid">
        <article>
          <h2>Safety built into every trip</h2>
          <p>
            Driver review, live trip status, in-app chat, ratings, and report
            flows keep riders and drivers connected before, during, and after
            the ride.
          </p>
        </article>
        <article>
          <h3>Verified drivers</h3>
          <p>
            Applications can be approved or rejected by operations before
            drivers receive trips.
          </p>
        </article>
        <article>
          <h3>Clear communication</h3>
          <p>
            Riders and drivers can message, share photos, and receive push
            updates for key events.
          </p>
        </article>
        <article>
          <h3>Open map coverage</h3>
          <p>
            Smart Ride uses OpenStreetMap-based tiles and routing for a
            dependable local map view.
          </p>
        </article>
      </section>

      <section id="download" className="download-section">
        <div>
          <h2>Get the Smart Ride app</h2>
          <p>
            Book a ride, drive, manage payments, and follow trips from one clean
            mobile experience.
          </p>
          <div className="store-row">
            <a
              href="#"
              className="store-button"
              aria-label="Download on the App Store"
            >
              <span>Download on the</span>
              <strong>App Store</strong>
            </a>
            <a
              href="#"
              className="store-button"
              aria-label="Get it on Google Play"
            >
              <span>Get it on</span>
              <strong>Google Play</strong>
            </a>
          </div>
        </div>

        <Image
          className="phone-image"
          src="/promo-phone.png"
          alt="Smart Ride app screens"
          width={560}
          height={373}
        />
      </section>

      <footer className="site-footer">
        <div className="brand footer-brand">
          <Image src="/brand-mark.png" alt="" width={28} height={28} />
          <span>Smart Ride</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#ride">Ride</a>
          <a href="#drive">Drive</a>
          <a href="#business">Business</a>
          <a href="#safety">Safety</a>
        </nav>
        <p>© 2026 Smart Ride. All rights reserved.</p>
      </footer>
    </main>
  );
}
