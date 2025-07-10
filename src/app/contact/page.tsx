import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Hablemos</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente o necesitas asesoramiento experto? Completa el formulario y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-card p-8 rounded-lg shadow-lg h-full">
                <h2 className="font-headline text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6 text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <span>contacto@blockwisehub.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <span>Oficina Virtual<br/>Operamos de forma remota a nivel global.</span>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6">
                    <h3 className="font-headline font-semibold">Horario de Atención</h3>
                    <p className="text-muted-foreground mt-2">Lunes a Viernes<br/>9:00 AM - 6:00 PM (GMT-5)</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
