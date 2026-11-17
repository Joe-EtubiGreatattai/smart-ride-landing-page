import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Hopr",
  description: "The agreement between you and Hopr for riding and driving.",
  alternates: { canonical: "/terms" },
};

const sections: { title: string; body: string }[] = [
  { title: "About these terms", body: "These terms are the agreement between you and Hopr for use of the Hopr rider app, the Hopr Driver app and our website. By creating an account you accept them. If you do not accept them, please do not use Hopr." },
  { title: "Your account", body: "You must be at least 18 and give accurate details. Your account is yours alone \u2014 keep your password to yourself and tell us if someone else has used it. You are responsible for what happens under your account." },
  { title: "What Hopr does", body: "Hopr connects riders with independent drivers. We are a technology platform: we do not own the vehicles and we do not employ the drivers. The transport itself is provided by the driver who accepts your trip." },
  { title: "Booking and cancelling", body: "Fares are estimated before you book from the distance, the time and the ride option you choose, and may change if the trip changes \u2014 for example if you add a stop. A promotion is applied at the price shown when you book. You can cancel before or during matching; repeated late cancellations may affect your access to the service." },
  { title: "Paying", body: "You can pay in cash directly to the driver, or by transfer through our payment provider. When you pay by transfer you authorise us to charge the fare, and any tip you add, to the method you have saved. Tips go to the driver in full." },
  { title: "Driving with Hopr", body: "To drive you must hold a valid Nigerian driver's licence, keep your vehicle registration, insurance and inspection current, and pass our approval checks. You decide when to go online and which trips to accept. Hopr charges a commission on each completed trip, shown in full on your trip earnings screen. You are responsible for your own tax." },
  { title: "How to behave", body: "Treat the other person in the vehicle with respect. No violence, harassment, discrimination, weapons or illegal goods, and no using Hopr for anything unlawful. Drivers must not drive under the influence or use a phone in a way that is unsafe. We can suspend or close any account that breaks these rules." },
  { title: "Ratings and reports", body: "Riders and drivers rate each other after a trip. We use ratings and the problems you report to keep the service safe, and we may act on them, including by removing an account." },
  { title: "Things you upload", body: "You keep ownership of the photos and documents you upload. You give us permission to store and use them to run Hopr \u2014 to show your profile photo, deliver a chat image, or verify that you are approved to drive. Do not upload anything you do not have the right to share." },
  { title: "Availability", body: "We work to keep Hopr running, but we cannot promise it will always be available or uninterrupted. Coverage, ride options and prices vary by city and can change." },
  { title: "Our responsibility", body: "Nothing in these terms limits any liability that cannot be limited by Nigerian law. Beyond that, Hopr is not liable for the conduct of a rider or a driver, or for indirect or consequential loss arising from your use of the service." },
  { title: "Ending your account", body: "You can delete your account at any time from Profile in the app. We may suspend or close an account that breaks these terms or that we reasonably believe puts someone at risk." },
  { title: "Governing law", body: "These terms are governed by the laws of the Federal Republic of Nigeria." },
  { title: "Contact us", body: "Questions about these terms go to support@smartride.ng." },
];

/**
 * Terms of Service.
 *
 * Published here because the App Store and Play Store both require a policy at
 * a public URL for the listing. The identical text ships inside both apps in
 * `src/lib/legal.ts` — change one, change the other.
 */
export default function TermsOfServicePage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-back" href="/">
          &larr; Hopr
        </Link>
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated September 8, 2026</p>
      </header>

      <div className="legal-body">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <footer className="legal-footer">
        <Link href="/privacy">Privacy Policy</Link>
        <a href="mailto:support@smartride.ng">support@smartride.ng</a>
      </footer>
    </main>
  );
}
