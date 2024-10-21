import { notFound } from "next/navigation";
import BlogSlug from "@/components/BlogSlug";
import { generateSlug } from "@/lib/utils";

interface BlogPost {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  readingTime: string;
  tags: string[];
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_PRODUCTION_URL || "http://localhost:3000";

  try {
    const response = await fetch(`${baseUrl}/api/blogposts`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    const data = await response.json();
    const foundPost = data.find(
      (post: BlogPost) => generateSlug(post.title) === slug
    );
    return foundPost || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(decodeURIComponent(params.slug));

  if (!post) {
    notFound();
  }

  return (
    <div>
      <BlogSlug initialPost={post} />
    </div>
  );
}
