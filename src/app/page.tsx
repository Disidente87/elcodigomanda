import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Mic, FileText, BarChart, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockArticles } from "./articles/articles-data";
import { notFound } from "next/navigation";

export default function Home() {
  const featuredArticleId = '12';
  const featuredArticle = mockArticles.find(a => a.id === featuredArticleId);

  if (!featuredArticle) {
    // Fallback or just don't render the section if article not found
    return <div>Artículo destacado no encontrado.</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Navega el Futuro de la <span className="text-primary">Blockchain</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Artículos especializados, investigación, análisis y consultoría para potenciar tus proyectos en el ecosistema cripto.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/articles">Explorar Artículos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Solicitar Consultoría</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Artículo Destacado</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-xl mx-auto">
            Nuestro análisis gratuito de la semana, directo al grano y lleno de insights.
          </p>
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                    data-ai-hint={featuredArticle.imageHint}
                  />
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{featuredArticle.title}</CardTitle>
                    <CardDescription className="pt-2">
                      {featuredArticle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Publicado: {featuredArticle.date}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild className="w-full md:w-auto">
                      <Link href={`/articles/${featuredArticle.id}`}>Leer Artículo Completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              Soluciones expertas para llevar tus ideas y negocios al siguiente nivel en blockchain.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<FileJson className="h-8 w-8 text-primary" />}
              title="Análisis de Tokenomics"
              description="Diseñamos y evaluamos modelos económicos de tokens para asegurar la sostenibilidad y el crecimiento de tu proyecto."
            />
            <ServiceCard
              icon={<BrainCircuit className="h-8 w-8 text-primary" />}
              title="Consultoría Blockchain"
              description="Asesoramiento estratégico para empresas que buscan integrar tecnología blockchain en sus operaciones de forma efectiva."
            />
            <ServiceCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Investigación y Análisis"
              description="Informes de investigación personalizados sobre protocolos, tendencias del mercado y competidores, entregados en formato PDF."
            />
            <ServiceCard
              icon={<Mic className="h-8 w-8 text-primary" />}
              title="Conferencias"
              description="Presentaciones públicas y privadas sobre una amplia gama de temas del ecosistema cripto, adaptadas a tu audiencia."
            />
            <ServiceCard
              icon={<BarChart className="h-8 w-8 text-primary" />}
              title="Workshops Técnicos"
              description="Sesiones de formación práctica de nivel principiante sobre desarrollo, seguridad y herramientas blockchain."
            />
             <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-dashed">
                <div className="text-center">
                    <h3 className="font-headline text-xl font-semibold">¿Tienes una idea?</h3>
                    <p className="text-muted-foreground mt-2">Contáctanos para una solución a medida.</p>
                    <Button asChild className="mt-4">
                        <Link href="/contact">Hablemos</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="font-headline text-3xl font-bold">Mantente Actualizado</h2>
            <p className="mt-2 max-w-xl mx-auto">
              Suscríbete a nuestro newsletter y recibe cada semana el mejor contenido sobre blockchain directamente en tu bandeja de entrada.
            </p>
            <form className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="tu.email@ejemplo.com" 
                className="bg-primary-foreground/90 text-primary-foreground placeholder:text-muted-foreground focus:bg-primary-foreground" 
              />
              <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center">
        <div className="bg-primary/10 p-4 rounded-full">
          {icon}
        </div>
        <CardTitle className="font-headline mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="mx-auto">
          <Link href="/contact">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
