"use client";

import { PageHero } from "@/components/PageHero";
import { contactEmail } from "@/lib/siteData";
import { FormEvent, useState } from "react";

type BookingFormState = {
  name: string;
  eventType: string;
  date: string;
  location: string;
  guestCount: string;
  notes: string;
};

const fieldClass =
  "w-full rounded-xl border border-[#efcfaa] bg-white px-4 py-3 outline-none transition focus:border-[#35c7cf] focus:ring-2 focus:ring-[#35c7cf]/25";

export default function ContactPage() {
  const [formData, setFormData] = useState<BookingFormState>({
    name: "",
    eventType: "",
    date: "",
    location: "",
    guestCount: "",
    notes: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Booking Inquiry - ${formData.eventType || "Mama Cacao Event"}`,
    );
    const body = encodeURIComponent(
      [
        "New booking inquiry from Mama Cacao website:",
        "",
        `Name: ${formData.name}`,
        `Event Type: ${formData.eventType}`,
        `Date: ${formData.date}`,
        `Location: ${formData.location}`,
        `Guest Count: ${formData.guestCount}`,
        "",
        "Vision / Notes:",
        formData.notes,
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-10">
      <PageHero
        title="Contact"
        subtitle="Bring Mama Cacao to your next gathering. Share your vision and we will craft a menu around it."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <article className="section-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
          <p className="mt-4 leading-relaxed text-[#6a4634]">
            Email:{" "}
            <a className="underline underline-offset-2" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <p className="mt-2 leading-relaxed text-[#6a4634]">
            Instagram:{" "}
            <a
              className="underline underline-offset-2"
              href="https://www.instagram.com/mamacacaowow"
              target="_blank"
              rel="noreferrer"
            >
              @mamacacaowow
            </a>
          </p>
        </article>

        <form
          id="booking-form"
          onSubmit={handleSubmit}
          className="section-card p-6 sm:p-8"
        >
          <h2 className="text-2xl font-semibold">Booking Inquiry</h2>
          <p className="mt-2 text-sm text-[#6a4634]">
            Submitting sends your inquiry to {contactEmail}
          </p>
          <div className="mt-5 space-y-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-[#603a2a]">Name</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className={fieldClass}
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-[#603a2a]">Event Type</span>
              <input
                required
                name="eventType"
                value={formData.eventType}
                onChange={(e) => setFormData((prev) => ({ ...prev, eventType: e.target.value }))}
                className={fieldClass}
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-[#603a2a]">Date</span>
              <input
                required
                name="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                className={fieldClass}
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-[#603a2a]">Location</span>
              <input
                required
                name="location"
                value={formData.location}
                onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                className={fieldClass}
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-[#603a2a]">Guest Count</span>
              <input
                required
                name="guestCount"
                type="number"
                min={1}
                value={formData.guestCount}
                onChange={(e) => setFormData((prev) => ({ ...prev, guestCount: e.target.value }))}
                className={fieldClass}
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-[#603a2a]">Vision / Notes</span>
              <textarea
                required
                name="notes"
                value={formData.notes}
                onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                className={`${fieldClass} min-h-32`}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-full bg-[#5f321d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d95c9a]"
          >
            Send Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}
