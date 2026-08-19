interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-hero pb-16 pt-36 md:pt-44">
      <div className="mx-auto max-w-4xl px-5 text-center text-primary-foreground">
        {eyebrow && (
          <span className="inline-block rounded-full bg-success/20 px-4 py-1.5 text-sm font-medium text-success-foreground ring-1 ring-success/40">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-display text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">{description}</p>
        )}
      </div>
    </section>
  );
}
