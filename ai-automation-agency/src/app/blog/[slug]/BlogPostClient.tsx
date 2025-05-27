"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, User, Tag, Share2, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getRelatedPosts, type BlogPost } from "@/lib/blog/blog-data";
import InteractiveButton from "@/components/animations/InteractiveButton";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const relatedPosts = getRelatedPosts(post.slug);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [relatedRef, relatedInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!mounted) {
    return null;
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative py-16 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/10 backdrop-blur-sm p-2 rounded-md inline-block mb-4">
                <span className="text-violet-400">{post.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-violet-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-violet-400" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-violet-400" />
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={sharePost}
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section
        ref={contentRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 lg:col-start-3">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7 }}
                className="prose prose-invert prose-violet max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-300 prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300 prose-blockquote:border-violet-500 prose-blockquote:bg-violet-900/10 prose-blockquote:p-4 prose-blockquote:rounded-md"
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="mt-8 mb-4 text-3xl font-bold text-white">{children}</h1>,
                    h2: ({ children }) => <h2 className="mt-8 mb-4 text-2xl font-bold text-white">{children}</h2>,
                    h3: ({ children }) => <h3 className="mt-6 mb-4 text-xl font-bold text-white">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 text-gray-300">{children}</p>,
                    a: ({ href, children }) =>
                      <a href={href} className="text-violet-400 hover:text-violet-300 transition-colors no-underline">
                        {children}
                      </a>,
                    ul: ({ children }) => <ul className="mb-4 ml-6 list-disc text-gray-300">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal text-gray-300">{children}</ol>,
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                    blockquote: ({ children }) =>
                      <blockquote className="border-l-4 border-violet-500 bg-violet-900/10 p-4 mb-4 rounded-md">
                        {children}
                      </blockquote>,
                    code: ({ children }) =>
                      <code className="bg-violet-900/20 text-violet-300 p-1 rounded-md font-mono text-sm">
                        {children}
                      </code>,
                    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </motion.article>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 border-t border-violet-900/30 pt-8"
              >
                <div className="flex items-center gap-5">
                  <Avatar className="h-16 w-16 border-2 border-violet-800/30">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback className="bg-violet-900/50 text-white text-lg">
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{post.author.name}</h3>
                    <p className="text-violet-400">{post.author.title}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-violet-900/20 hover:bg-violet-900/30 rounded-full text-sm text-gray-300 transition-colors"
                  >
                    <span className="text-violet-400">#</span> {tag}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles section */}
      {relatedPosts.length > 0 && (
        <section
          ref={relatedRef}
          className="relative py-16 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Related Articles</h2>
              <p className="text-gray-400">You might also be interested in these articles</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost: BlogPost, index: number) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <Card className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm border border-violet-800/20 overflow-hidden h-full hover:shadow-lg hover:shadow-violet-900/10 transition-all duration-300">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <span className="px-2 py-1 bg-violet-900/70 rounded-md text-xs text-white">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="block group">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                      </Link>
                    </CardHeader>

                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-400 line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors text-sm"
                      >
                        Read Article
                        <span className="ml-1">→</span>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-b from-black to-black overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Discover how our AI automation solutions can help your organization achieve similar results
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <InteractiveButton variant="default" size="lg">
                    Explore Our Services
                  </InteractiveButton>
                </Link>
                <Link href="/contact">
                  <InteractiveButton variant="outline" size="lg">
                    Contact Us
                  </InteractiveButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
