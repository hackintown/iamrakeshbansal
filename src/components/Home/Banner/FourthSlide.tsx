"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts"
import { ArrowUpRight, Award, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
]

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-700">{`${label} : $${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const achievements = [
  { icon: Award, title: "Top 10 Trading Mentor", description: "Recognized by Wall Street Journal" },
  { icon: TrendingUp, title: "500% Portfolio Growth", description: "Achieved for top clients in 2023" },
  { icon: Users, title: "10,000+ Students", description: "Trained and mentored globally" },
  { icon: Zap, title: "AI Trading Algorithm", description: "Developed proprietary system" },
]

const portfolioImages = [
  { src: "/images/trading-seminar.jpg", alt: "Rakesh Bansal speaking at a trading seminar" },
  { src: "/images/trading-book-signing.jpg", alt: "Book signing event for 'Master the Market'" },
  { src: "/images/trading-award.jpg", alt: "Receiving 'Best Trading Mentor' award" },
  { src: "/images/trading-interview.jpg", alt: "TV interview on market trends" },
]

export default function FourthSlide() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Expert Insights & Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage Rakesh Bansal's decades of experience and data-driven strategies to transform your trading journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Data-Driven Trading Strategies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Technical Analysis</h4>
                <p className="text-gray-400">Master chart patterns and indicators</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Fundamental Analysis</h4>
                <p className="text-gray-400">Understand economic factors and company financials</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Risk Management</h4>
                <p className="text-gray-400">Learn to protect your capital and maximize returns</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Algorithmic Trading</h4>
                <p className="text-gray-400">Develop and backtest automated trading systems</p>
              </div>
            </div>
            <div className="w-full h-80 bg-gray-800 bg-opacity-50 rounded-2xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-lg">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Portfolio & Achievements</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {portfolioImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-800 bg-opacity-50 rounded-lg p-4 backdrop-filter backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <achievement.icon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-lg font-semibold hover:from-purple-600 hover:to-pink-600"
          >
            Start Your Trading Journey
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}