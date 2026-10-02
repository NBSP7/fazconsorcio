import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { NAV_LINKS, FOOTER_LINKS, LEGAL_LINKS, MODALIDADE_PAGES } from "@/lib/site";

const title = "Mapa do Site | Faz Consórcio";
const description = "Navegue por todas as páginas e seções do site da Faz Consórcio.";

export const Route = createFileRoute("/mapa-do-site")({
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
  component: MapaDoSitePage,
});

const linkCls = "text-muted-foreground transition-colors hover:text-success";

function MapaDoSitePage() {
  return (
    <>
      <PageHero eyebrow="Navegação" title="Mapa do Site" description={description} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>{l.label}</Link>
                  {l.to === "/consorcios" && (
                    <ul className="ml-5 mt-3 space-y-2 border-l border-border pl-4 text-sm">
                      {Object.values(MODALIDADE_PAGES).map((m) => (
                        <li key={m.to}>
                          <Link to={m.to} className={linkCls}>{m.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li><Link to="/simule-agora" className={linkCls}>Simule Agora</Link></li>
              {[...FOOTER_LINKS, ...LEGAL_LINKS].map((l) => (
                <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
