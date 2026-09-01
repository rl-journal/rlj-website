import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Technical Reviewer Instructions" };

export default function TechnicalReviewersPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: getPageHtml("reviewers-guide-technical-reviewers"),
      }}
    />
  );
}
