"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/articles", label: "Artículos" },
  { href: "/services", label: "Servicios" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
            BlockWise Hub
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Iniciar Sesión</Button>
          <Button>Registrarse</Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full pt-4 border-t">
              <Button variant="outline" className="w-full">Iniciar Sesión</Button>
              <Button className="w-full">Registrarse</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
