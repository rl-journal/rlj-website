import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Style Files and Forms" };

export default function StyleFilesPage() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: getPageHtml("authors-guide-style-files") }}
    />
  );
}
