import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { HowItWorks } from "@/components/site/HowItWorks";

const title = "Como Funciona o Consórcio | Faz Consórcio";
const description =
  "Entenda passo a passo como funciona o consórcio: grupos, assembleias, lances, contemplação e uso da carta de crédito.";

export const Route = createFileRoute("/como-funciona")({
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
  component: ComoFuncionaPage,
});

function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        eyebrow="Passo a passo"
        title="Como funciona o consórcio"
        description="Um sistema de compra planejada, sem juros, com regras claras e acompanhamento especializado."
      />
      <HowItWorks />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground shadow-soft">
            Conteúdo detalhado sobre grupos, assembleias, lances, contemplação e liberação da carta
            de crédito será publicado em breve.
          </p>
        </div>
      </section>
    </>
  );
}
