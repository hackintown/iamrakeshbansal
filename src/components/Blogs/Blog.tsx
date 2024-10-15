"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Loader2, Search, ArrowUp} from "lucide-react";
import PopularBlogPosts from "./PopularBlogs";
import AllBlogs from "./AllBlogs";

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
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    fetchBlogPosts();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        className="flex justify-center items-center h-screen bg-gradient-to-br from-black to-purple-900"
      >
        <Loader2 className="h-16 w-16 animate-spin text-cyan-500" />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="flex justify-center items-center h-screen bg-gradient-to-br from-black to-purple-900"
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
        className="bg-gradient-to-br from-black to-purple-500 text-white py-10"
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-50"
          style={{ scaleX }}
        />

        <main className="container mx-auto px-4 space-y-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.aside
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/4 space-y-8"
            >
              <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                  Search
                </h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-purple-700 bg-opacity-50 text-white rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        setSelectedTag(tag === selectedTag ? null : tag)
                      }
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                        tag === selectedTag
                          ? "bg-cyan-500 text-purple-900"
                          : "bg-purple-700 bg-opacity-50 text-gray-300 hover:bg-purple-600"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-3/4"
            >
              <PopularBlogPosts posts={filteredPosts.slice(0, 3)} />
              <div className="mt-8">
              <AllBlogs posts={filteredPosts.slice(3)} />
              </div>
            </motion.div>
          </div>
        </main>



        <AnimatePresence>
          {showScrollToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-cyan-500 text-purple-900 p-3 rounded-full shadow-lg hover:bg-cyan-400 transition-colors duration-200 focus:outline-none"
            >
              <ArrowUp className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
