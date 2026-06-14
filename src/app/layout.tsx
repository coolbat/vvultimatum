import type { Metadata } from "next";
import "./globals.css";
import { absoluteFileUrl, absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalBaseUrl),
  title: site.name,
  description: site.description,
  alternates: {
    canonical: absoluteUrl("/en/"),
  },
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="llms" href={absoluteFileUrl("/llms.txt")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
