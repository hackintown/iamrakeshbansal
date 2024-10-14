"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-800 to-cyan-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-cyan-500 text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-cyan-300 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center text-sm text-gray-300 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{estimateReadTime(post.content)} min read</span>
          </div>
        </div>
        <div
          className="text-gray-300 mb-4 overflow-hidden line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-800 text-cyan-200"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
