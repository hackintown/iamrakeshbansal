"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { Loader2, X, Upload, Tag, Pencil, Trash2 } from "lucide-react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CreateBlogPostProps {
  onPostCreated: () => void;
}
interface BlogPost {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  image?: string;
}

export default function CreateBlogPost({ onPostCreated }: CreateBlogPostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);


  const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_PRODUCTION_URL
  : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;


  useEffect(() => {
    fetchBlogPosts();
  }, []);
  

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/blogposts`);
      if (response.ok) {
        const posts = await response.json();
        setBlogPosts(posts);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      setImage(acceptedFiles[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", JSON.stringify(tags));
    if (image) {
      formData.append("image", image);
    }

    try {
      const url = editingPost ? `${baseUrl}/api/blogposts/${editingPost._id}` : `${baseUrl}/api/blogposts`;
      const method = editingPost ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog post operation successful:", result);
        resetForm();
        onPostCreated();
        fetchBlogPosts();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to process blog post");
      }
    } catch (error) {
      console.error("Error processing blog post:", error);
      setError("Failed to process blog post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setPreviewImage(null);
    setTags([]);
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setTags(post.tags);
    setPreviewImage(post.image || null);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(`${baseUrl}/api/blogposts/${postId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchBlogPosts();
        } else {
          throw new Error("Failed to delete blog post");
        }
      } catch (error) {
        console.error("Error deleting blog post:", error);
        setError("Failed to delete blog post. Please try again.");
      }
    }
  };

  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 mb-4 p-3 bg-red-100 rounded-md"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="h-64 mb-12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Featured Image
          </label>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors duration-200 ${
              isDragActive
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {previewImage ? (
              <div className="relative">
                <Image
                  src={previewImage}
                  alt="Preview"
                  width={384}
                  height={256}
                  className="mx-auto max-w-full h-auto rounded-md"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImage(null);
                    setPreviewImage(null);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-200"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="text-gray-500">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p>Drag & drop an image here, or click to select one</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tags
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="tags"
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTag()}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={addTag}
              className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm"
              >
                <Tag size={14} className="mr-1" />
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-purple-600 hover:text-purple-800"
                >
                  <X size={14} />
                </button>
              </motion.span>
            ))}
          </div>
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300 flex items-center justify-center"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin mr-2" size={20} />
          ) : editingPost ? (
            "Update Post"
          ) : (
            "Create Post"
          )}
        </motion.button>
        {editingPost && (
          <button
            type="button"
            onClick={resetForm}
            className="mt-4 w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Existing Blog Posts</h2>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post._id} className="border p-4 rounded-md">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.content.substring(0, 100)}...</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center"
              >
                <Pencil size={16} className="mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center"
              >
                <Trash2 size={16} className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
