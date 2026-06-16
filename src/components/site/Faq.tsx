import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Consórcio tem juros?", a: "Não. O consórcio possui taxa de administração, mas não cobra juros como financiamentos tradicionais." },
  { q: "Como acontece a contemplação?", a: "Por sorteio mensal ou através da oferta de lance." },
  { q: "Posso usar lance?", a: "Sim. O lance pode aumentar suas chances de antecipar a contemplação." },
  { q: "O que é carta de crédito?", a: "É o valor disponibilizado para aquisição do bem após a contemplação." },
  { q: "Posso comprar uma cota contemplada?", a: "Sim. Consulte a disponibilidade com nossos especialistas." },
  { q: "Existe análise de crédito?", a: "Sim. A administradora realiza análise antes da liberação da carta de crédito." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="mb-3 rounded-xl border border-border bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
