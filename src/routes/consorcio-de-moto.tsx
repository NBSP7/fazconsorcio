import { createFileRoute } from "@tanstack/react-router";
import { ModalidadePage, modalidadeHead } from "@/components/site/ModalidadePage";
import { MODALIDADE_PAGES } from "@/lib/site";

export const Route = createFileRoute("/consorcio-de-moto")({
  head: () => modalidadeHead(MODALIDADE_PAGES.moto),
  component: ConsorcioMotoPage,
});

function ConsorcioMotoPage() {
  return <ModalidadePage data={MODALIDADE_PAGES.moto} />;
}
