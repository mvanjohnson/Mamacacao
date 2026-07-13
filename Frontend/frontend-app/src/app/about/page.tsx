import { PageHero } from "@/components/PageHero";
import { sourcingPoints } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Our Story"
        subtitle="Mama Cacao Wow began in Lake Atitlan, Guatemala, and continues as a bridge between ritual, community, and nourishing drinks."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <article className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">From Clare, Founder</h2>
          <p className="mt-4 leading-relaxed text-[#6a4634]">
            I started Mama Cacao Wow after experiencing cacao in its true form while living in
            Guatemala. That experience shifted how I view what we consume, where it comes from,
            and how drinks can create meaningful connection.
          </p>
          <p className="mt-4 leading-relaxed text-[#6a4634]">
            We bring intentionally sourced cacao and plant ingredients to Arkansas through drinks
            that are nutritious, beautiful, and inclusive for all ages. Every cup is designed to
            feel good in the body and meaningful in the moment.
          </p>
        </article>

        <article className="rounded-2xl border border-white/70 bg-[#fff1de] p-6 shadow-[0_20px_45px_-35px_rgba(95,50,29,0.9)] sm:p-8">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-4 leading-relaxed text-[#6a4634]">
            To create meaningful connection through cacao and intentional beverages while honoring
            the land, the people, and the ritual of gathering.
          </p>
          <h3 className="mt-6 text-xl font-semibold">Vision</h3>
          <p className="mt-3 leading-relaxed text-[#6a4634]">
            To grow into a globally recognized brand that transforms drinks into moments of
            connection, presence, and celebration.
          </p>
        </article>
      </section>

      <section className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Our Sourcing Standards</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {sourcingPoints.map((point) => (
            <li key={point} className="rounded-xl bg-[#fff3e7] px-4 py-4 text-[#5f3929]">
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
