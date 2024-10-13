import Image from "next/image";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-cyan-200 rounded-lg overflow-hidden shadow-md">
      <div className="h-64 bg-gray-200 relative">
        <Image
          src={post.image || ""}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-purple-700 mb-2">
          {post.title}
        </h3>
        <div
          className="text-gray-700 mb-4 overflow-hidden"
          style={{ maxHeight: "6rem" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex justify-between items-center">
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors duration-300">
            Continue Reading
          </button>
          <svg
            className="w-6 h-6 text-cyan-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
