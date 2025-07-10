import { ArrowRight, BrainCircuit, Mic, FileText, BarChart, FileJson } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <FileJson className="h-10 w-10 text-primary" />,
    title: 'Análisis de Tokenomics',
    description: 'Diseñamos y evaluamos modelos económicos de tokens para asegurar la sostenibilidad y el crecimiento de tu proyecto. Nuestro análisis cubre la distribución de tokens, calendarios de adquisición (vesting), utilidad del token y mecanismos de incentivos.',
    price: 'Desde $2,500 USD',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Consultoría Blockchain',
    description: 'Asesoramiento estratégico para empresas que buscan integrar tecnología blockchain en sus operaciones. Te ayudamos a identificar casos de uso, seleccionar la plataforma adecuada y desarrollar una hoja de ruta para la implementación.',
    price: 'Personalizado',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Investigación y Análisis',
    description: 'Informes de investigación personalizados sobre protocolos, tendencias del mercado, análisis de competidores y auditorías de seguridad conceptual. Entregamos insights accionables en formato PDF profesional.',
    price: 'Desde $1,500 USD',
  },
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: 'Conferencias y Ponencias',
    description: 'Presentaciones públicas y privadas sobre una amplia gama de temas del ecosistema cripto. Adaptamos el contenido a tu audiencia, desde introducciones para principiantes hasta análisis técnicos profundos.',
    price: 'Variable según evento',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Workshops Técnicos',
    description: 'Sesiones de formación práctica de nivel principiante e intermedio. Cubrimos temas como desarrollo de smart contracts, seguridad en DeFi y uso de herramientas blockchain populares.',
    price: 'Desde $500 por asistente',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Nuestros Servicios Profesionales</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ofrecemos un conjunto completo de servicios para apoyar a individuos y empresas en el dinámico mundo del blockchain. Los costos varían según la complejidad y el alcance del proyecto.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col md:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <div className="bg-primary/10 p-5 rounded-full">
                {service.icon}
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-headline text-2xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground mt-2">{service.description}</p>
              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-primary font-semibold">{service.price}</p>
                  <Button asChild>
                    <Link href="/contact">Solicitar Información <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
