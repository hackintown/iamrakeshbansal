import BlogPostCard from "./BlogPostCard";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

interface PopularBlogPostsProps {
  posts: BlogPost[];
}

export default function PopularBlogPosts({ posts }: PopularBlogPostsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-center text-cyan-300">
        Popular Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
