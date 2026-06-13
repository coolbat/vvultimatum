import { SiteShell } from "@/components/site-shell";
import HomePage, { metadata } from "./en/page";

export { metadata };

export default function RootPage() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
