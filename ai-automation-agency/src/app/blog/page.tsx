"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import { getBlogPosts, getCategories, getAllTags } from "@/lib/blog/blog-data";
import type { BlogPost } from "@/lib/blog/blog-data";

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>(getBlogPosts());
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: string[] = ["All", ...getCategories()];
  const tags: string[] = getAllTags();

  // Ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter posts based on selected category, tag, and search query
  useEffect(() => {
    let result = posts;

    // Filter by category
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(post => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredPosts(result);
  }, [selectedCategory, selectedTag, searchQuery, posts]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [postsRef, postsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!mounted) {
    return null;
  }

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <GlowingText
                  text="AI Automation Insights"
                  textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
                />
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert insights, case studies, and practical guides on leveraging AI and automation
                to transform your business operations and drive growth.
              </p>

              {/* Search input */}
              <div className="max-w-lg mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 bg-black/50 backdrop-blur-sm border border-violet-800/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog posts section */}
      <section
        ref={postsRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-900/5 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={postsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm border border-violet-800/20 rounded-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category === "All" ? null : category)}
                        className={`block text-left w-full px-3 py-2 rounded-md transition-colors ${
                          (category === "All" && !selectedCategory) || selectedCategory === category
                            ? "bg-violet-900/30 text-white"
                            : "text-gray-400 hover:text-gray-300 hover:bg-violet-900/20"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={postsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm border border-violet-800/20 rounded-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-white mb-4">Popular Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => selectedTag === tag ? setSelectedTag(null) : setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTag === tag
                            ? "bg-violet-600 text-white"
                            : "bg-violet-900/20 text-gray-300 hover:bg-violet-900/30"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {(selectedCategory || selectedTag || searchQuery) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <button
                      onClick={resetFilters}
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Blog posts grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={postsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 5) }}
                    >
                      <BlogPostCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-gray-400 mb-4">No posts found matching your criteria.</p>
                  <button
                    onClick={resetFilters}
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type BlogPostCardProps = {
  post: BlogPost;
};

function BlogPostCard({ post }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm border border-violet-800/20 overflow-hidden h-full hover:shadow-lg hover:shadow-violet-900/10 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <div className="relative aspect-video h-full w-full overflow-hidden rounded-tl-lg md:rounded-l-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex justify-between items-center">
                <span className="px-2 py-1 bg-violet-900/70 rounded-md text-xs text-white">
                  {post.category}
                </span>
                <span className="px-2 py-1 bg-black/50 rounded-md text-xs text-gray-300">
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col p-6 pt-0 md:pt-6">
          <CardHeader className="p-0 pb-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-white">{post.author.name}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                {post.title}
              </h3>
            </Link>
          </CardHeader>

          <CardContent className="p-0 flex-grow">
            <p className="text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {post.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-violet-900/20 rounded-full text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 rounded-full text-xs text-gray-400">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-0 pt-4 mt-4">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors text-sm"
            >
              Read Article
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
