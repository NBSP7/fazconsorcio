import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { NAV_LINKS, FOOTER_LINKS, LEGAL_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo size={110} />
            <p className="mt-4 max-w-md text-sm text-navy-foreground/70">
              A Faz Consórcio oferece soluções inteligentes para quem deseja conquistar patrimônio
              através do planejamento financeiro.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-navy-foreground/70 transition-colors hover:text-success">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/simule-agora" className="text-navy-foreground/70 transition-colors hover:text-success">
                  Simule Agora
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold">Institucional</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[...FOOTER_LINKS, ...LEGAL_LINKS].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-navy-foreground/70 transition-colors hover:text-success">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-success" /> (XX) XXXXX-XXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-success" /> contato@fazconsorcio.com.br
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-success" /> @fazconsorcio
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/15 pt-8 text-xs text-navy-foreground/55">
          <p>
            Aviso Legal: A contemplação está sujeita às regras de cada grupo e administradora.
            Consulte condições vigentes.
          </p>
          <p className="mt-4">© 2026 Faz Consórcio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
