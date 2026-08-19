import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Sobre a Faz Consórcio | Faz Consórcio";
const description = "Conheça a história, os valores e a equipe da Faz Consórcio.";

export const Route = createFileRoute("/sobre")({
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
  component: SobrePage,
});

function SobrePage() {
  return <PlaceholderPage eyebrow="Institucional" title="Sobre a Faz Consórcio" description="Conheça a história, os valores e a equipe da Faz Consórcio." />;
}
