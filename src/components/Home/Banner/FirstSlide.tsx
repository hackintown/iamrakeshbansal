"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, BarChart2 } from "lucide-react";

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
    <section className="w-full min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/graph-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl leading-tight">
              Master the Markets with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
                Rakesh Bansal
              </span>
            </h1>
            <p className="mt-5 text-xl text-gray-300">
              Empowering traders with expert insights and proven strategies for
              success in the dynamic world of financial markets.
            </p>
            <motion.div
              className="mt-8 flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-green-500 text-white border-0 text-lg font-semibold hover:from-purple-600 hover:to-green-600 px-8 py-4"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-accent text-base border-white hover:text-gray-900"
              >
                Subscribe Now
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center space-x-8"
            >
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-gray-300">Expert Analysis</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-gray-300">Profit Strategies</span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Market Insights</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500 rounded-full blur-3xl opacity-30"></div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="w-full h-auto"
                src="/images/avatar2.webp"
                alt="Rakesh Bansal"
                width={600}
                height={600}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">Rakesh Bansal</h2>
                <p className="text-gray-300">Trading Mentor & Market Analyst</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 z-0 opacity-15"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/images/stock-chart.svg"
          alt="Stock Chart"
          width={500}
          height={500}
        />
      </motion.div>
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
