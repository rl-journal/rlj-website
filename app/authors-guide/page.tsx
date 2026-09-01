import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Authors Guide" };

export default function AuthorGuidePage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: getPageHtml("authors-guide") }} />
  );
}
