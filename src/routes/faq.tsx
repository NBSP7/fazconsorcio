import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const title = "Perguntas Frequentes | Faz Consórcio";
const description = "Respostas para as dúvidas mais comuns sobre consórcio e nossos serviços.";

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

function FaqPage() {
  return <PlaceholderPage eyebrow="FAQ" title="Perguntas Frequentes" description="Respostas para as dúvidas mais comuns sobre consórcio e nossos serviços." />;
}
