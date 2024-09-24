"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, TrendingUp, Users, Zap } from "lucide-react"

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

export default function PortfolioAchievementSlide() {
  return (
    <div className="w-full h-screen lg:h-[650px] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Portfolio Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
              Portfolio
            </h3>
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
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
              Achievements
            </h3>
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
      </div>
    </div>
  )
}
