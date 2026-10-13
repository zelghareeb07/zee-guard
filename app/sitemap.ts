import type { MetadataRoute } from "next";

const siteUrl = "https://www.zee-guard.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/athletes",
    "/categories",
    "/contact",
    "/designer",
    "/gallery",
    "/how-it-works",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
