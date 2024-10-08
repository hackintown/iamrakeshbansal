"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import VideoTestimonials from "./VideoTestimonials";
import { MdPlayArrow } from "react-icons/md";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Rakesh Bansal Ventures has completely transformed my trading strategy. Their accurate recommendations and disciplined approach have significantly improved my market performance. I highly recommend their services to anyone looking to succeed in stock trading!",
    name: "Prakash Choudhary",
    title: "Self-Investor",
    rating: 5,
    imageUrl: "/testimonial/prakash-chaudhary.webp",
  },
  {
    quote:
      "After being with Rakesh Bansal Ventures for 9 months, I’m thrilled with their services. Their analysis is always spot-on, and their signals have helped me navigate the markets with confidence. Absolutely worth the investment!",
    name: "Vipul Prajapati",
    title: "Full-time Trader",
    rating: 5,
    imageUrl: "/testimonial/vipul-prajapati.webp",
  },
  {
    quote:
      "The future segment recommendations are top-notch, but I believe there’s room for further improvement. I look forward to seeing even better performance in this area. Overall, I’ve been impressed with the results.",
    name: "Mrs. Venna",
    title: "Equity Investor",
    rating: 4,
    imageUrl: "/testimonial/veena.webp",
  },
  {
    quote:
      "While the stock performance is good, focusing on 2-3 monthly stocks that deliver over 25% returns would be ideal. For small investors, the subscription fee is high, but the profits are still rewarding in the long run.",
    name: "Raju Aggrawal",
    title: "Retail Investor",
    rating: 4,
    imageUrl: "/testimonial/raju-aggarwal.webp",
  },
  {
    quote:
      "The stock selection process is reliable, and I have been highly satisfied with the membership. I’ve earned considerable profits through their guidance and trust their expertise for future gains. No one can match their service!",
    name: "Pankaj Agrawal",
    title: "Retail Investor",
    rating: 5,
    imageUrl: "/testimonial/pankaj-agrawal.webp",
  },
  {
    quote:
      "I’ve followed Rakesh Sir for over a year and finally joined his advisory service 4 months ago. Within the last month, I’ve earned 50k! The calls are precise, and even when a stop loss hits, I’ve managed to profit.",
    name: "Nikunj Marvaniya",
    title: "Option Trader",
    rating: 5,
    imageUrl: "/testimonial/nikunj-marvaniya.webp",
  },
  {
    quote:
      "The option segment could benefit from more concentrated and premium-quality calls. The IGL call on Zee Business was exceptional, and I hope to see more calls like that in the future. Keep up the great work!",
    name: "Dr. RC Chaudhary",
    title: "Stock Trader",
    rating: 4,
    imageUrl: "/testimonial/dr-rc-choudhary.webp",
  },
  {
    quote:
      "I appreciate the clarity in Rakesh Sir’s intraday calls, including entry prices, stop loss, and targets. Adding a monthly holding call for potential breakout stocks would add even more value to the service.",
    name: "Deep Jyoti",
    title: "Day Trader",
    rating: 5,
    imageUrl: "/testimonial/deepjyoti.webp",
  },
  {
    quote:
      "Rakesh Bansal Ventures’ customer support is responsive and knowledgeable. They address my queries quickly, and I feel supported in my trading journey. Their service is a must for serious traders looking for solid guidance.",
    name: "Darshan",
    title: "Investor",
    rating: 5,
    imageUrl: "/testimonial/darshan.webp",
  },
  {
    quote:
      "Rakesh Bansal Ventures’ customer support is responsive and knowledgeable. They address my queries quickly, and I feel supported in my trading journey. Their service is a must for serious traders looking for solid guidance.",
    name: "Ashwani Kansal",
    title: "Investor",
    rating: 5,
    imageUrl: "/testimonial/ashwani-kansal.webp",
  },
];

interface TestimonialCardProps extends Testimonial {
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  rating,
  imageUrl,
  isActive,
}) => (
  <div
    className={cn(
      "flex flex-col md:flex-row items-center border border-border  rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out",
      isActive
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-full absolute"
    )}
  >
    <div className="w-full md:w-[350px] h-[250px] relative ring-4 ring-purple-500 my-1 md:my-0 mx-1 rounded-xl overflow-hidden ">
      <Image
        src={imageUrl}
        alt={`${name}'s testimonial`}
        fill
        className="object-cover"
      />
    </div>
    <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between relative">
      <FaQuoteLeft className="w-10 h-10 text-indigo-600 " />
      <div>
        <p className="text-foreground font-light leading-relaxed mb-4 text-sm lg:text-base line-clamp-3 pl-8">
          "{quote}"
        </p>
        <div className="flex items-center mb-2 pl-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              )}
            />
          ))}
        </div>
      </div>
      <div className="pl-8">
        <h3 className="text-foreground font-semibold">{name}</h3>
        <p className="text-foreground text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative overflow-hidden py-10 bg-white">
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 to-green-900/10">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="pricing-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.05)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.05)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
            </linearGradient>
          </defs>
          <path fill="url(#pricing-grad)" d="M0 0 C 50 100, 80 100, 100 0 Z" />
        </svg>
      </div>
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="absolute"
            style={{ left: `${i * 25}%`, top: "20%" }}
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              d="M20 2 L38 38 L2 38 Z"
              fill="none"
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="1"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 20 20"
                to="360 20 20"
                dur={`${10 + i * 2}s`}
                repeatCount="indefinite"
              />
            </path>
          </svg>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="mb-6 lg:mb-8">
          <VideoTestimonials />
        </div>

        <div
          className="relative md:h-[250px] mb-4 md:mb-8 lg:mb-10"
          ref={sliderRef}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              isActive={index === currentSlide}
            />
          ))}
          <div className=" absolute right-3 flex -bottom-16 border border-purple-200 overflow-hidden">
            <button
              onClick={prevSlide}
              className="bg-purple-600 cursor-pointer p-1 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <MdPlayArrow className="text-white size-8 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-purple-600 border-l  cursor-pointer p-1 flex items-center justify-center"
              aria-label="Next slide"
            >
              <MdPlayArrow className="text-white size-8" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === index
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
