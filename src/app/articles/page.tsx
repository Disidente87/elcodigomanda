'use client';
import { useState } from 'react';
import { ArticleCard, type Article } from './article-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockArticles } from './articles-data';

const categories = ['Todos', 'DeFi', 'Staking', 'Tecnología', 'Análisis', 'Gobernanza', 'Seguridad'];

export default function ArticlesPage() {
  const [filter, setFilter] = useState('Todos');
  
  const sortedArticles = [...mockArticles].reverse();

  // Y aquí se usa la nueva lista ordenada
  const freeArticles = sortedArticles.filter(a => !a.isExclusive && (filter === 'Todos' || a.category === filter));
  const exclusiveArticles = sortedArticles.filter(a => a.isExclusive && (filter === 'Todos' || a.category === filter));
  
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
