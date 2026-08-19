import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Política de Cookies | Faz Consórcio";
const description = "Entenda como utilizamos cookies e tecnologias similares em nosso site.";

export const Route = createFileRoute("/politica-de-cookies")({
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
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return <PlaceholderPage eyebrow="Legal" title="Política de Cookies" description="Entenda como utilizamos cookies e tecnologias similares em nosso site." />;
}
