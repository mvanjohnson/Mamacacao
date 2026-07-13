import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { productDetails } from "@/lib/siteData";

export default function ProductPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Product"
        subtitle="Ceremonial cacao sourced with intention — for ritual, connection, and everyday nourishment."
      />

      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-white/70 shadow-[0_30px_70px_-40px_rgba(47,23,15,0.75)]">
          <Image
            src="/media/images/mamacacao-brick.jpeg"
            alt="Mama Cacao ceremonial cacao brick"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <article className="section-card space-y-6 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d95c9a]">Ceremonial Cacao</p>
          <h2 className="font-serif text-3xl font-medium text-[#3d2216] sm:text-4xl">
            {productDetails.name}
          </h2>
          <p className="leading-relaxed text-[#6a4634]">{productDetails.description}</p>

          <div className="space-y-3">
            {productDetails.pricing.map((item) => (
              <div
                key={item.size}
                className="flex items-center justify-between rounded-xl bg-[#fff1e0] px-5 py-4"
              >
                <span className="font-medium text-[#603a2a]">{item.size}</span>
                <span className="font-semibold text-[#5f321d]">{item.price}</span>
              </div>
            ))}
          </div>

          <CTAButton href="/contact#booking-form" variant="secondary">
            Inquire to Order
          </CTAButton>
        </article>
      </section>
    </div>
  );
}
