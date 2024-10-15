import React from "react";
import { motion } from "framer-motion";
import BlogPostCard from "./BlogPostCard";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

interface PopularBlogPostsProps {
  posts: BlogPost[];
}

export default function PopularBlogPosts({ posts }: PopularBlogPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-4xl font-bold text-cyan-300 mb-8"
      >
        Popular Blog Posts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post._id}`}>
              <BlogPostCard post={post} />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
