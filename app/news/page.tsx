import type { Metadata } from "next";
import { formatDate, getPosts } from "@/lib/content";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div>
      <h1>RLJ News</h1>
      <p>News and announcements from the RLJ Editors-in-Chief.</p>
      {getPosts().map((post) => (
        <p key={post.slug}>
          <a href={`/news/${post.slug}`}>{post.title}</a>
          <br />
          <span className="post-date">{formatDate(post.date)}</span>
        </p>
      ))}
    </div>
  );
}
