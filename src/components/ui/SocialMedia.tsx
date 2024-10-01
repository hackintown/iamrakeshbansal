"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import Link from "next/link";

const socialPlatforms = [
  {
    name: "YouTube",
    icon: "/images/yt.webp",
    followers: 357000,
    action: "SUBSCRIBE",
    href: "",
  },
  {
    name: "Instagram",
    icon: "/images/insta.webp",
    followers: 556000,
    action: "FOLLOW",
    href: "https://www.instagram.com/therakeshbansal/",
  },
  {
    name: "Facebook",
    icon: "/images/fb.webp",
    followers: 86000,
    action: "FOLLOW",
    href: "https://www.facebook.com/IAMRAKESHBANSAL/",
  },
  {
    name: "WhatsApp",
    icon: "/images/whatsapp.webp",
    followers: 4100,
    action: "FOLLOW",
    href: "https://whatsapp.com/channel/0029Vaglc39K0IBhitUB5N2K",
  },
  {
    name: "Telegram",
    icon: "/images/telegram.webp",
    followers: 29694,
    action: "FOLLOW",
    href: "https://t.me/RakeshAlgo",
  },
  {
    name: "Twitter",
    icon: "/images/twitter.webp",
    followers: 310700,
    action: "FOLLOW",
    href: "https://x.com/iamrakeshbansal",
  },
];

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export default function SocialPlatforms() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative z-10 py-2 sm:py-3 md:py-4 lg:py-6">
      {/* Background Image */}
      <Image
        src="/images/social-media.webp"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover object-[left,right]"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center justify-between w-full p-2 sm:p-3 md:p-4 lg:p-5"
            >
              <div className="rounded-full p-1 sm:p-2 md:p-3 sm:h-24">
                <Image
                  src={platform.icon}
                  alt={`${platform.name} icon`}
                  width={100}
                  height={100}
                  className="w-full h-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
                />
              </div>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-bold mt-1 sm:mt-2">
                {isMounted ? (
                  <CountUp
                    end={platform.followers}
                    duration={3}
                    separator=","
                    formattingFn={formatNumber}
                  />
                ) : (
                  formatNumber(platform.followers)
                )}
              </p>
              <Link href={platform.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-1 sm:mt-2 md:mt-4 max-w-[120px] sm:max-w-[150px] lg:max-w-[180px] w-full transition-colors
                 text-xs sm:text-sm lg:text-base bg-transparent text-secondary-foreground px-2 sm:px-3 md:px-4 
              lg:px-12 py-1 sm:py-2"
                >
                  {platform.action}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
