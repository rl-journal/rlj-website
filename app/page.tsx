import { getPageHtml } from "@/lib/content";

export default function HomePage() {
  return <div dangerouslySetInnerHTML={{ __html: getPageHtml("home") }} />;
}
