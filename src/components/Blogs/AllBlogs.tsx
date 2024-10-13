import BlogPostCard from "./BlogPostCard";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

interface AllBlogPostsProps {
  posts: BlogPost[];
}

export default function AllBlogs({ posts }: AllBlogPostsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-center text-cyan-300">
        All Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
