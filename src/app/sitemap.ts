import type { MetadataRoute } from "next";
import { guides } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

const staticPaths = ["/", "/en/", "/en/guides/", "/en/codes/", "/en/races/", "/en/bosses/", "/en/sources/", "/en/about/", "/en/privacy/", "/en/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePaths = guides.map((guide) => `/en/guides/${guide.slug}/`);

  return [...staticPaths, ...guidePaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: site.checkedAt,
    changeFrequency: path.includes("/guides/") || path.includes("/codes/") ? "weekly" : "monthly",
    priority: path === "/en/" ? 1 : path.includes("/guides/") || path.includes("/codes/") ? 0.86 : 0.65,
  }));
}
