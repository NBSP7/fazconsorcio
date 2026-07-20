import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import heroImg from "@/assets/hero.jpg";

const stats = [
  { value: "+5.000", label: "Clientes Atendidos" },
  { value: "+R$ 100Mi", label: "em Créditos Comercializados" },
  { value: "100%", label: "Atendimento Personalizado" },
  { value: "Expert", label: "Consultoria Especializada" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <img
        src={heroImg}
        alt="Família conquistando casa e carro através do consórcio"
        width={1600}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:pt-44">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-block rounded-full bg-success/20 px-4 py-1.5 text-sm font-medium text-success-foreground ring-1 ring-success/40">
            Seus Objetivos Mais Perto de Você!
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Construa Seu Patrimônio com Planejamento e Inteligência Financeira: Sem Juros e Mais Barato!
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Conquiste seu imóvel, veículo, caminhão ou investimento através das melhores cotas de consórcio do mercado,
            sem juros e com parcelas que cabem no seu bolso.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Simular Consórcio
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href={whatsappUrl("Olá! Gostaria de falar com um especialista da Faz Consórcio.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com um Especialista
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur-sm"
            >
              <div className="font-display text-2xl font-bold text-success md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-primary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
