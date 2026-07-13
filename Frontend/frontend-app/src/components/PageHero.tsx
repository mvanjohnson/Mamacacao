type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="section-card relative overflow-hidden px-6 py-14 text-[#3d2216] sm:px-10">
      <div className="accent-gradient absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl" />
      <div className="accent-gradient absolute -bottom-20 -left-20 h-56 w-56 rounded-full opacity-15 blur-3xl" />
      <p className="relative text-sm uppercase tracking-[0.2em] text-[#d95c9a]">Mama Cacao Wow</p>
      <h1 className="relative mt-3 font-serif text-3xl font-medium tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-[#6a4634] sm:text-lg">
        {subtitle}
      </p>
    </section>
  );
}
