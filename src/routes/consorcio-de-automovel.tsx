import { createFileRoute } from "@tanstack/react-router";
import { ModalidadePage, modalidadeHead } from "@/components/site/ModalidadePage";
import { MODALIDADE_PAGES } from "@/lib/site";

export const Route = createFileRoute("/consorcio-de-automovel")({
  head: () => modalidadeHead(MODALIDADE_PAGES.automovel),
  component: ConsorcioAutomovelPage,
});

function ConsorcioAutomovelPage() {
  return <ModalidadePage data={MODALIDADE_PAGES.automovel} />;
}
