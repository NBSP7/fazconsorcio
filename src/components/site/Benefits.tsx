import { BadgePercent, PiggyBank, HandCoins, Layers, Settings2, Headset } from "lucide-react";

const benefits = [
  { icon: BadgePercent, title: "Sem Juros", desc: "Mais economia em comparação a financiamentos." },
  { icon: PiggyBank, title: "Parcelas Acessíveis", desc: "Planejamento financeiro inteligente." },
  { icon: HandCoins, title: "Poder de Compra à Vista", desc: "Negociação facilitada após contemplação." },
  { icon: Layers, title: "Diversas Modalidades", desc: "Imóveis, veículos, serviços e equipamentos." },
  { icon: Settings2, title: "Flexibilidade", desc: "Créditos adaptados ao seu objetivo." },
  { icon: Headset, title: "Atendimento Especializado", desc: "Suporte completo durante toda a jornada." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Por que escolher um Consórcio?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:border-success/40 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-success group-hover:text-success-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
