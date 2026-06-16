import { Home, Car, Truck, Tractor, Plane, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

const modalities = [
  { icon: Home, title: "Consórcio de Imóveis", desc: "Casas, apartamentos, terrenos e construção." },
  { icon: Car, title: "Consórcio de Veículos", desc: "Carros, motos e utilitários." },
  { icon: Truck, title: "Consórcio de Caminhões", desc: "Renovação e expansão de frota." },
  { icon: Tractor, title: "Consórcio de Máquinas e Equipamentos", desc: "Equipamentos agrícolas e industriais." },
  { icon: Plane, title: "Consórcio de Serviços", desc: "Procedimentos, viagens e educação." },
  { icon: TrendingUp, title: "Consórcio para Investidores", desc: "Estratégias para crescimento patrimonial." },
];

export function Modalities() {
  return (
    <section id="modalidades" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Encontre a modalidade ideal para você
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modalities.map((m) => (
            <div
              key={m.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground">
                <m.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.desc}</p>
              <Button variant="outline" className="mt-6 self-start" asChild>
                <a
                  href={whatsappUrl(`Olá! Tenho interesse no ${m.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tenho Interesse
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
