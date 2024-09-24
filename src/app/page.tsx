import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Pricing from "@/components/Home/Pricing/Pricing";
import WhyJoinUs from "@/components/Home/WhyJoin";
import Faq from "@/components/ui/Faq";
import Footer from "@/components/ui/Footer/Footer";
import SocialMedia from "@/components/ui/SocialMedia";
import Testimonials from "@/components/ui/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="relative z-0 bg-black">
        <Image
          src="/images/body-bg.webp"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-[center,right] z-10"
          priority
        />
        <div className="relative z-20">
          <Banner />
          <WhyJoinUs/>
          <About />
        </div>
      </div>
      <Pricing />
      <SocialMedia />
      <Testimonials />
      <Faq/>
      <Footer/>
    </main>
  );
}
