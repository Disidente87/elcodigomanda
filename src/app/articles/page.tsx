'use client';
import { useState } from 'react';
import { ArticleCard, type Article } from './article-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'El Futuro de la Tokenización de Activos Reales (RWA)',
    description: 'Exploramos cómo la tokenización de activos del mundo real está revolucionando las finanzas tradicionales...',
    imageUrl: '/rwa.png',
    imageHint: 'blockchain finance',
    category: 'DeFi',
    date: '15 de Julio, 2024',
    isExclusive: false,
  },
  {
    id: '2',
    title: 'Estrategias Avanzadas de Staking en Ethereum',
    description: 'Un análisis profundo de las mejores estrategias para maximizar tus recompensas de staking en la red Ethereum post-Merge.',
    imageUrl: '/ethereum.png',
    imageHint: 'ethereum network',
    category: 'Staking',
    date: '12 de Julio, 2024',
    isExclusive: true,
  },
  {
    id: '3',
    title: 'Introducción a los Oráculos Descentralizados',
    description: '¿Cómo obtienen los smart contracts datos del mundo real? Una guía completa sobre el funcionamiento y la importancia de los oráculos.',
    imageUrl: '/oraculos.png',
    imageHint: 'data network',
    category: 'Tecnología',
    date: '8 de Julio, 2024',
    isExclusive: false,
  },
  {
    id: '4',
    title: 'Análisis Comparativo: Solana vs. Aptos',
    description: 'Ponemos frente a frente a dos de las blockchains de alto rendimiento más prometedoras. ¿Cuál tiene mayor potencial?',
    imageUrl: '/sol_aptos.png',
    imageHint: 'data comparison',
    category: 'Análisis',
    date: '5 de Julio, 2024',
    isExclusive: false,
  },
   {
    id: '5',
    title: 'Modelos de Gobernanza en DAOs: Lecciones Aprendidas',
    description: 'Estudiamos los modelos de gobernanza más exitosos y los fracasos más sonados en el mundo de las DAOs para extraer lecciones clave.',
    imageUrl: '/dao.png',
    imageHint: 'organization chart',
    category: 'Gobernanza',
    date: '1 de Julio, 2024',
    isExclusive: true,
  },
  {
    id: '6',
    title: 'Seguridad en Billeteras de Criptomonedas',
    description: 'Una guía práctica con las mejores prácticas para mantener tus activos digitales seguros, desde billeteras calientes hasta frías.',
    imageUrl: '/seguridad.png',
    imageHint: 'digital security',
    category: 'Seguridad',
    date: '28 de Junio, 2024',
    isExclusive: false,
  },
];

const categories = ['Todos', 'DeFi', 'Staking', 'Tecnología', 'Análisis', 'Gobernanza', 'Seguridad'];

export default function ArticlesPage() {
  const [filter, setFilter] = useState('Todos');

  const freeArticles = mockArticles.filter(a => !a.isExclusive && (filter === 'Todos' || a.category === filter));
  const exclusiveArticles = mockArticles.filter(a => a.isExclusive && (filter === 'Todos' || a.category === filter));
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Nuestro Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sumérgete en nuestros análisis sobre blockchain, DeFi, y más. Contenido gratuito y exclusivo para nuestros miembros.
        </p>
      </div>

      <Tabs defaultValue="free" className="mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <TabsList>
            <TabsTrigger value="free">Artículos Gratuitos</TabsTrigger>
            <TabsTrigger value="exclusive">Artículos Exclusivos</TabsTrigger>
          </TabsList>
          <div className="w-full sm:w-auto">
            <Select onValueChange={setFilter} defaultValue="Todos">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <TabsContent value="free" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {freeArticles.length > 0 ? (
              freeArticles.map(article => <ArticleCard key={article.id} article={article} />)
            ) : (
              <p className="col-span-full text-center text-muted-foreground">No hay artículos gratuitos en esta categoría.</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="exclusive" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
             {exclusiveArticles.length > 0 ? (
                exclusiveArticles.map(article => <ArticleCard key={article.id} article={article} />)
              ) : (
                <p className="col-span-full text-center text-muted-foreground">No hay artículos exclusivos en esta categoría.</p>
              )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
