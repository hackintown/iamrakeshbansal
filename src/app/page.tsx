import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Pricing from "@/components/Home/Pricing/Pricing";
import WhyJoinUs from "@/components/Home/WhyJoin";
import Faq from "@/components/ui/Faq";
import Footer from "@/components/ui/Footer/Footer";
// import SocialMedia from "@/components/ui/SocialMedia";
import Testimonials from "@/components/ui/Testimonial/Testimonial";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Banner />
      <WhyJoinUs />
      <About />
      <Pricing />
      {/* <SocialMedia /> */}
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
