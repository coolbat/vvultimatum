import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: "Terms for using VV Ultimatum Guide.",
  path: "/en/terms/",
  freshness: false,
});

export default function TermsPage() {
  return (
    <main className="page legal">
      <header className="page-title">
        <h1>Terms</h1>
        <p>Use this fan guide as a gameplay reference, not as an official source from Roblox or Midnight Continent.</p>
      </header>
      <p>
        Guide details may become outdated after game updates. Always verify official links, codes, and account-impacting actions in game before spending Robux, rerolls, or rare materials.
      </p>
    </main>
  );
}
