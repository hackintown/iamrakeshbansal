"use client";
import React, { useEffect, useState } from "react";
import CreateBlogPost from "./CreateBlogPost";
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

const BlogCMS = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }
  return (
    <div className="container space-y-12 px-4">
      <CreateBlogPost onPostCreated={fetchBlogPosts} />
      <PopularBlogPosts posts={blogPosts.slice(0, 3)} />
      <AllBlogs posts={blogPosts.slice(3)} />
    </div>
  );
};

export default BlogCMS;
