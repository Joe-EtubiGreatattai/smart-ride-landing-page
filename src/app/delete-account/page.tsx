import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete your account | Hopr",
  description: "How to delete your Hopr rider or driver account and what happens to your data.",
  alternates: { canonical: "/delete-account" },
};

const sections: { title: string; body: string }[] = [
  { title: "Delete from inside the app", body: "Open the Hopr rider app or the Hopr Driver app, go to Profile, tap Delete account and confirm. Your account is deleted straight away." },
  { title: "Can't open the app?", body: "Email support@smartride.ng from the address registered on your account with the subject \"Delete my account\". We may ask you to confirm it is you, and we will complete the deletion and reply to confirm." },
  { title: "What is deleted", body: "Your profile (name, email address, phone number and photo), saved places, push notification token and sign-in details. Trip history is detached from you. Driver accounts also have their licence, vehicle and insurance documents removed once the law no longer requires us to keep them." },
  { title: "What we keep", body: "Records we are legally required to retain, such as payment and trip records for tax, accounting and safety purposes, are kept for that purpose alone and for as long as the law requires. See the Privacy Policy for details." },
  { title: "This is permanent", body: "A deleted account cannot be restored. You can create a new account at any time." },
];

export default function DeleteAccountPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-back" href="/">
          &larr; Hopr
        </Link>
        <h1>Delete your account</h1>
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
        <Link href="/support">Support</Link>
        <a href="mailto:support@smartride.ng">support@smartride.ng</a>
      </footer>
    </main>
  );
}
