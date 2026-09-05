"use client";

import { useState } from "react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ??
  "https://smartride.techtree.lifestyle/api";

type BookingUse = "personal" | "business";
type Status = "idle" | "sending" | "joined" | "already" | "error";

/** Waitlist signup for customers moving from WhatsApp booking to the app. */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [bookingUse, setBookingUse] = useState<BookingUse>("personal");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          role: "rider",
          city: city.trim() || "Zaria",
        }),
      });

      const body = (await response.json().catch(() => null)) as {
        alreadyOn?: boolean;
        message?: string | string[];
      } | null;

      if (!response.ok) {
        // The API returns an array of validation messages; show the first.
        const message = Array.isArray(body?.message)
          ? body?.message[0]
          : body?.message;
        setError(message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus(body?.alreadyOn ? "already" : "joined");
      setEmail("");
      setCity("");
    } catch {
      setError(
        "Could not reach Smart Ride. Check your connection and try again.",
      );
      setStatus("error");
    }
  };

  if (status === "joined" || status === "already") {
    return (
      <div className="waitlist-done" role="status">
        <p className="waitlist-done-title">
          {status === "already"
            ? "You're already on the list"
            : "You're on the list"}
        </p>
        <p>
          We&apos;ll email you as soon as Smart Ride app bookings are ready in
          Zaria. No spam, and you can ask us to remove you any time.
        </p>
        <button
          type="button"
          className="link-button"
          onClick={() => setStatus("idle")}
        >
          Add another address
        </button>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={submit} noValidate>
      <fieldset className="waitlist-roles">
        <legend className="visually-hidden">Booking type</legend>

        {(["personal", "business"] as BookingUse[]).map((option) => (
          <label
            key={option}
            className={`waitlist-role${bookingUse === option ? " is-selected" : ""}`}
          >
            <input
              type="radio"
              name="bookingUse"
              value={option}
              checked={bookingUse === option}
              onChange={() => setBookingUse(option)}
            />
            {option === "personal" ? "Personal rides" : "Team bookings"}
          </label>
        ))}
      </fieldset>

      <div className="waitlist-fields">
        <label className="visually-hidden" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="visually-hidden" htmlFor="waitlist-city">
          City
        </label>
        <input
          id="waitlist-city"
          type="text"
          autoComplete="address-level2"
          placeholder="Zaria area (optional)"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button
          type="submit"
          className="pill-button"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>

      {error && (
        <p className="waitlist-error" role="alert">
          {error}
        </p>
      )}

      <p className="waitlist-note">
        We&apos;ll only use your email to tell you when Smart Ride app bookings
        are ready.
      </p>
    </form>
  );
}
