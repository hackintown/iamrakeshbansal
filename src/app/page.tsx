import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import DownloadApp from "@/components/Home/DownloadApp";
import Pricing from "@/components/Home/Pricing/Pricing";
import WhyJoinUs from "@/components/Home/WhyJoin";
import Blog from "@/components/Home/Blog";
import BookPublished from "@/components/ui/BookPublished";
import Faq from "@/components/ui/Faq";
import RegisteredBy from "@/components/ui/RegisteredBy";
import SocialMedia from "@/components/ui/SocialMedia";
import Testimonials from "@/components/ui/Testimonial/Testimonial";
import { getBlogPosts } from "@/lib/api";
import { BlogPost } from "@/types";

export default async function Home() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <main className="relative min-h-screen bg-black">
      <Banner />
      <RegisteredBy />
      <WhyJoinUs />
      <About />
      <Pricing />
      <BookPublished />
      <DownloadApp />
      <Blog initialBlogPosts={blogPosts} />
      <Testimonials />
      <SocialMedia />
      <Faq />
    </main>
  );
}
