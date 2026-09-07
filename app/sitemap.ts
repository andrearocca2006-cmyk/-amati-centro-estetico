import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amati-centro-estetico.sneakers-tot.chatgpt.site",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
