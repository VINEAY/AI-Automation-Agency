import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog/blog-data";
import BlogPostClient from "./BlogPostClient";

// Generate static paths for all blog posts
export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  // This will be handled by the not-found page in the client component
  if (!post) {
    return null;
  }

  return <BlogPostClient post={post} />;
}
