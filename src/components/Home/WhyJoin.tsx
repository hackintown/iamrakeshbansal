"use client"

import { Shield, Lightbulb, TrendingUp, GraduationCap } from "lucide-react"
import Slider from "react-slick"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const reasons = [
  {
    icon: Shield,
    title: "Unwavering Integrity",
    description: "We uphold the highest standards of integrity in all our services, ensuring reliable and accurate investment advice.",
    bgImage: "/images/dream-card1.png",
  },
  {
    icon: Lightbulb,
    title: "Absolute Transparency",
    description: "Our transparent processes build trust and confidence through clear and open communication about every recommendation.",
    bgImage: "/images/dream-card2.png",
  },
  {
    icon: TrendingUp,
    title: "Strategic Discipline",
    description: "We help you develop a disciplined investment strategy, focusing on long-term goals to maximize consistent returns.",
    bgImage: "/images/dream-card3.png",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Embark on a journey of growth with our educational resources and expert guidance to enhance your investment skills.",
    bgImage: "/images/dream-card2.png",
  },
]

export default function WhyJoinUs() {
  const sliderRef = useRef<Slider>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index)
  }

  return (
    <section className="text-white py-10 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-900 via-purple-900 to-green-900">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-us-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.2)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#why-us-pattern)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[35%,60%] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400 text-center">
                Why Join Us?
              </span>
            </h2>
            <p className="text-base lg:text-lg font-light">
              At Rakesh Bansal Ventures, we believe in a simple yet powerful approach to achieving success in the stock market. Our goal is to build India's largest Stock research ecosystem with your support.
            </p>
          </div>
          <div className="w-full relative">
            <Slider {...settings} ref={sliderRef}>
              {reasons.map((reason, index) => (
                <div key={index} className="px-2">
                  <div className="transform transition duration-500 hover:scale-105 h-[280px] lg:h-[320px] relative rounded-2xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${reason.bgImage})`,
                        backgroundPosition: "top",
                      }}
                    />
                    <div className="relative z-10 h-full flex flex-col justify-center rounded-2xl items-center text-white p-6 bg-gradient-to-b from-purple-900/80 to-green-900/80">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full mb-4 mx-auto">
                        <reason.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg  font-semibold text-center mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-accent-foreground text-center text-sm font-light leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute -bottom-4 right-5 flex mt-4 border border-border rounded-full overflow-hidden">
              <div
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous slide"
                className="bg-[#852B83] cursor-pointer p-2"
              >
                <Image src="/images/prev-arrow.webp" alt="Previous" width={22} height={22} />
              </div>
              <div
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next slide"
                className="bg-[#F3A0F1] cursor-pointer p-2"
              >
                <Image src="/images/next-arrow.webp" alt="Next" width={22} height={22} />
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                    currentSlide === index ? "bg-purple-600 scale-125" : "bg-gray-400"
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}