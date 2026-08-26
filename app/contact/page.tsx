import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <div dangerouslySetInnerHTML={{ __html: getPageHtml("contact") }} />;
}
