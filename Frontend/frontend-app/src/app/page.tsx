import Image from "next/image";
import Link from "next/link";
import { HeroVideoSection } from "@/components/HeroVideoSection";
import { CTAButton } from "@/components/CTAButton";
import { knotBookingUrl, offerings, ritualBarCopy } from "@/lib/siteData";

export default function Home() {
  return (
    <div className="pb-8">
      <div className="-mx-4 -mt-8 sm:-mx-6">
        <HeroVideoSection />
      </div>

      <div className="mt-14 space-y-14">
        <section className="section-card grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What We Do</h2>
            <ul className="space-y-2 text-[#603a2a]">
              {offerings.map((item) => (
                <li key={item} className="rounded-xl bg-white/90 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/media/gallery/IMG_4108.JPG"
            alt="Fresh cacao being poured at the stand"
            width={900}
            height={1200}
            className="h-full max-h-[540px] w-full rounded-2xl object-cover"
          />
        </section>

        <section className="section-card grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d95c9a]">{ritualBarCopy.title}</p>
            <h2 className="text-3xl font-semibold">{ritualBarCopy.subtitle}</h2>
            <p className="leading-relaxed text-[#6a4634]">{ritualBarCopy.description}</p>
            <p className="leading-relaxed text-[#6a4634]">{ritualBarCopy.closing}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <CTAButton href="/contact#booking-form">Book Now</CTAButton>
              <CTAButton href={knotBookingUrl} variant="outline" external>
                Book on The Knot
              </CTAButton>
            </div>
          </div>
          <Image
            src="/media/gallery/IMG_0576.JPG"
            alt="The Ritual Bar at an event"
            width={900}
            height={700}
            className="h-[400px] w-full rounded-2xl object-cover"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Image
            src="/media/gallery/IMG_3739.PNG"
            alt="Mama Cacao Wow beverage menu"
            width={1200}
            height={1200}
            className="h-[380px] w-full rounded-2xl object-cover"
          />
          <div className="section-card p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d95c9a]">Where To Find Us</p>
            <h2 className="mt-3 text-3xl font-semibold">Pop-ups, festivals, private events, and more.</h2>
            <p className="mt-4 leading-relaxed text-[#6a4634]">
              We move with the seasons and bring cacao ceremony energy wherever community gathers.
              Follow us for weekly locations and booking windows.
            </p>
            <a
              href="https://www.instagram.com/mamacacaowow"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#5f321d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#35c7cf] hover:text-[#1d120d]"
            >
              Follow @mamacacaowow
            </a>
          </div>
        </section>

        <section className="section-card flex flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d95c9a]">Stay Tuned</p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-[#3d2216] sm:text-5xl">
            Full Menu Coming Soon
          </h2>
          <p className="mt-4 max-w-xl text-[#6a4634]">
            We&apos;re crafting something beautiful. Check back soon for our complete beverage menu.
          </p>
        </section>
      </div>
    </div>
  );
}
