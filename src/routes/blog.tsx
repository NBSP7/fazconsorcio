import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const title = "Blog | Faz Consórcio";
const description =
  "Conteúdos sobre consórcio, planejamento financeiro, investimentos e conquista de patrimônio.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Educação financeira e consórcio"
        description="Artigos práticos para você decidir com segurança e construir patrimônio."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="h-36 rounded-xl bg-secondary" />
                <h2 className="mt-5 font-display text-lg font-semibold text-muted-foreground">
                  Artigo em breve
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Estamos preparando os primeiros conteúdos do blog.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
