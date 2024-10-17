import BlogCMS from "@/components/Blogs/BlogCMS";
import { getBlogPosts } from "@/lib/api";

export default async function Dashboard() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container space-y-12 px-4">
      <BlogCMS initialBlogPosts={blogPosts} />
    </div>
  );
}
