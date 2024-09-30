"use client"
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

export default function DownloadApp() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-green-900">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="app-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20h40v1H0zM20 0v40h1V0z"
                fill="rgba(255,255,255,0.1)"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#app-pattern)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              id="app-radial"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="rgba(124, 58, 237, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="50%" fill="url(#app-radial)" />
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Elevate Your Trading
              <br />
              <span className="text-green-400">Anytime, Anywhere</span>
            </h2>
            <p className="text-sm lg:text-lg text-gray-300 mb-8">
              Access real-time market data, execute trades on-the-go, and
              receive personalized mentoring notifications. Our mobile app is
              designed to enhance your trading performance and keep you
              connected to the markets 24/7.
            </p>
            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
              <Link
                href=" https://play.google.com/store/apps/details?id=com.rpy.rakeshplhrwc"
                className="flex"
                role="button"
              >
                <Image
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="w-auto h-14"
                />
              </Link>
              <Link
                href="https://apps.apple.com/us/app/rakesh-bansal-ventures/id6474428694?mt=8 "
                className="flex"
                role="button"
              >
                <Image
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="w-auto h-14"
                />
              </Link>
            </div>
          </div>
          <motion.div
          className="w-full lg:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full md:w-2/3 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-green-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <Slider {...sliderSettings}>
              {[
                "/images/download-app.webp",
                "/images/group-mbl-shape.webp",
                "/images/product-mbl-shape.webp",
                "/images/course-mbl-shape.webp",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out"
                >
                  <Image
                    src={src}
                    alt={`App Screen ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full  max-w-md mx-auto rounded-3xl shadow-2xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
