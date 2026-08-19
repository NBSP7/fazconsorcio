import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Benefits } from "@/components/site/Benefits";
import { Modalities } from "@/components/site/Modalities";
import { FeatureBand } from "@/components/site/FeatureBand";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";


const title = "Faz Consórcio | Realize seus sonhos sem juros";
const description =
  "Conquiste imóveis, veículos, caminhões, equipamentos e investimentos com as melhores cotas de consórcio do mercado. Sem juros e com parcelas que cabem no seu bolso.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Faz Consórcio",
          slogan: "Seus Objetivos Mais Perto de Você!",
          description,
          areaServed: "BR",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Modalities />
        <FeatureBand />
        <Testimonials />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
