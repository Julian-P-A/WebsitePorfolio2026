import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const es = new URL("/es", siteUrl).toString();
  const en = new URL("/en", siteUrl).toString();
  const languages = { es, en };

  return [
    { url: es, alternates: { languages } },
    { url: en, alternates: { languages } },
  ];
}
