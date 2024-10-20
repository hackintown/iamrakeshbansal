import { BlogPost } from "@/types";

const baseUrl =
  process.env.NEXT_PUBLIC_PRODUCTION_URL || "http://localhost:3000";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${baseUrl}/api/blogposts`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  return res.json();
}

export async function createBlogPost(formData: FormData): Promise<Response> {
  return fetch(`${baseUrl}/api/blogposts`, {
    method: "POST",
    body: formData,
  });
}

export async function updateBlogPost(
  id: string,
  formData: FormData
): Promise<Response> {
  return fetch(`${baseUrl}/api/blogposts/${id}`, {
    method: "PUT",
    body: formData,
  });
}

export async function deleteBlogPost(id: string): Promise<Response> {
  return fetch(`${baseUrl}/api/blogposts/${id}`, {
    method: "DELETE",
  });
}
