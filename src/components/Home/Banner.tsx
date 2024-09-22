"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
import { useRouter } from "next/navigation";

const Banner = () => {
  const words = ["Success", "Mastery", "Excellence", "Confidence"];
  const router = useRouter();
  return (
    <div className="relative w-full py-5 lg:py-10 h-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="md:flex items-center justify-between">
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h1
              className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
             font-bold leading-tight lg:leading-tight xl:leading-tight text-cyan-300"
            >
              Unlock <br className="hidden md:block" /> the Path to Trading
              <br className="md:hidden" />
              <br className="hidden md:block" />
              and
              <FlipWords
                className="text-secondary-foreground font-bold"
                words={words}
              />
              <br />
            </h1>
            <Button
              onClick={() => router.push("/contact-us")}
              className="my-5 font-base"
            >
              Enroll Now
            </Button>
          </div>

          {/* Banner Image */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full">
            <Image
              src="/images/avatar.webp"
              alt="banner-img"
              priority
              width={500}
              height={500}
              className="max-w-[300px] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
