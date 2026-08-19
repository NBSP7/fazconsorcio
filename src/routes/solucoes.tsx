import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SOLUCOES } from "@/lib/site";

const title = "Soluções | Faz Consórcio";
const description =
  "Soluções de consórcio para você, sua família, sua empresa, investidores e produtores rurais, com consultoria especializada.";

export const Route = createFileRoute("/solucoes")({
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
  component: SolucoesPage,
});

function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="A solução certa para o seu perfil"
        description="Estratégias personalizadas de consórcio para pessoas físicas, empresas e investidores."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUCOES.map((s) => (
              <article
                key={s.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
              >
                <h2 className="font-display text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  Página detalhada em breve
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
