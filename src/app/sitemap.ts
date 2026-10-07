import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const es = new URL("/es", siteUrl).toString();
  const en = new URL("/en", siteUrl).toString();
  const languages = { es, en };
  const lastModified = new Date();

  return [
    { url: es, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: en, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
  ];
}
