import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { whatsappUrl } from "@/lib/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(100),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(100),
  modalidade: z.string().trim().min(1, "Selecione uma modalidade"),
  valor: z.string().trim().max(50).optional(),
  mensagem: z.string().trim().max(1000).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const modalidades = [
  "Imóveis",
  "Veículos",
  "Caminhões",
  "Máquinas e Equipamentos",
  "Serviços",
  "Investidores",
];

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <section id="contato" className="py-24">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-3xl border border-success/30 bg-card p-10 text-center shadow-card">
            <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
            <h2 className="mt-5 font-display text-2xl font-bold">Solicitação enviada com sucesso!</h2>
            <p className="mt-3 text-muted-foreground">
              Recebemos seus dados. Em breve um de nossos especialistas entrará em contato com sua
              simulação gratuita. Para agilizar, fale agora pelo WhatsApp.
            </p>
            <Button variant="hero" size="xl" className="mt-7" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Solicite sua Simulação Gratuita
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e receba uma proposta personalizada.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="mt-10 grid gap-5 rounded-3xl border border-border bg-card p-7 shadow-card md:p-9"
        >
          <Field label="Nome Completo" name="nome" error={errors.nome} placeholder="Seu nome" />
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="WhatsApp" name="whatsapp" error={errors.whatsapp} placeholder="(81) 99999-9999" />
            <Field label="E-mail" name="email" type="email" error={errors.email} placeholder="voce@email.com" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Cidade" name="cidade" error={errors.cidade} placeholder="Sua cidade" />
            <div className="grid gap-2">
              <Label htmlFor="modalidade">Modalidade de Interesse</Label>
              <select
                id="modalidade"
                name="modalidade"
                defaultValue=""
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Selecione...
                </option>
                {modalidades.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              {errors.modalidade && <p className="text-xs text-destructive">{errors.modalidade}</p>}
            </div>
          </div>
          <Field
            label="Valor da Carta de Crédito"
            name="valor"
            error={errors.valor}
            placeholder="Ex: R$ 150.000"
          />
          <div className="grid gap-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" rows={4} placeholder="Conte-nos sobre seu objetivo" />
          </div>

          <Button type="submit" variant="hero" size="xl" className="mt-2 w-full">
            🚀 Receber Simulação Gratuita
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
