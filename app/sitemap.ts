import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itreachesguide.com";
  const routes = [
    "",
    "/walkthrough",
    "/walkthrough/awakening",
    "/walkthrough/ventilation",
    "/walkthrough/the-reach",
    "/walkthrough/comm-tower",
    "/walkthrough/sub-level",
    "/walkthrough/oblivion",
    "/puzzles",
    "/endings",
    "/monsters",
    "/monsters/the-entity",
    "/achievements",
    "/story",
    "/characters/jason-thompson",
    "/characters/the-entity",
    "/characters/abandoned-hospital",
    "/items",
    "/tips",
    "/faq",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
