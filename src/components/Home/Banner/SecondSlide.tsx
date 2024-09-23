"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, TrendingUp, DollarSign, BarChart2, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExpertiseSlide() {
  const expertiseAreas = [
    { icon: TrendingUp, title: "Technical Analysis", description: "Master chart patterns and indicators" },
    { icon: DollarSign, title: "Risk Management", description: "Learn to protect and grow your capital" },
    { icon: BarChart2, title: "Market Dynamics", description: "Understand market psychology and trends" },
    { icon: Users, title: "Community Trading", description: "Join our thriving trading community" },
  ]

  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
              Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Trading Potential</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Elevate your trading skills with expert guidance and cutting-edge strategies. Join thousands of successful traders who have transformed their approach to the markets.
            </p>

            <div className="mt-8 sm:mt-12 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for trading strategies, e.g., 'Fibonacci Retracement'"
                className="block w-full py-3 pl-10 pr-3 text-white placeholder-gray-400 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                className="mt-4 w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Explore Strategies
              </Button>
            </div>

            <div className="mt-12">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="ml-2 text-lg font-medium text-white">Trusted by 50,000+ traders worldwide</span>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <TrendingUp key={index} className="w-5 h-5 text-green-400" />
                  ))}
                </div>
                <span className="text-base font-medium text-white">
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
            <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 rounded-lg p-4 flex items-start space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <area.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{area.title}</h4>
                      <p className="text-gray-300 mt-1">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Image
                  src="/images/trading-chart.png"
                  alt="Advanced Trading Chart"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}