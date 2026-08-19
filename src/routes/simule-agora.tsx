import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";

const title = "Simule Agora | Faz Consórcio";
const description =
  "Solicite sua simulação gratuita de consórcio e receba uma proposta personalizada de um especialista.";

export const Route = createFileRoute("/simule-agora")({
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
  component: SimulePage,
});

function SimulePage() {
  return (
    <>
      <PageHero
        eyebrow="Simulação gratuita"
        title="Simule seu consórcio agora"
        description="Preencha os dados e nosso time retorna com a melhor opção para o seu objetivo."
      />
      <LeadForm />
    </>
  );
}
