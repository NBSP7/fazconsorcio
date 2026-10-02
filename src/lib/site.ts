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

export type ModalidadeRoute =
  | "/consorcio-de-imovel"
  | "/consorcio-de-automovel"
  | "/consorcio-de-moto"
  | "/consorcio-de-servico"
  | "/consorcio-de-caminhao";

export const MODALIDADES: { slug: string; title: string; desc: string; to?: ModalidadeRoute }[] = [
  { slug: "imoveis", title: "Consórcio de Imóveis", desc: "Casas, apartamentos, terrenos e construção.", to: "/consorcio-de-imovel" },
  { slug: "veiculos", title: "Consórcio de Veículos", desc: "Carros novos, usados e utilitários.", to: "/consorcio-de-automovel" },
  { slug: "motos", title: "Consórcio de Motos", desc: "Do uso urbano ao trabalho diário.", to: "/consorcio-de-moto" },
  { slug: "caminhoes", title: "Consórcio de Caminhões", desc: "Renovação e expansão de frota.", to: "/consorcio-de-caminhao" },
  { slug: "maquinas-equipamentos", title: "Consórcio de Máquinas e Equipamentos", desc: "Equipamentos agrícolas e industriais." },
  { slug: "energia-solar", title: "Consórcio de Energia Solar", desc: "Economia de energia com planejamento." },
  { slug: "reforma-construcao", title: "Consórcio de Reforma e Construção", desc: "Obras, reformas e ampliações." },
  { slug: "servicos", title: "Consórcio de Serviços", desc: "Procedimentos, viagens e educação.", to: "/consorcio-de-servico" },
  { slug: "investidores", title: "Consórcio para Investidores", desc: "Estratégias para crescimento patrimonial." },
];

export type IconName =
  | "home" | "building" | "map" | "store" | "hammer" | "key"
  | "car" | "carFront" | "truck" | "smartphone" | "repeat"
  | "bike" | "package" | "gauge" | "zap"
  | "heartPulse" | "partyPopper" | "plane" | "graduationCap" | "paintRoller"
  | "container" | "wrench" | "trendingUp";

export interface ModalidadePageData {
  key: string;
  to: ModalidadeRoute;
  shortName: string;
  formValue: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  conquistas: { icon: IconName; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

const CUSTOS =
  "Não há juros como em um financiamento. Existe taxa de administração e podem existir outros encargos previstos no contrato da administradora.";

export const MODALIDADE_PAGES: Record<string, ModalidadePageData> = {
  imovel: {
    key: "imovel",
    to: "/consorcio-de-imovel",
    shortName: "imóvel",
    formValue: "Imóveis",
    title: "Consórcio de Imóvel",
    metaTitle: "Consórcio de Imóvel sem Juros | Faz Consórcio",
    metaDescription:
      "Entenda como funciona o consórcio de imóvel para comprar casa, apartamento, terreno ou construir, com planejamento e sem juros de financiamento.",
    heroDescription:
      "Planeje a compra da casa própria, de um terreno ou de um imóvel comercial com uma carta de crédito, pagando parcelas mensais sem juros de financiamento.",
    conquistas: [
      { icon: "home", title: "Casa", desc: "Compre a casa ideal para você e sua família." },
      { icon: "building", title: "Apartamento", desc: "Novo, na planta ou usado, conforme regras do contrato." },
      { icon: "map", title: "Terreno", desc: "Garanta o terreno para seu projeto futuro." },
      { icon: "store", title: "Imóvel comercial", desc: "Salas, lojas e galpões para o seu negócio." },
      { icon: "hammer", title: "Construção", desc: "Use a carta para construir no seu terreno." },
      { icon: "key", title: "Quitação de financiamento", desc: "Quite um financiamento imobiliário, quando permitido." },
    ],
    faq: [
      { q: "Consórcio de imóvel tem juros?", a: CUSTOS },
      { q: "Posso usar a carta para construir?", a: "Sim, em geral a carta de crédito imobiliária pode ser usada para construção, conforme as regras da administradora e análise do projeto." },
      { q: "Posso quitar um financiamento com a carta?", a: "Muitas administradoras permitem usar a carta para quitar financiamento imobiliário. Confirme as condições do seu grupo antes de contratar." },
      { q: "Como acontece a contemplação?", a: "Pelas assembleias mensais, por sorteio ou por lance. Não há data garantida para ser contemplado." },
      { q: "Existe análise de crédito?", a: "Sim. Após a contemplação, a administradora analisa crédito e documentos do imóvel antes de liberar a carta." },
    ],
  },
  automovel: {
    key: "automovel",
    to: "/consorcio-de-automovel",
    shortName: "automóvel",
    formValue: "Veículos",
    title: "Consórcio de Automóvel",
    metaTitle: "Consórcio de Automóvel sem Juros | Faz Consórcio",
    metaDescription:
      "Veja como funciona o consórcio de automóvel para comprar carro 0 km, seminovo, SUV ou utilitário com planejamento e sem juros de financiamento.",
    heroDescription:
      "Compre seu carro 0 km ou seminovo com uma carta de crédito e parcelas mensais planejadas, sem os juros de um financiamento tradicional.",
    conquistas: [
      { icon: "car", title: "Carro 0 km", desc: "Escolha o modelo novo que deseja." },
      { icon: "carFront", title: "Seminovo", desc: "Compre veículos usados, conforme regras do contrato." },
      { icon: "truck", title: "Utilitário", desc: "Picapes e vans para trabalho ou família." },
      { icon: "car", title: "SUV", desc: "Mais espaço e conforto para o dia a dia." },
      { icon: "smartphone", title: "Carro para aplicativo", desc: "Um veículo para gerar renda com aplicativos." },
      { icon: "repeat", title: "Troca de veículo", desc: "Planeje a troca do seu carro atual." },
    ],
    faq: [
      { q: "Consórcio de automóvel tem juros?", a: CUSTOS },
      { q: "Posso comprar carro usado?", a: "Em geral sim, desde que o veículo atenda às regras da administradora, como idade máxima e avaliação." },
      { q: "Posso escolher qualquer marca?", a: "Sim. A carta de crédito permite escolher marca e modelo dentro do valor do crédito." },
      { q: "Posso dar lance para antecipar?", a: "Sim. O lance é uma oferta de antecipação de parcelas e pode aumentar as chances de contemplação, sem garantia." },
      { q: "O que acontece depois de ser contemplado?", a: "A administradora faz a análise de crédito e, aprovada, libera o pagamento do veículo escolhido." },
    ],
  },
  moto: {
    key: "moto",
    to: "/consorcio-de-moto",
    shortName: "moto",
    formValue: "Motos",
    title: "Consórcio de Moto",
    metaTitle: "Consórcio de Moto sem Juros | Faz Consórcio",
    metaDescription:
      "Saiba como funciona o consórcio de moto para comprar moto urbana, de trabalho, scooter ou alta cilindrada com parcelas planejadas e sem juros.",
    heroDescription:
      "Conquiste sua próxima motocicleta para o dia a dia ou para o trabalho com carta de crédito e parcelas mensais sem juros de financiamento.",
    conquistas: [
      { icon: "bike", title: "Moto urbana", desc: "Mobilidade prática e econômica na cidade." },
      { icon: "package", title: "Moto para trabalho", desc: "Ideal para entregas e uso profissional." },
      { icon: "gauge", title: "Alta cilindrada", desc: "Para quem busca desempenho e viagens." },
      { icon: "zap", title: "Scooter", desc: "Conforto e agilidade no trânsito." },
    ],
    faq: [
      { q: "Consórcio de moto tem juros?", a: CUSTOS },
      { q: "Posso usar a moto para trabalhar?", a: "Sim. Você pode adquirir uma moto para uso profissional, como entregas." },
      { q: "Posso comprar moto usada?", a: "Depende das regras da administradora, que costumam definir limites de ano e avaliação do bem." },
      { q: "Como funciona o sorteio?", a: "Nas assembleias mensais são sorteadas cotas do grupo. Cada participante em dia concorre." },
    ],
  },
  servico: {
    key: "servico",
    to: "/consorcio-de-servico",
    shortName: "serviço",
    formValue: "Serviços",
    title: "Consórcio de Serviço",
    metaTitle: "Consórcio de Serviços sem Juros | Faz Consórcio",
    metaDescription:
      "Entenda o consórcio de serviços para cirurgias, festas, viagens, cursos e reformas, com planejamento financeiro e sem juros de financiamento.",
    heroDescription:
      "Planeje procedimentos, festas, viagens, cursos ou reformas com uma carta de crédito para serviços e parcelas mensais sem juros.",
    conquistas: [
      { icon: "heartPulse", title: "Cirurgias e procedimentos", desc: "Procedimentos médicos, estéticos e odontológicos." },
      { icon: "partyPopper", title: "Festas e casamentos", desc: "Organize seu evento com tranquilidade." },
      { icon: "plane", title: "Viagens", desc: "Pacotes e roteiros planejados com antecedência." },
      { icon: "graduationCap", title: "Cursos e educação", desc: "Graduação, pós e cursos de especialização." },
      { icon: "paintRoller", title: "Reformas", desc: "Mão de obra e serviços para reformar." },
    ],
    faq: [
      { q: "Consórcio de serviços tem juros?", a: CUSTOS },
      { q: "Quais serviços posso contratar?", a: "Serviços prestados por pessoa jurídica, como saúde, educação, eventos, turismo e reformas, conforme regras da administradora." },
      { q: "O pagamento vai para mim ou para o prestador?", a: "Em geral a administradora paga diretamente ao prestador do serviço, mediante apresentação de documentos." },
      { q: "Posso dar lance?", a: "Sim. O lance pode aumentar as chances de contemplação antecipada, sem garantia de prazo." },
    ],
  },
  caminhao: {
    key: "caminhao",
    to: "/consorcio-de-caminhao",
    shortName: "caminhão",
    formValue: "Caminhões",
    title: "Consórcio de Caminhão",
    metaTitle: "Consórcio de Caminhão sem Juros | Faz Consórcio",
    metaDescription:
      "Veja como funciona o consórcio de caminhão para renovar ou ampliar sua frota, comprar cavalo mecânico e implementos com planejamento e sem juros.",
    heroDescription:
      "Renove ou amplie sua frota com uma carta de crédito para caminhões, implementos e cavalo mecânico, pagando parcelas planejadas sem juros de financiamento.",
    conquistas: [
      { icon: "truck", title: "Caminhão novo", desc: "Modelos 0 km para sua operação." },
      { icon: "truck", title: "Caminhão seminovo", desc: "Usados conforme regras da administradora." },
      { icon: "container", title: "Implementos", desc: "Carrocerias, baús, caçambas e reboques." },
      { icon: "trendingUp", title: "Ampliação de frota", desc: "Cresça sua operação com planejamento." },
      { icon: "repeat", title: "Renovação de frota", desc: "Substitua veículos antigos." },
      { icon: "wrench", title: "Cavalo mecânico", desc: "Tração para transporte de carga." },
    ],
    faq: [
      { q: "Consórcio de caminhão tem juros?", a: CUSTOS },
      { q: "Empresas podem contratar?", a: "Sim. Pessoas físicas e jurídicas, como transportadoras e caminhoneiros autônomos, podem participar." },
      { q: "Posso comprar implementos?", a: "Em geral sim, conforme as regras da administradora e do grupo." },
      { q: "Posso comprar caminhão usado?", a: "Depende das regras da administradora, que costumam definir idade máxima e avaliação do veículo." },
      { q: "Existe análise de crédito?", a: "Sim. Após a contemplação, a administradora analisa o crédito antes de liberar a carta." },
    ],
  },
};

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
