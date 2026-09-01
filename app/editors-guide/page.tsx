import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Editors Guide" };

export default function EditorsPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: getPageHtml("editors-guide") }} />
  );
}
