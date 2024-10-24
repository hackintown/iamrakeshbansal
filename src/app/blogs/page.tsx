import Blog from "@/components/Blogs/Blog";
import React from "react";
import { getBlogPosts } from "@/lib/api";

export default async function Page() {
  const blogPosts = await getBlogPosts();

  return <Blog initialBlogPosts={blogPosts} />;
}
