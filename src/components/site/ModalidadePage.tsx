import { Link } from "@tanstack/react-router";
import {
  Home, Building2, MapPin, Store, Hammer, KeyRound, Car, CarFront, Truck, Smartphone, Repeat,
  Bike, Package, Gauge, Zap, HeartPulse, PartyPopper, Plane, GraduationCap, PaintRoller,
  Container, Wrench, TrendingUp, BadgePercent, CalendarCheck, Wallet, Shuffle, Trophy, ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MODALIDADE_PAGES, whatsappUrl, type IconName, type ModalidadePageData } from "@/lib/site";

const ICONS: Record<IconName, LucideIcon> = {
  home: Home, building: Building2, map: MapPin, store: Store, hammer: Hammer, key: KeyRound,
  car: Car, carFront: CarFront, truck: Truck, smartphone: Smartphone, repeat: Repeat,
  bike: Bike, package: Package, gauge: Gauge, zap: Zap,
  heartPulse: HeartPulse, partyPopper: PartyPopper, plane: Plane, graduationCap: GraduationCap,
  paintRoller: PaintRoller, container: Container, wrench: Wrench, trendingUp: TrendingUp,
};

const VANTAGENS = [
  { icon: BadgePercent, title: "Sem juros", desc: "Você não paga juros de financiamento; há taxa de administração prevista em contrato." },
  { icon: CalendarCheck, title: "Parcelas planejadas", desc: "Pagamentos mensais que se encaixam no seu planejamento." },
  { icon: Wallet, title: "Poder de compra à vista", desc: "Com a carta liberada, você negocia como comprador à vista." },
  { icon: Shuffle, title: "Flexibilidade no uso da carta", desc: "Escolha o bem dentro da categoria e do valor do crédito." },
];

const PASSOS = [
  { icon: Wallet, title: "Escolha da carta", desc: "Defina o valor de crédito adequado ao seu objetivo." },
  { icon: CalendarCheck, title: "Pagamento mensal", desc: "Pague as parcelas e participe das assembleias." },
  { icon: Trophy, title: "Contemplação", desc: "Seja contemplado por sorteio ou por lance." },
  { icon: ShoppingBag, title: "Compra do bem", desc: "Após a análise de crédito, use a carta para adquirir." },
];

export function ModalidadePage({ data }: { data: ModalidadePageData }) {
  const outras = Object.values(MODALIDADE_PAGES).filter((m) => m.key !== data.key);
  return (
    <>
      <PageHero eyebrow="Consórcio" title={data.title} description={data.heroDescription}>
        <Button variant="hero" size="lg" asChild>
          <a href="#contato">Simular agora</a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a
            href={whatsappUrl(`Olá! Gostaria de receber informações sobre consórcio de ${data.shortName}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </Button>
      </PageHero>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">O que você pode conquistar</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.conquistas.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Vantagens</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VANTAGENS.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-success text-success-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
            Como funciona o consórcio de {data.shortName}?
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((p, i) => (
              <div key={p.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="absolute right-5 top-5 font-display text-4xl font-bold text-primary/10">{i + 1}</span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-success text-success-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
            Perguntas frequentes sobre consórcio de {data.shortName}
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {data.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="mb-3 rounded-xl border border-border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <LeadForm defaultModalidade={data.formValue} />

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-2xl font-bold md:text-3xl">Conheça outras modalidades</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outras.map((m) => (
              <Link
                key={m.key}
                to={m.to}
                className="rounded-2xl border border-border bg-card p-6 font-display font-semibold shadow-soft transition-transform hover:-translate-y-1 hover:text-success"
              >
                {m.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function modalidadeHead(data: ModalidadePageData) {
  return {
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { name: "twitter:title", content: data.metaTitle },
      { name: "twitter:description", content: data.metaDescription },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}
