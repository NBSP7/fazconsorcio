import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    city: "Recife - PE",
    text: "Fui contemplado antes do que imaginava e consegui comprar meu carro com excelente condição. Atendimento impecável.",
  },
  {
    name: "Juliana Alves",
    city: "Jaboatão dos Guararapes - PE",
    text: "Equipe extremamente transparente. Me ajudaram a escolher a melhor carta de crédito para meu apartamento.",
  },
  {
    name: "Roberto Lima",
    city: "Olinda - PE",
    text: "Utilizei o consórcio para expandir minha empresa e adquirir equipamentos. Excelente experiência.",
  },
  {
    name: "Fernanda Rocha",
    city: "Paulista - PE",
    text: "Processo simples, seguro e muito bem explicado. Recomendo a Faz Consórcio.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">O que nossos clientes dizem</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex gap-1 text-success">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
