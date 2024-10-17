import { notFound } from 'next/navigation';
import BlogSlug from '@/components/BlogSlug';

interface BlogPost {
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
  const baseUrl = process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  try {
    const response = await fetch(`${baseUrl}/api/blogposts?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    const data = await response.json();
    const foundPost = data.find(
      (post: BlogPost) => post.title.toLowerCase().replace(/\s+/g, "-") === slug
    );
    return foundPost || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogSlug initialPost={post} />;
}
