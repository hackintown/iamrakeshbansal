"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <Image
      src={`/images/${direction}-arrow.webp`}
      width={16}
      height={16}
      alt={`${direction} arrow`}
      className="w-4 h-4"
    />
  </Button>
);

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => (
  <div className="bg-[#D9D9D9] h-full flex flex-col justify-between rounded-2xl shadow-md overflow-hidden">
    <div className="bg-[#BABABA] relative h-[200px] lg:h-[250px] rounded-b-xl">
      <div className="absolute bg-primary rounded-full w-14 h-14 flex items-center justify-center left-6 -bottom-6 z-20">
        <Image
          src="/images/testimonial-icon.webp"
          width={28}
          height={28}
          alt="Testimonial icon"
          className="w-7 h-7"
        />
      </div>
    </div>
    <div className="px-4 md:px-8 py-6 mt-7 md:mt-10 flex flex-col flex-grow">
      <p className="text-foreground font-light leading-5 text-xs mb-4 flex-grow">
        {quote}
      </p>
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-primary font-semibold text-xs">{name}</h3>
          <p className="text-muted-foreground text-xs font-normal">{title}</p>
        </div>
        <Button
          variant="outline"
          className="bg-primary text-primary-foreground hover:bg-primary/90 border-none rounded-full text-xs whitespace-nowrap transition-colors duration-200"
        >
          Continue Reading
        </Button>
      </div>
    </div>
  </div>
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
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover object-[left,right]"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
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
        <div className="grid grid-cols-1 lg:grid-cols-[30%,70%] xl:grid-cols-[20%,80%] lg:gap-x-5 items-center lg:justify-between py-20 lg:pb-28 xl:pb-36">
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
                <div key={index} className="px-1 h-full">
                  <TestimonialCard {...testimonial} />
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
