"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Download,
  Star,
  Users,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "Mastering Market Trends",
    cover:
      "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_1.jpg",
    rating: 4.8,
    reviews: 1250,
  },
  {
    title: "The Psychology of Trading",
    cover:
      "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_2.jpg",
    rating: 4.9,
    reviews: 980,
  },
  {
    title: "Advanced Technical Analysis",
    cover:
      "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_3.jpg",
    rating: 4.7,
    reviews: 1500,
  },
];

export default function ThirdSlide() {
  return (
    <section className="w-full flex items-center bg-gradient-to-br from-gray-900 to-black py-8 lg:py-0 overflow-y-auto lg:overflow-y-hidden lg:h-[650px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Learn from the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {' '}Best-Selling
              </span>
              {' '}Author
            </h2>
            <p className="text-lg text-gray-300">
              Dive deep into the world of trading with Rakesh Bansal's acclaimed
              books. Gain insights that have helped thousands of traders achieve
              success in the markets.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-3 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="w-full h-24 sm:h-32 lg:h-28 object-cover rounded-md mb-2"
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
                </motion.div>
              ))}
            </div>

            <div>
              <form
                action="#"
                method="POST"
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email for exclusive content"
                  className="flex-grow px-3 py-2 text-sm text-white placeholder-gray-400 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Get Free Chapter
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-2 text-xs text-gray-400">
                Instant access • No credit card required
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-8">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-purple-400" />
                <div className="ml-2">
                  <p className="text-xl font-bold text-white">50,000+</p>
                  <p className="text-xs text-gray-400">Traders mentored</p>
                </div>
              </div>
              <div className="flex items-center">
                <Download className="w-6 h-6 text-green-400" />
                <div className="ml-2">
                  <p className="text-xl font-bold text-white">1M+</p>
                  <p className="text-xs text-gray-400">Book downloads</p>
                </div>
              </div>
              <div className="flex items-center">
                <Coffee className="w-6 h-6 text-yellow-400" />
                <div className="ml-2">
                  <p className="text-xl font-bold text-white">15+</p>
                  <p className="text-xs text-gray-400">
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
            className="relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
            <div className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}