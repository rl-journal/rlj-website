import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Submissions" };

export default function SubmitPage() {
  return <div dangerouslySetInnerHTML={{ __html: getPageHtml("submit") }} />;
}
