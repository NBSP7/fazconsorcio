import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Avisos Legais | Faz Consórcio";
const description = "Informações legais e regulatórias sobre consórcios e contemplação.";

export const Route = createFileRoute("/avisos-legais")({
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
  component: AvisosLegaisPage,
});

function AvisosLegaisPage() {
  return <PlaceholderPage eyebrow="Legal" title="Avisos Legais" description="Informações legais e regulatórias sobre consórcios e contemplação." />;
}
