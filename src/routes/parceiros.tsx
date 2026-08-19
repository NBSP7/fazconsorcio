import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const title = "Área de Parceiros | Faz Consórcio";
const description = "Área exclusiva para parceiros e representantes da Faz Consórcio.";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: ParceirosPage,
});

function ParceirosPage() {
  return (
    <>
      <PageHero
        eyebrow="Acesso restrito"
        title="Seja Parceiro Faz Consórcio"
        description="Esta página é acessada apenas por convite direto da nossa equipe."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground shadow-soft">
            Conteúdo do programa de parceria, benefícios e formulário de cadastro serão publicados em
            breve.
          </div>
        </div>
      </section>
    </>
  );
}
