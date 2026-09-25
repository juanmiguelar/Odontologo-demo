import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...pages.map((p) => p.slug), "preguntas-frecuentes", "contacto", "blog", "privacidad"];
  return paths.map((path) => ({ url: `${siteConfig.url}${path ? `/${path}` : ""}`, lastModified: new Date(), changeFrequency: path === "blog" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 }));
}
