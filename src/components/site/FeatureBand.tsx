import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

export function FeatureBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="mx-auto max-w-4xl px-5 text-center text-primary-foreground">
        <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
          A melhor estratégia para conquistar seus objetivos sem pagar juros.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
          Nossa equipe analisa seu perfil e encontra a melhor oportunidade de consórcio para que você
          alcance seus objetivos de forma segura, econômica e planejada.
        </p>
        <Button variant="hero" size="xl" className="mt-9" asChild>
          <a
            href={whatsappUrl("Olá! Quero uma simulação gratuita de consórcio.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero uma Simulação Gratuita
          </a>
        </Button>
      </div>
    </section>
  );
}
