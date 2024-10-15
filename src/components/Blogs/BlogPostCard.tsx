"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

export default function Component({ post }: { post: BlogPost }) {
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

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  }

  const slug = generateSlug(post.title);

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-800 to-cyan-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        href={`/blog/${slug}`}
        className="relative h-48 sm:h-52 md:h-56 lg:h-60"
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className=""
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button variant="gradient" size="sm">
            Read More
          </Button>
        </motion.div>
      </Link>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl lg:text-2xl font-semibold text-cyan-300 mb-2 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 gap-2 sm:gap-4">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{estimateReadTime(post.content)} min read</span>
          </div>
        </div>
        <div
          className="text-gray-300 mb-4 overflow-hidden line-clamp-3 text-sm sm:text-base flex-grow"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Link href={`/blog/${slug}`}>
          <Button variant="gradient" size="sm" className="mb-3 w-full">
            Continue Reading
          </Button>
        </Link>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-800 text-cyan-200"
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
