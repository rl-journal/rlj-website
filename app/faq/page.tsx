import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return <div dangerouslySetInnerHTML={{ __html: getPageHtml("faq") }} />;
}
