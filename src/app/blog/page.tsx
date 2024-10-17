import Blog from '@/components/Blogs/Blog'
import React from 'react'

async function getData() {
  const baseUrl = process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL

  const res = await fetch(`${baseUrl}/api/blogposts`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const blogPosts = await getData()

  return <Blog initialBlogPosts={blogPosts} />
}
