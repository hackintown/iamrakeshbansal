"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegBookmark,
  FaBookmark,
  FaRegComment,
  FaShare,
  FaEllipsisV,
} from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

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

export default function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const params = useParams();
  const slug = params?.slug as string;
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        console.error("Slug is empty");
        setError("Invalid blog post URL");
        setIsLoading(false);
        return;
      }

      try {
        console.log("Fetching post with slug:", slug);
        const response = await fetch(
          `${baseUrl}/api/blogposts?slug=${encodeURIComponent(slug)}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched post:", data);
          setPost(data);
        } else {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          setError(`Failed to fetch blog post: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(`An error occurred while fetching the blog post: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug, baseUrl]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: Implement server-side bookmarking logic
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(post?.title || "")}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(post?.title || "")}`;
        break;
    }

    window.open(shareUrl, "_blank");
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
      // TODO: Implement server-side comment submission
    }
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    // TODO: Implement server-side subscription logic
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            <IoMdArrowBack className="w-6 h-6" />
          </Link>
          <div className="flex space-x-4">
            <ShareButton
              icon={<FaShare />}
              color="bg-gray-600"
              onClick={() => {}}
            />
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={handleBookmark}
            >
              {isBookmarked ? (
                <FaBookmark className="w-6 h-6" />
              ) : (
                <FaRegBookmark className="w-6 h-6" />
              )}
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FaEllipsisV className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative h-[60vh]"
          >
            <Image
              src={post?.image || ""}
              alt={post?.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {post?.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6">{post?.subtitle}</p>
              <div className="flex items-center">
                <Image
                  src="/images/avatar3.png"
                  alt="Author"
                  width={48}
                  height={48}
                  className="rounded-full mr-4 border-2 border-white"
                />
                <div>
                  <p className="font-semibold">Rakesh Bansal</p>
                  <p className="text-sm opacity-80">
                    {new Date(post?.createdAt || "").toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}{" "}
                    • {post?.readingTime} min read
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              {post?.tags &&
                post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="prose prose-lg max-w-none text-sm sm:text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: post?.content || "" }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-b py-6"
            >
              <div className="flex space-x-4 mb-4 sm:mb-0">
                <ShareButton
                  icon={<FaFacebookF />}
                  color="bg-blue-600"
                  onClick={() => handleShare("facebook")}
                />
                <ShareButton
                  icon={<FaTwitter />}
                  color="bg-sky-400"
                  onClick={() => handleShare("twitter")}
                />
                <ShareButton
                  icon={<FaLinkedinIn />}
                  color="bg-blue-700"
                  onClick={() => handleShare("linkedin")}
                />
              </div>
              <button
                onClick={handleSubscribe}
                className={`py-2 px-6 rounded-full transition-colors ${
                  isSubscribed
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {isSubscribed ? "Subscribed" : "Subscribe for Updates"}
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-semibold mb-6">Comments</h3>
              <button
                onClick={() => setShowComments(!showComments)}
                className="mb-4 text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaRegComment className="mr-2" />
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
              <AnimatePresence>
                {showComments && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {comments.map((comment, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 mb-4"
                      >
                        <p>{comment}</p>
                      </div>
                    ))}
                    <form onSubmit={handleCommentSubmit} className="mt-6">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Add a comment..."
                        rows={4}
                      />
                      <button
                        type="submit"
                        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        Post Comment
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </article>
      </main>
    </motion.div>
  );
}

function ShareButton({
  icon,
  color,
  onClick,
}: {
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`${color} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
      <p className="text-gray-700">{message}</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Article not found
      </h2>
      <p className="text-gray-600">The requested article could not be found.</p>
    </div>
  );
}
