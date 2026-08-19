import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Fale Conosco | Faz Consórcio";
const description = "Entre em contato com a equipe da Faz Consórcio por WhatsApp, e-mail ou telefone.";

export const Route = createFileRoute("/fale-conosco")({
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
  component: FaleConoscoPage,
});

function FaleConoscoPage() {
  return <PlaceholderPage eyebrow="Contato" title="Fale Conosco" description="Entre em contato com a equipe da Faz Consórcio por WhatsApp, e-mail ou telefone." />;
}
