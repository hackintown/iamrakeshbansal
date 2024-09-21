"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "I have been using Rakesh Bansal Ventures advisory services for the past 2 years, and I am thoroughly impressed with the quality of insights and recommendations they have provided. Their team demonstrates a deep understanding of market trends and employs advanced analytical techniques that have significantly improved my trading strategies and outcomes.",
    name: "Prakash Choudhary",
    title: "Self-Investor",
  },
  {
    quote:
      "Your tips are excellent available market sometime trade you are over traded in that condition increase the margin of error you can't control the market but you can control Sanjeev bhasin type allegations if you provide helpline number for member that's very helpful.",
    name: "Nitish Trama",
    title: "Self-Investor",
  },
  {
    quote:
      "Your stock performance is good but I would suggest give only 2-3 stock monthly which may give 25 % plus return ( over weight ). Note : Rakesh Bansal Ventures performance is very high. 50 % profit shared with you because of high price.",
    name: "Ganesh Jagtap",
    title: "Self-Investor",
  },
];

const CustomArrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="icon"
    className={cn(
      "absolute top-1/2 -translate-y-1/2 z-10 bg-[#852B83] text-foreground rounded-none hover:bg-transparent",
      direction === "prev"
        ? "left-0 -translate-x-1/2"
        : "left-0 translate-x-1/2 bg-[#F3A0F1]"
    )}
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
  >
    {direction === "prev" ? (
      <Image
        src="/images/prev-arrow.webp"
        width={16}
        height={16}
        alt="prev-arrow"
        className="w-4 h-4"
      />
    ) : (
      <Image
        src="/images/next-arrow.webp"
        width={16}
        height={16}
        alt="prev-arrow"
        className="w-4 h-4"
      />
    )}
  </Button>
);

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden py-32">
      <Image
        src="/images/testi-bg.webp"
        alt="Testimonial background"
        fill
        className="object-cover bg-left"
        priority
      />
      {/* Overlay Layer */}
      <div className="absolute inset-1 z-10 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 xl:px-10 relative z-20 bg-[#71B4C5]">
        <div className="absolute bg-primary rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center left-1/2 -top-16 lg:left-24 z-20 -translate-x-1/2">
          <Image
            src="/images/testimonial-icon.webp"
            width={56}
            height={56}
            alt="Testimonial icon"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[30%,70%] xl:grid-cols-[20%,80%] lg:gap-x-5 items-center lg:justify-center py-20 lg:pb-28 xl:pb-36">
          <div className="flex flex-col space-y-3 mb-5">
            <h2 className="text-4xl font-bold text-primary text-center lg:text-left">
              Testimonials
            </h2>
            <p className="font-light text-xs text-center lg:text-left text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              laoreet sapien vel malesuada auctor. Curabitur venenatis ex ac
              semper posuere.
            </p>
          </div>
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 h-full">
                  <div className="h-full">
                    <TestimonialCard {...testimonial} className="h-full" />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute -bottom-10 left-8">
              <CustomArrow
                direction="prev"
                onClick={() => sliderRef.current?.slickPrev()}
              />
              <CustomArrow
                direction="next"
                onClick={() => sliderRef.current?.slickNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
