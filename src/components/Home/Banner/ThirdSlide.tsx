"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Download, Star, Users, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const books = [
  {
    title: "Mastering Market Trends",
    cover: "/images/book-cover-1.jpg",
    rating: 4.8,
    reviews: 1250,
  },
  {
    title: "The Psychology of Trading",
    cover: "/images/book-cover-2.jpg",
    rating: 4.9,
    reviews: 980,
  },
  {
    title: "Advanced Technical Analysis",
    cover: "/images/book-cover-3.jpg",
    rating: 4.7,
    reviews: 1500,
  },
]

export default function ThirdSlide() {
  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
              Learn from the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Best-Selling </span>
              Author
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Dive deep into the world of trading with Rakesh Bansal's acclaimed books. Gain insights that have helped thousands of traders achieve success in the markets.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">{book.title}</h3>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-yellow-400">{book.rating}</span>
                    <span className="text-gray-400 text-sm ml-2">({book.reviews} reviews)</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <form action="#" method="POST" className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email for exclusive content"
                  className="flex-grow px-4 py-3 text-white placeholder-gray-400 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  className="px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Get Free Chapter
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-400">
                Instant access • No credit card required
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="ml-3">
                  <p className="text-3xl font-bold text-white">50,000+</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Traders mentored
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Download className="w-8 h-8 text-green-400" />
                <div className="ml-3">
                  <p className="text-3xl font-bold text-white">1M+</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Book downloads
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Coffee className="w-8 h-8 text-yellow-400" />
                <div className="ml-3">
                  <p className="text-3xl font-bold text-white">15+</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Years of experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <Image
                src="/images/rakesh-bansal-author.jpg"
                alt="Rakesh Bansal - Trading Mentor and Author"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Meet Rakesh Bansal</h3>
              <p className="text-gray-300 mb-6">
                With over 15 years of experience in the financial markets, Rakesh Bansal has helped thousands of traders achieve their goals. His books have become essential reading for both novice and experienced traders alike.
              </p>
              <Button
                className="w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}