import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amati-centro-estetico.sneakers-tot.chatgpt.site",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
