import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Hopr",
  description: "Get help with the Hopr rider and Hopr Driver apps.",
  alternates: { canonical: "/support" },
};

const sections: { title: string; body: string }[] = [
  { title: "Contact us", body: "Email support@smartride.ng and include the email address on your account, your phone model and what went wrong. For a problem with a specific trip, add the date and the pickup and drop-off points. We reply to every message." },
  { title: "Safety emergencies", body: "If you are in danger, contact the Nigerian emergency services first. Once you are safe, tell us about it from the Safety Hub in the app or by email so we can act on it." },
  { title: "Trip and payment problems", body: "Wrong fare, a failed card payment, a lost item or a driver issue: open the trip in My Rides and use Help, or email us with the trip details. Card payments are processed by Paystack." },
  { title: "Driving with Hopr", body: "Drivers use the separate Hopr Driver app. To apply, email support@smartride.ng with the subject \"Driver application\". Applications are reviewed by the operations team before an account can go online." },
  { title: "Your account and data", body: "You can edit your details or delete your account from inside the app. If you cannot sign in, see the account deletion page or email us." },
];

export default function SupportPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-back" href="/">
          &larr; Hopr
        </Link>
        <h1>Support</h1>
        <p className="legal-updated">Hopr rider app and Hopr Driver app</p>
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
        <Link href="/terms">Terms of Service</Link>
        <a href="mailto:support@smartride.ng">support@smartride.ng</a>
      </footer>
    </main>
  );
}
