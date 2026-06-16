import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-success font-display text-lg font-bold text-success-foreground">
            F
          </span>
          <span
            className={`font-display text-xl font-bold ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Faz<span className="text-success">Consórcio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-success ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Simular Consórcio
            </a>
          </Button>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-3" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Simular Consórcio
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
