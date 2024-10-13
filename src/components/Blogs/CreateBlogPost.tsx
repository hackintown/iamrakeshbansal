"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { WithContext as ReactTags } from "react-tag-input";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CreateBlogPostProps {
  onPostCreated: () => void;
}

export default function CreateBlogPost({ onPostCreated }: CreateBlogPostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<{ id: string; text: string }[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", JSON.stringify(tags.map((tag) => tag.text)));
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("/api/blogposts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog post created:", result);
        setTitle("");
        setContent("");
        setTags([]);
        setImage(null);
        setPreviewImage(null);
        onPostCreated();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      setError("Failed to create blog post. Please try again.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = (tag: { id: string; text: string }) => {
    setTags([...tags, tag]);
  };

  const handleDeleteTag = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Create New Blog Post
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tags
          </label>
          <ReactTags
            tags={tags}
            handleDelete={handleDeleteTag}
            handleAddition={handleAddTag}
            inputFieldPosition="bottom"
            autocomplete
            classNames={{
              tags: "flex flex-wrap gap-2",
              tagInput:
                "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",
              tag: "bg-purple-100 text-purple-800 px-2 py-1 rounded-md flex items-center",
              remove: "ml-2 text-purple-600 hover:text-purple-800",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Featured Image
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {previewImage && (
            <Image
              src={previewImage}
              alt="Preview"
              width={384}
              height={256}
              className="mt-4 max-w-full h-auto rounded-md"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
