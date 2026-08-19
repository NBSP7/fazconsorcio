import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Política de Privacidade | Faz Consórcio";
const description = "Saiba como a Faz Consórcio coleta, usa e protege seus dados pessoais.";

export const Route = createFileRoute("/politica-de-privacidade")({
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
  component: PoliticaPrivacidadePage,
});

function PoliticaPrivacidadePage() {
  return <PlaceholderPage eyebrow="Legal" title="Política de Privacidade" description="Saiba como a Faz Consórcio coleta, usa e protege seus dados pessoais." />;
}
