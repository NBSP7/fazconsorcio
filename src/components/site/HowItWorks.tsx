import { Target, Wallet, CalendarCheck, Trophy, KeyRound } from "lucide-react";

const steps = [
  { icon: Target, title: "Escolha o objetivo", desc: "Defina qual bem ou serviço deseja adquirir." },
  {
    icon: Wallet,
    title: "Escolha o crédito ideal",
    desc: "Selecione o valor da carta de crédito que melhor atende sua necessidade.",
  },
  { icon: CalendarCheck, title: "Pague parcelas mensais", desc: "Sem juros e com planejamento financeiro." },
  { icon: Trophy, title: "Participe das contemplações", desc: "Você pode ser contemplado por sorteio ou lance." },
  { icon: KeyRound, title: "Realize seu sonho", desc: "Utilize a carta de crédito para adquirir o bem desejado." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Como funciona o Consórcio?</h2>
          <p className="mt-4 text-muted-foreground">
            Entenda como é simples conquistar seus objetivos através do consórcio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="absolute right-5 top-5 font-display text-4xl font-bold text-primary/10">{i + 1}</span>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-success text-success-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
