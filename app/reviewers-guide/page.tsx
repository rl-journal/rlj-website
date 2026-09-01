import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Reviewers Guide" };

export default function ReviewPage() {
  return <div dangerouslySetInnerHTML={{ __html: getPageHtml("reviewers-guide") }} />;
}
