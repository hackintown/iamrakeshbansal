"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="w-full min-h-screen flex lg:items-center relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-green-900">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.05)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.05)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fillOpacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="url(#grad2)"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 5 + 1 + "px",
              height: Math.random() * 5 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:items-start w-full h-full"
        >
          <motion.div variants={itemVariants} className="mt-6 lg:mt-20">
            <h1 className="text-3xl font-bold text-white sm:text-5xl xl:text-6xl leading-tight xl:leading-[1.2]">
              Let&apos;s
              <br className="hidden xl:block" /> Dream Big With&nbsp;
              <br className="hidden xl:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
                Dr. Rakesh Bansal
              </span>
            </h1>
            <p className="mt-5 text-xs sm:text-sm md:text-base text-gray-300 font-light">
              Dr. Rakesh Bansal&apos;s aim is to revolutionize stock market
              research services by bringing technology assisted analysis
              accessible to retail investors. With your support, it is our
              endeavour to build India&apos;s largest Stock research ecosystem.
            </p>
            <motion.div
              className="mt-8 flex items-center space-x-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#services-sec">
                <Button variant="gradient" size="custom" showArrow>
                  Start Your Journey
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex items-center space-x-8"
            >
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-gray-300 text-xs md:text-sm">
                  Expert Analysis
                </span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-gray-300 text-xs md:text-sm">
                  Market Strategies
                </span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-300 text-xs md:text-sm">
                  Market Insights
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            <div className="relative rounded-lg overflow-hidden h-full max-w-[500px] lg:max-h-[650px] lg:float-right">
              <Image
                className="w-full h-full lg:h-auto object-cover"
                src="/hero/banner-first-slide.webp"
                alt="Rakesh Bansal"
                width={500}
                height={500}
              />
              {/* <div className="absolute bottom-8 md:bottom-16 left-6 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">Rakesh Bansal</h2>
                <p className="text-gray-300">Trading Mentor & Market Analyst</p>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-20 left-20 z-0 opacity-15"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/images/candle-stick.svg"
          alt="Candlestick Chart"
          width={800}
          height={800}
        />
      </motion.div>
    </section>
  );
}
