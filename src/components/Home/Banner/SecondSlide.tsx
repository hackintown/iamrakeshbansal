"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  DollarSign,
  BarChart2,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExpertiseSlide() {
  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: "Technical Analysis",
      description: "Master chart patterns and indicators",
    },
    {
      icon: DollarSign,
      title: "Risk Management",
      description: "Learn to protect and grow your capital",
    },
    {
      icon: BarChart2,
      title: "Market Dynamics",
      description: "Understand market psychology and trends",
    },
    {
      icon: Users,
      title: "Community Trading",
      description: "Join our thriving trading community",
    },
  ];

  return (
    <section className="w-full flex items-center bg-gradient-to-br from-gray-900 to-black py-8 lg:py-0 overflow-y-auto lg:overflow-y-hidden lg:h-[650px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Unlock Your&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Trading Potential
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Elevate your trading skills with expert guidance and cutting-edge
              strategies. Join thousands of successful traders who have
              transformed their approach to the markets.
            </p>

            <div className="relative">
              <div className="absolute left-0 top-2 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for trading strategies"
                className="block w-full py-2 pl-10 pr-3 text-sm text-white placeholder-gray-400 bg-white 
                bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="mt-2 w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Explore Strategies
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="ml-2 text-sm font-medium text-white">
                  Trusted by 50,000+ traders worldwide
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <TrendingUp
                      key={index}
                      className="w-4 h-4 text-green-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white">
                  95% success rate in student profitability
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-3xl opacity-30"></div>
            <div className="relative bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 rounded-lg p-3 flex items-start space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <area.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {area.title}
                      </h4>
                      <p className="text-xs text-gray-300 mt-1">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4">
                <Image
                  src="/images/candle-stick.svg"
                  alt="Advanced Trading Chart"
                  width={500}
                  height={500}
                  className="rounded-lg w-full lg:h-[200px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
