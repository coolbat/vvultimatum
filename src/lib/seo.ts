import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  freshness?: boolean;
  noIndex?: boolean;
};

export function currentMonthYear() {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "Asia/Shanghai" }).format(new Date());
}

export function buildMetadata({ title, description, path, freshness = true, noIndex = false }: MetadataInput): Metadata {
  const pageTitle = freshness ? `${title} (${currentMonthYear()}) | ${site.name}` : `${title} | ${site.name}`;
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(site.canonicalBaseUrl),
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: site.trailerThumbnailUrl,
          width: 480,
          height: 360,
          alt: "VV: ULTIMATUM official trailer thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [site.trailerThumbnailUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
