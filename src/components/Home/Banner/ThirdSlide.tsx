"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  ArrowRight,
  Download,
  Star,
  Users,
  Coffee,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const books = [
  {
    title: "Mastering Market Trends",
    cover:
      "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_1.jpg",
    rating: 4.8,
    reviews: 1250,
    price: "$29.99",
  },
  {
    title: "The Psychology of Trading",
    cover:
      "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_2.jpg",
    rating: 4.9,
    reviews: 980,
    price: "$34.99",
  },
  {
    title: "Advanced Technical Analysis",
    cover:
      "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_3.jpg",
    rating: 4.7,
    reviews: 1500,
    price: "$39.99",
  },
]

export default function ThirdSlide() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="w-full min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-green-900">
      {/* Book-themed Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="book-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0 0h100v100H0z" fill="none" />
              <path d="M30 20h40v60H30z" fill="rgba(139, 92, 246, 0.1)" />
              <path d="M20 30h60v40H20z" fill="rgba(16, 185, 129, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#book-pattern)" />
        </svg>
      </div>

      {/* Animated book pages */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white opacity-10"
            style={{
              width: Math.random() * 40 + 20 + "px",
              height: Math.random() * 60 + 30 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Learn from the&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Best-Selling&nbsp;
              </span>
              Author
            </h2>
            <p className="text-lg text-gray-300">
              Dive deep into the world of trading with Rakesh Bansal's acclaimed
              books.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-3 shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="w-full h-24 sm:h-32 lg:h-44 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-yellow-400 text-xs">{book.rating}</span>
                    <span className="text-gray-400 text-xs ml-1">
                      ({book.reviews})
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-white font-semibold">{book.price}</span>
                    <Button
                      variant="gradient"
                      size="custom"
                      className="text-white border-white hover:bg-white hover:text-purple-500"
                    >
                      Buy Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-8">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-6 h-6 text-purple-400" />
                <div className="ml-2">
                  <p className="text-xl font-bold text-white">50,000+</p>
                  <p className="text-xs text-gray-400">Traders mentored</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="w-6 h-6 text-green-400" />
                <div className="ml-2">
                  <p className="text-xl font-bold text-white">1M+</p>
                  <p className="text-xs text-gray-400">Book downloads</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-6 h-6 text-yellow-400" />
                <div className="ml-2">
                  <p className="text-xl font-bold text-white">15+</p>
                  <p className="text-xs text-gray-400">
                    Years of experience
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
            <motion.div
              className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/avatar3.png"
                alt="Rakesh Bansal - Trading Mentor and Author"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-lg mb-4 h-[200px] sm:h-[250px] lg:h-[300px] object-contain"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Meet Rakesh Bansal
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                With over 15 years of experience in the financial markets,
                Rakesh Bansal has helped thousands of traders achieve their
                goals. His books have become essential reading for both novice
                and experienced traders alike.
              </p>
              <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Book Elements */}
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
        <BookOpen className="w-64 h-64 text-purple-400" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 z-0 opacity-15"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <BookOpen className="w-48 h-48 text-green-400" />
      </motion.div>
    </section>
  )
}