import { PageHero } from "@/components/site/PageHero";

interface PlaceholderPageProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground shadow-soft">
            Esta página está em construção. O conteúdo completo será publicado em breve.
          </div>
        </div>
      </section>
    </>
  );
}
