import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

const HERO_VIDEO_SRC = "/media/gallery/IMG_0593.MOV";
const HERO_POSTER_SRC = "/media/gallery/IMG_0907.JPG";

export function HeroVideoSection() {
  return (
    <section className="hero-video relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="hero-video-overlay absolute inset-0" />
      <div className="grain-overlay absolute inset-0 opacity-20" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center text-white sm:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-white/90 sm:text-sm">
          Ceremonial Cacao &amp; our Mobile Ritual Bar
        </p>
        <h1 className="font-serif mt-6 max-w-4xl text-4xl font-medium leading-[1.12] sm:text-5xl lg:text-6xl">
          Elevate your gathering with ceremonial cacao, plant-based elixirs, and hand crafted
          botanical beverages
        </h1>
        <p className="font-serif mt-6 max-w-2xl text-lg italic text-white/95 sm:text-xl">
          Cacao is more than a drink, it&apos;s a prayer weaving us together.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <CTAButton
            href="/ritual-bar"
            className="bg-[#f5ebe0]/90 text-[#3d2216] hover:bg-white"
          >
            The Ritual Bar
          </CTAButton>
          <Link
            href="/contact#booking-form"
            className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/15"
          >
            Book Now
          </Link>
        </div>
      </div>

      <p className="absolute bottom-8 left-0 right-0 z-10 px-6 text-center text-[0.65rem] uppercase tracking-[0.3em] text-white/85 sm:text-xs">
        Your event called — it wants a ritual bar
      </p>
    </section>
  );
}
