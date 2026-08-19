export const WHATSAPP_NUMBER = "5581999999999";

export function whatsappUrl(message = "Olá! Gostaria de receber uma simulação de consórcio.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Consórcios", to: "/consorcios" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Como Funciona", to: "/como-funciona" },
  { label: "Blog", to: "/blog" },
] as const;

export const MODALIDADES = [
  { slug: "imoveis", title: "Consórcio de Imóveis", desc: "Casas, apartamentos, terrenos e construção." },
  { slug: "veiculos", title: "Consórcio de Veículos", desc: "Carros novos, usados e utilitários." },
  { slug: "motos", title: "Consórcio de Motos", desc: "Do uso urbano ao trabalho diário." },
  { slug: "caminhoes", title: "Consórcio de Caminhões", desc: "Renovação e expansão de frota." },
  { slug: "maquinas-equipamentos", title: "Consórcio de Máquinas e Equipamentos", desc: "Equipamentos agrícolas e industriais." },
  { slug: "energia-solar", title: "Consórcio de Energia Solar", desc: "Economia de energia com planejamento." },
  { slug: "reforma-construcao", title: "Consórcio de Reforma e Construção", desc: "Obras, reformas e ampliações." },
  { slug: "servicos", title: "Consórcio de Serviços", desc: "Procedimentos, viagens e educação." },
  { slug: "investidores", title: "Consórcio para Investidores", desc: "Estratégias para crescimento patrimonial." },
] as const;

export const SOLUCOES = [
  { slug: "para-voce", title: "Para Você", desc: "Planejamento pessoal e familiar para conquistar bens." },
  { slug: "para-sua-familia", title: "Para Sua Família", desc: "Segurança patrimonial e projetos de longo prazo." },
  { slug: "para-sua-empresa", title: "Para Sua Empresa", desc: "Capex sem juros: frota, maquinário e estrutura." },
  { slug: "para-investidores", title: "Para Investidores", desc: "Alavancagem patrimonial com custo reduzido." },
  { slug: "para-produtor-rural", title: "Para o Produtor Rural", desc: "Máquinas, implementos e terras." },
  { slug: "consultoria", title: "Consultoria Especializada", desc: "Análise de perfil e escolha da melhor cota." },
] as const;

export const FOOTER_LINKS = [
  { label: "Sobre", to: "/sobre" },
  { label: "Fale Conosco", to: "/fale-conosco" },
  { label: "FAQ", to: "/faq" },
  { label: "Mapa do Site", to: "/mapa-do-site" },
  { label: "Área de Parceiros", to: "/parceiros" },
] as const;

export const LEGAL_LINKS = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Política de Cookies", to: "/politica-de-cookies" },
  { label: "Termos de Uso", to: "/termos-de-uso" },
  { label: "Avisos Legais", to: "/avisos-legais" },
] as const;
