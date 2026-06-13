import type { VerificationStatus } from "@/lib/content";

const statusLabels: Record<VerificationStatus, string> = {
  verified: "Verified",
  cross_checked: "Cross-checked",
  conflict: "Source conflict",
  needs_recheck: "Needs recheck",
};

export function StatusPill({ status }: { status: VerificationStatus }) {
  return <span className={`status-pill status-${status}`}>{statusLabels[status]}</span>;
}
