import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-12">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">
                BlockWise Hub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Análisis, consultoría y educación en el ecosistema blockchain.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Inicio</Link></li>
              <li><Link href="/articles" className="text-muted-foreground hover:text-primary">Artículos</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Servicios</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Términos de Servicio</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Suscríbete al Newsletter</h4>
            <form className="flex gap-2">
              <Input type="email" placeholder="tu@email.com" className="bg-background"/>
              <Button type="submit">Suscribir</Button>
            </form>
            <p className="text-muted-foreground text-xs mt-2">
              Recibe un resumen semanal de nuestro contenido gratuito.
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BlockWise Hub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
