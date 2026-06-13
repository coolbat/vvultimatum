import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for VV Ultimatum Guide.",
  path: "/en/privacy/",
  freshness: false,
});

export default function PrivacyPage() {
  return (
    <main className="page legal">
      <header className="page-title">
        <h1>Privacy policy</h1>
        <p>This static guide site does not require an account and does not ask for Roblox credentials.</p>
      </header>
      <p>
        If analytics, ads, or affiliate systems are added later, this page should be updated before deployment to describe what is collected, why it is collected, and how users can opt out.
      </p>
    </main>
  );
}
