import { siteConfig } from "@/lib/content";

interface VideoGameSchemaProps {
  name?: string;
}

export function VideoGameSchema({ name }: VideoGameSchemaProps) {
  const { game } = siteConfig();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: name || game.title,
    description:
      "A first-person horror game captured through the lens of a police officer's body cam. Trapped inside an abandoned hospital, find a way to escape the horrors lurking underground.",
    developer: {
      "@type": "Organization",
      name: game.developer,
    },
    publisher: {
      "@type": "Organization",
      name: game.publisher,
    },
    genre: game.genres,
    gamePlatform: game.platforms,
    datePublished: game.releaseDate,
    applicationCategory: "Game",
    operatingSystem: "Windows",
    offers: {
      "@type": "Offer",
      price: "14.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: game.steamUrl,
    },
    sameAs: game.steamUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
