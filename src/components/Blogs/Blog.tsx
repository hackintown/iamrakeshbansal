"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopularBlogPosts from "./PopularBlogs";
import AllBlogs from "./AllBlogs";
import BlogHeader from "./BlogHeader";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

interface BlogClientProps {
  initialBlogPosts: BlogPost[];
}

export default function BlogClient({ initialBlogPosts }: BlogClientProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setBlogPosts(initialBlogPosts);
    setIsClient(true);
  }, [initialBlogPosts]);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedTag || post.tags.includes(selectedTag))
  );

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  if (!isClient) {
    return null; // or a loading indicator
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gradient-to-br from-gray-900 to-blue-900 text-white min-h-screen"
      >
        <BlogHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          allTags={allTags}
        />

        <main className="container mx-auto px-4 py-6 sm:py-8 md:py-16">
          <PopularBlogPosts posts={filteredPosts.slice(0, 3)} />
          <AllBlogs posts={filteredPosts.slice(3)} />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
