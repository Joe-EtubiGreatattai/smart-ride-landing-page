import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hopr",
  description: "How Hopr collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

const sections: { title: string; body: string }[] = [
  { title: "Who we are", body: "Hopr is a ride-hailing service operating in Zaria and Lokoja, Nigeria. This policy covers the Hopr rider app, the Hopr Driver app and our website. It explains what we collect, why we collect it, and what you can do about it." },
  { title: "Information we collect", body: "Account details you give us: your name, email address, phone number and, if you add one, a profile photo. Trip information: your pickup and drop-off points, saved and recent places, route, fare, payment method and trip history. Location, as described in the next section. Photos you choose to send in trip chat. If you apply to drive, the documents we need to approve you: your driver's licence, vehicle registration, insurance certificate, inspection report and a photo of your vehicle. Device information needed to deliver notifications, such as your push token and whether you are on iOS or Android." },
  { title: "How we use location", body: "Riders: we use your location while the app is open to set your pickup point, show nearby cars and follow your trip. The rider app does not collect your location in the background. Drivers: while you are online and available for trips, the driver app updates your location in the background so riders can see you approaching and so we can offer you nearby trips. That stops as soon as you go offline, and you can revoke the permission at any time in your phone's settings." },
  { title: "How we use information", body: "To match riders with drivers, calculate routes and fares, take payment, send trip updates, run promotions and referrals you opt into, investigate safety reports and problems you report to us, prevent fraud, meet our legal obligations, and improve the service. We do not sell your personal information." },
  { title: "Who we share it with", body: "With the other party to your trip: a driver sees the rider's first name, rating, pickup and destination; a rider sees the driver's name, photo, rating, vehicle and plate. With the services that run Hopr: Paystack for card payments, Cloudinary for storing images and documents, Expo for push notifications, and OpenStreetMap-based services for maps, routing and place names. With law enforcement or emergency services where the law requires it or where someone's safety is at risk. We share the minimum needed in each case." },
  { title: "Marketing and notifications", body: "Trip and account emails \u2014 receipts, verification codes, password resets \u2014 are part of the service and are always sent. Marketing email is separate and can be switched off under Settings. Push notifications can be turned off in your phone's settings at any time." },
  { title: "How long we keep it", body: "We keep your account and trip records while your account is open, and for as long afterwards as we are required to for tax, accounting, safety and legal reasons. Driver documents are kept while you are approved to drive and for the period the law requires afterwards." },
  { title: "Your choices and your rights", body: "You can view and edit your details, and permanently delete your account, from inside the app: open Profile, then Delete account. Deleting your account removes your profile and detaches your trip history from you; records we are legally required to retain are kept for that purpose alone. You control location, camera, photo and notification permissions through your phone's settings. To ask for a copy of your information or to have something corrected, contact us at support@smartride.ng." },
  { title: "Security", body: "Traffic between the apps and our servers is encrypted in transit. Passwords are stored only as hashes and sign-in tokens are held in your device's secure storage. No system is perfect, so please tell us straight away if you think your account has been used by someone else." },
  { title: "Children", body: "Hopr is not for children. You must be at least 18 to hold an account, and drivers must additionally hold a valid Nigerian driver's licence. We do not knowingly collect information from anyone under 18." },
  { title: "Changes to this policy", body: "If we change this policy we will update the date at the top and, where the change is significant, tell you in the app." },
  { title: "Contact us", body: "Questions about this policy, or about your information, go to support@smartride.ng." },
];

/**
 * Privacy Policy.
 *
 * Published here because the App Store and Play Store both require a policy at
 * a public URL for the listing. The identical text ships inside both apps in
 * `src/lib/legal.ts` — change one, change the other.
 */
export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-back" href="/">
          &larr; Hopr
        </Link>
        <h1>Privacy Policy</h1>
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
        <Link href="/terms">Terms of Service</Link>
        <a href="mailto:support@smartride.ng">support@smartride.ng</a>
      </footer>
    </main>
  );
}
