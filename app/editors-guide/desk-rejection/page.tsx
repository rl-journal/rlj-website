import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Desk Rejection" };

export default function DeskRejectionPage() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: getPageHtml("editors-guide-desk-rejection") }}
    />
  );
}
