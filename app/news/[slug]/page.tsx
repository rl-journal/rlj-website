import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/content";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getPost(slug)?.title ?? "News" };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="post-date">{formatDate(post.date)}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>
        <a href="/news">← All news</a>
      </p>
    </article>
  );
}
