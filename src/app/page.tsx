import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import DownloadApp from "@/components/Home/DownloadApp";
import Pricing from "@/components/Home/Pricing/Pricing";
import WhyJoinUs from "@/components/Home/WhyJoin";
// import Blog from "@/components/ui/Blog";
import BookPublished from "@/components/ui/BookPublished";
import Faq from "@/components/ui/Faq";
import RegisteredBy from "@/components/ui/RegisteredBy";
import SocialMedia from "@/components/ui/SocialMedia";
import Testimonials from "@/components/ui/Testimonial/Testimonial";
// import Testimonial from "@/components/ui/Testimonial/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Banner />
      <RegisteredBy />
      <WhyJoinUs />
      <About />
      <Pricing />
      <BookPublished />
      <DownloadApp />
      {/* <Blog /> */}
      {/* <Testimonial /> */}
      <Testimonials />
      <SocialMedia />
      <Faq />
    </main>
  );
}
