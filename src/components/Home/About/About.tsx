"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function EnhancedAboutSection() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-purple-900 to-green-600">
        <svg
          className="absolute top-0 right-0 w-full h-64 transform rotate-180 z-0"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="about-us-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#about-us-grad)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      <div className="container relative mx-auto px-4 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white text-center sm:text-5xl leading-tight xl:leading-tight mb-3 lg:mb-5 xl:mb-10">
            About Dr.&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
              Rakesh Bansal
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-2xl z-50 w-full h-64 md:h-auto"
            >
              <Image
                src="/hero/banner-img3.webp"
                alt="Dr. Rakesh Bansal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30" />
            </motion.div>
            <div>
              <p className="text-sm lg:text-base mb-4 text-gray-300 leading-relaxed font-light text-center md:text-left">
                Dr. Rakesh Bansal, a post-graduate in International Business
                Management and has doctorate through his expertise in markets
                and analysis, he has been in the market since 1998 and is a
                prominent figure in stock market analysis with millions of
                people following his advice to work towards their financial
                independence. With over two decades of extensive experience, he
                specializes in technical analysis, wealth management and
                investment analysis.
              </p>
              <p className="text-sm lg:text-base mb-6 text-gray-300 leading-relaxed font-light text-center md:text-left">
                He is SEBI registered research anyst&nbsp;
                <span className="font-bold inline-block">(INH100008984),</span>
                offering high-quality market insights and educational resources
                to traders and investors across the country.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about-us"
                  className="flex justify-center md:justify-start"
                >
                  <Button variant="gradient" size="custom">
                    Read More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
