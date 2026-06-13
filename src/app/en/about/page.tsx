import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "About the independent VV Ultimatum Guide fan site.",
  path: "/en/about/",
  freshness: false,
});

export default function AboutPage() {
  return (
    <main className="page legal">
      <header className="page-title">
        <h1>About</h1>
        <p>VV Ultimatum Guide is an independent fan-made guide site for players who need fast, source-checked route decisions while playing VV: ULTIMATUM on Roblox.</p>
      </header>
      <p>
        The site is not affiliated with Roblox Corporation, Midnight Continent, Shueisha, Viz Media, or Bleach rights holders. Gameplay information is labeled with checked dates and source confidence because Roblox RPG updates can change route details quickly.
      </p>
    </main>
  );
}
