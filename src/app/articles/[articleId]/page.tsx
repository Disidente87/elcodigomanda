import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MarkdownContent } from '@/components/markdown-content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { mockArticles } from '../articles-data';

// Helper function to read articles from markdown files
function getArticle(articleId: string) {
    const article = mockArticles.find((a) => a.id === articleId);

    if (!article || article.isExclusive) {
        return null;
    }

    const filePath = path.join(process.cwd(), 'content', 'articles', `${articleId}.md`);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            ...article,
            title: data.title || article.title,
            content: content,
        };
    } catch (error) {
        console.error(`Error reading article ${articleId}:`, error);
        return null;
    }
}

export default function ArticlePage({ params }: { params: { articleId: string } }) {
  const article = getArticle(params.articleId);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
                 <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    data-ai-hint={article.imageHint}
                />
            </div>
            <Badge variant="secondary" className="mb-2">{article.category}</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {article.title}
            </h1>
            <p className="text-muted-foreground">{article.date}</p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
             <MarkdownContent content={article.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

// Generate static paths for free articles
export async function generateStaticParams() {
    const freeArticles = mockArticles.filter(a => !a.isExclusive);
    return freeArticles.map((article) => ({
        articleId: article.id,
    }));
}
