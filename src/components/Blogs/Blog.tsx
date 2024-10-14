'use client'

import React, { useEffect, useState } from 'react'
import PopularBlogPosts from './PopularBlogs'
import AllBlogs from './AllBlogs'
import { Loader2 } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  content: string
  image: string
  tags: string[]
  createdAt: string
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch("/api/blogposts")
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts")
      }
      const data = await response.json()
      setBlogPosts(data)
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      setError("Failed to fetch blog posts. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <PopularBlogPosts posts={blogPosts.slice(0, 3)} />
      <AllBlogs posts={blogPosts.slice(3)} />
    </div>
  )
}