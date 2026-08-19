import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { NAV_LINKS, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        solid ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="block" onClick={() => setOpen(false)}>
          <Logo size={56} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-success" }}
              className={`text-sm font-medium transition-colors hover:text-success ${
                solid ? "text-muted-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="hero" size="lg" asChild>
            <Link to="/simule-agora">Simule Agora</Link>
          </Button>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid h-11 w-11 place-items-center rounded-full bg-gradient-success text-success-foreground shadow-soft transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-success text-success-foreground shadow-soft"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            className={solid ? "text-foreground" : "text-primary-foreground"}
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-3" asChild>
              <Link to="/simule-agora" onClick={() => setOpen(false)}>
                Simule Agora
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
