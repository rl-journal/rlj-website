import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Supporting Claims" };

export default function SupportingClaimsPage() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: getPageHtml("reviewers-guide-supporting-claims") }}
    />
  );
}
