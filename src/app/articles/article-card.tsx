import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  date: string;
  isExclusive: boolean;
}

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
      <div className="relative">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={400}
          height={250}
          className="object-cover w-full h-48"
          data-ai-hint={article.imageHint}
        />
        {article.isExclusive && (
            <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground p-2 rounded-full">
                <Lock className="h-5 w-5" />
            </div>
        )}
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit">{article.category}</Badge>
        <CardTitle className="font-headline text-xl mt-2">{article.title}</CardTitle>
        <CardDescription className="text-sm pt-1">{article.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{article.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" disabled={article.isExclusive}>
          <Link href={`/articles/${article.id}`}>
            {article.isExclusive ? "Exclusivo para miembros" : "Leer Artículo"}
            {!article.isExclusive && <ArrowRight className="ml-2 h-4 w-4" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
