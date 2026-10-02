import { createFileRoute } from "@tanstack/react-router";
import { ModalidadePage, modalidadeHead } from "@/components/site/ModalidadePage";
import { MODALIDADE_PAGES } from "@/lib/site";

export const Route = createFileRoute("/consorcio-de-imovel")({
  head: () => modalidadeHead(MODALIDADE_PAGES.imovel),
  component: ConsorcioImovelPage,
});

function ConsorcioImovelPage() {
  return <ModalidadePage data={MODALIDADE_PAGES.imovel} />;
}
