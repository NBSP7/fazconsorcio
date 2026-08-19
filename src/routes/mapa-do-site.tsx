import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

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

function MapaDoSitePage() {
  return <PlaceholderPage eyebrow="Navegação" title="Mapa do Site" description="Navegue por todas as páginas e seções do site da Faz Consórcio." />;
}
