"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
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

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/blogposts");
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setError("Failed to fetch blog posts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedTag || post.tags.includes(selectedTag))
  );

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-blue-900"
      >
        <Loader2 className="h-16 w-16 animate-spin text-blue-500" />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-blue-900"
      >
        <p className="text-red-500 text-xl font-bold">{error}</p>
      </motion.div>
    );
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
