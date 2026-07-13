import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { knotBookingUrl, ritualBarCopy } from "@/lib/siteData";

const eventTypes = ["Weddings", "Private Events", "Corporate Gatherings", "Festivals"];

export default function RitualBarPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title={ritualBarCopy.title}
        subtitle={ritualBarCopy.subtitle}
      />

      <div className="flex justify-center">
        <Image
          src="/media/brand/ritual-bar-oval.png"
          alt="The Ritual Bar oval logo"
          width={900}
          height={500}
          className="h-auto w-full max-w-xl object-contain"
          priority
        />
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <article className="section-card space-y-5 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d95c9a]">The Mobile Event Offering</p>
          <p className="text-lg leading-relaxed text-[#6a4634]">{ritualBarCopy.description}</p>
          <p className="text-lg leading-relaxed text-[#6a4634]">{ritualBarCopy.closing}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <CTAButton href="/contact#booking-form">Book Now</CTAButton>
            <CTAButton href={knotBookingUrl} variant="outline" external>
              Book on The Knot
            </CTAButton>
          </div>
        </article>
        <Image
          src="/media/gallery/IMG_5719.PNG"
          alt="The Ritual Bar mobile setup"
          width={1000}
          height={1200}
          className="h-[480px] w-full rounded-3xl object-cover shadow-[0_30px_70px_-40px_rgba(47,23,15,0.75)]"
        />
      </section>

      <section className="section-card p-8 sm:p-10">
        <h2 className="text-2xl font-semibold">Perfect For</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((item) => (
            <li
              key={item}
              className="rounded-xl bg-[#fff1e0] px-4 py-3 text-center font-medium text-[#603a2a]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <video
          className="h-[320px] w-full rounded-2xl object-cover"
          src="/media/gallery/IMG_0593.MOV"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        <Image
          src="/media/gallery/IMG_0907.JPG"
          alt="Ritual Bar beverage service"
          width={900}
          height={700}
          className="h-[320px] w-full rounded-2xl object-cover"
        />
      </section>
    </div>
  );
}
