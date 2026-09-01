import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Senior Reviewer Instructions" };

export default function SeniorReviewersPage() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: getPageHtml("reviewers-guide-senior-reviewers") }}
    />
  );
}
