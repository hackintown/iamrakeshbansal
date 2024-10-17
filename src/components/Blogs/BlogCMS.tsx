"use client";

import React, { useState } from "react";
import CreateBlogPost from "./CreateBlogPost";
import PopularBlogPosts from "./PopularBlogs";
import AllBlogs from "./AllBlogs";
import { BlogPost } from "@/types";

interface BlogCMSProps {
  initialBlogPosts: BlogPost[];
}

const BlogCMS: React.FC<BlogCMSProps> = ({ initialBlogPosts }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);

  const handlePostCreated = (newPost: BlogPost) => {
    setBlogPosts([newPost, ...blogPosts]);
  };

  const handlePostUpdated = (updatedPost: BlogPost) => {
    setBlogPosts(blogPosts.map(post => post._id === updatedPost._id ? updatedPost : post));
  };

  const handlePostDeleted = (deletedPostId: string) => {
    setBlogPosts(blogPosts.filter(post => post._id !== deletedPostId));
  };

  return (
    <div className="container space-y-12 px-4">
      <CreateBlogPost onPostCreated={handlePostCreated} onPostUpdated={handlePostUpdated} onPostDeleted={handlePostDeleted} />
      <PopularBlogPosts posts={blogPosts.slice(0, 3)} />
      <AllBlogs posts={blogPosts.slice(3)} />
    </div>
  );
};

export default BlogCMS;
