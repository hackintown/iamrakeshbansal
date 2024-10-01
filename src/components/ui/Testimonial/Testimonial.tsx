"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlayCircle, Pause, Star, Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "I have been using Rakesh Bansal Ventures advisory services for the past 2 years, and I am thoroughly impressed with the quality of insights and recommendations they have provided.",
    name: "Prakash Choudhary",
    title: "Self-Investor",
    rating: 5,
    imageUrl: "/hero/banner-img3.webp",
    videoUrl:
      "https://www.youtube-nocookie.com/embed/CtyL7s_8-cE?rel=0&autoplay=0",
  },
  {
    quote:
      "Your tips are excellent available market sometime trade you are over traded in that condition increase the margin of error you can't control the market but you can control Sanjeev bhasin type allegations.",
    name: "Nitish Trama",
    title: "Self-Investor",
    rating: 4,
    imageUrl: "/hero/banner-img3.webp",
    videoUrl:
      "https://www.youtube-nocookie.com/embed/CtyL7s_8-cE?rel=0&autoplay=0",
  },
  {
    quote:
      "Your stock performance is good but I would suggest give only 2-3 stock monthly which may give 25 % plus return ( over weight ). Note : Rakesh Bansal Ventures performance is very high.",
    name: "Ganesh Jagtap",
    title: "Self-Investor",
    rating: 5,
    imageUrl: "/hero/banner-img3.webp",
    videoUrl:
      "https://www.youtube-nocookie.com/embed/CtyL7s_8-cE?rel=0&autoplay=0",
  },
];
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  imageUrl: string;
  videoUrl: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  rating,
  imageUrl,
  videoUrl,
}: TestimonialCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
      if (iframeRef.current) {
        iframeRef.current.src = `${videoUrl}${
          videoUrl.includes("?") ? "&" : "?"
        }autoplay=1`;
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [videoUrl]);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    if (!showVideo && iframeRef.current) {
      iframeRef.current.src = `${videoUrl}${
        videoUrl.includes("?") ? "&" : "?"
      }autoplay=1`;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 h-full flex flex-col">
      <div className="relative h-64 md:h-80">
        {showVideo ? (
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        ) : (
          <Image
            src={imageUrl}
            alt={`${name}'s testimonial`}
            fill
            className="object-cover"
          />
        )}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
            showVideo && "hidden"
          )}
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300"
          onClick={toggleVideo}
          aria-label={showVideo ? "Show image" : "Play video"}
        >
          {showVideo ? (
            <Pause className="w-6 h-6" />
          ) : (
            <PlayCircle className="w-6 h-6" />
          )}
        </Button>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-purple-50 to-green-50">
        <Quote className="w-10 h-10 text-purple-600 mb-4" />
        <p className="text-gray-700 font-light leading-relaxed mb-4 flex-grow text-sm lg:text-base">
          {quote}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-purple-600 font-semibold">{name}</h3>
            <p className="text-gray-500 text-sm">{title}</p>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    AutoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-900 via-green-900 to-purple-900">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="testimonial-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.05)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.05)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#testimonial-grad)"
            fillOpacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="testimonial-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#testimonial-noise)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:px-8 xl:px-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Discover how our services have transformed the investment strategies
            of our valued clients.
          </p>
        </div>
        <div className="relative px-2 md:px-4">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 h-full">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
          <div className="absolute -bottom-14 right-5 flex mt-4 border border-border  overflow-hidden">
            <div
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous slide"
              className="bg-purple-600 cursor-pointer p-2"
            >
              <Image
                src="/images/prev-arrow.webp"
                alt="Previous"
                width={22}
                height={22}
              />
            </div>
            <div
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next slide"
              className="bg-purple-600 border-l cursor-pointer p-2"
            >
              <Image
                src="/images/next-arrow.webp"
                alt="Next"
                width={22}
                height={22}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                currentSlide === index
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-400"
              )}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
