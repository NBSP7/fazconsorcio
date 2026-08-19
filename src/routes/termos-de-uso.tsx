import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Termos de Uso | Faz Consórcio";
const description = "Condições de uso do site e dos serviços da Faz Consórcio.";

export const Route = createFileRoute("/termos-de-uso")({
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
  component: TermosDeUsoPage,
});

function TermosDeUsoPage() {
  return <PlaceholderPage eyebrow="Legal" title="Termos de Uso" description="Condições de uso do site e dos serviços da Faz Consórcio." />;
}
