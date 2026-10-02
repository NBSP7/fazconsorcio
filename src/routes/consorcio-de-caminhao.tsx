import { createFileRoute } from "@tanstack/react-router";
import { ModalidadePage, modalidadeHead } from "@/components/site/ModalidadePage";
import { MODALIDADE_PAGES } from "@/lib/site";

export const Route = createFileRoute("/consorcio-de-caminhao")({
  head: () => modalidadeHead(MODALIDADE_PAGES.caminhao),
  component: ConsorcioCaminhaoPage,
});

function ConsorcioCaminhaoPage() {
  return <ModalidadePage data={MODALIDADE_PAGES.caminhao} />;
}
