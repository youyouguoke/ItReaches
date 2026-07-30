import { siteConfig } from "@/lib/content";
import type { Article } from "@/types/article";

interface ArticleSchemaProps {
  article: Article;
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const { siteUrl } = siteConfig();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: article.author || "It Reaches Guide",
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate || article.publishedDate,
    publisher: {
      "@type": "Organization",
      name: "It Reaches Guide",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.href.startsWith("http") ? article.href : `${siteUrl}${article.href}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
