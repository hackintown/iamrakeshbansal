"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

export default function BlogPostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
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
      className={`bg-gradient-to-br from-gray-800 to-blue-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        href={`/blog/${slug}`}
        className={`relative ${featured ? 'h-72 sm:h-80 md:h-96 lg:h-112' : 'h-56 sm:h-64 md:h-72 lg:h-80'}`}
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
         <Button variant="gradient" size="sm">
         Read More
         </Button>
        </motion.div>
      </Link>
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <Link href={`/blog/${slug}`}>
          <h3 className={`${featured ? 'text-2xl lg:text-4xl' : 'text-2xl lg:text-3xl'} font-semibold text-blue-300 mb-4 line-clamp-2 hover:text-blue-400 transition-colors duration-200`}>
            {post.title}
          </h3>
        </Link>

        <div className="flex flex-wrap items-center text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 gap-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
            <span className="font-light">{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
            <span className="font-light">{estimateReadTime(post.content)} min read</span>
          </div>
        </div>
        <div
          className={`text-gray-300 mb-6 overflow-hidden ${featured ? 'line-clamp-4' : 'line-clamp-3'} text-sm sm:text-base flex-grow`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-800 text-blue-200"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${slug}`}>
          <span className="inline-block w-full text-center font-semibold py-3 px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
            Continue Reading
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
