import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MODALIDADES } from "@/lib/site";

const title = "Consórcios | Modalidades da Faz Consórcio";
const description =
  "Conheça as 9 modalidades de consórcio da Faz Consórcio: imóveis, veículos, motos, caminhões, máquinas, energia solar, reforma, serviços e investidores.";

export const Route = createFileRoute("/consorcios")({
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
  component: ConsorciosPage,
});

function ConsorciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Modalidades"
        title="Consórcios para cada objetivo"
        description="Escolha a modalidade ideal e conquiste seu bem sem juros, com parcelas planejadas."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODALIDADES.map((m) => {
              const cls =
                "flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1";
              const inner = (
                <>
                  <h2 className="font-display text-lg font-semibold">{m.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.desc}</p>
                  {m.to ? (
                    <span className="mt-6 inline-block text-sm font-semibold text-success">Saiba mais →</span>
                  ) : (
                    <span className="mt-6 inline-block self-start rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      Página detalhada em breve
                    </span>
                  )}
                </>
              );
              return m.to ? (
                <Link key={m.slug} to={m.to} className={cls}>
                  {inner}
                </Link>
              ) : (
                <article key={m.slug} className={cls}>
                  {inner}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
