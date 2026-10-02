import { createFileRoute } from "@tanstack/react-router";
import { ModalidadePage, modalidadeHead } from "@/components/site/ModalidadePage";
import { MODALIDADE_PAGES } from "@/lib/site";

export const Route = createFileRoute("/consorcio-de-servico")({
  head: () => modalidadeHead(MODALIDADE_PAGES.servico),
  component: ConsorcioServicoPage,
});

function ConsorcioServicoPage() {
  return <ModalidadePage data={MODALIDADE_PAGES.servico} />;
}
