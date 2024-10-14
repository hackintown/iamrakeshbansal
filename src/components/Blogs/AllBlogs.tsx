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

interface AllBlogPostsProps {
  posts: BlogPost[];
}

export default function AllBlogs({ posts }: AllBlogPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="text-4xl font-bold text-center text-purple-400 mb-8"
      >
        All Blog Posts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
