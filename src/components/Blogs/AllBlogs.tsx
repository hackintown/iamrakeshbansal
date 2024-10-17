import React from "react";
import { motion } from "framer-motion";
import BlogPostCard from "./BlogPostCard";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

interface AllBlogPostsProps {
  posts: BlogPost[];
}

export default function AllBlogs({ posts }: AllBlogPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6 lg:space-y-12 mt-12 lg:mt-16"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="flex items-center justify-between mb-4"
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-blue-300">
          More Trading Wisdom
        </h2>
        <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-purple-500 to-blue-500"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <BlogPostCard post={post} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
