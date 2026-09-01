import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Polished and Well Written" };

export default function PolishedPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: getPageHtml("reviewers-guide-polished") }} />
  );
}
