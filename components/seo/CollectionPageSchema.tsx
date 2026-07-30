import { siteConfig } from "@/lib/content";

interface GuideItem {
  title: string;
  description: string;
  href: string;
  image: string;
  readingTime?: string;
  updated?: string;
  difficulty?: string;
  coverage?: string[];
  badge?: string;
}

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  itemList: GuideItem[];
}

export function CollectionPageSchema({
  name,
  description,
  url,
  itemList,
}: CollectionPageSchemaProps) {
  const { siteUrl } = siteConfig();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: name,
    name: name,
    description: description,
    url: `${siteUrl}${url}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: itemList.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${siteUrl}${item.href}`,
        description: item.description,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
