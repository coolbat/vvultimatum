import type { MetadataRoute } from "next";
import { absoluteFileUrl, hostName } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*?q=", "/api/"],
      },
    ],
    sitemap: absoluteFileUrl("/sitemap.xml"),
    host: hostName(),
  };
}
