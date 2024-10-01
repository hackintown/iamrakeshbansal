"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { GiBookshelf, GiTeacher, GiChart } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import BookPublished from "../ui/BookPublished";

const AboutUs: React.FC = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(timelineProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(timelineProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-600 opacity-50" />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg"
            alt="Stock Market Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </motion.div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
          >
            Dr. Rakesh Bansal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl mb-8"
          >
            Empowering Traders, Transforming Lives
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                About Dr. Rakesh Bansal
              </h2>
              <p className="text-sm md:text-base mb-6 font-light leading-relaxed text-center md:text-left">
                Dr. Rakesh Bansal, a post-graduate in International Business
                Management and holder of a doctorate in market analysis, has
                been a prominent figure in stock market analysis since 1998.
                With over two decades of extensive experience, he specializes in
                technical analysis, wealth management, and investment analysis.
              </p>
              <p className="text-sm md:text-base mb-6 font-light leading-relaxed text-center md:text-left">
                As a SEBI registered research analyst (INH100008984), Dr. Bansal
                offers high-quality market insights and educational resources to
                traders and investors across the country, helping millions work
                towards their financial independence.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button variant="gradient" size="custom" className="mr-4">
                  Learn More
                </Button>
                <Button variant="gradient" size="custom">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about-us-img.webp"
                  alt="Dr. Rakesh Bansal"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-blue-400 shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career and Media Presence */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-green-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Career and Media Presence
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaYoutube,
                title: "Expert Panelist",
                description:
                  "Featured on Zee Business, CNBC Awaaz, ET Now, and DD News",
              },
              {
                icon: GiBookshelf,
                title: "Published Author",
                description:
                  "Author of 'Profitable Short Term Trading Strategies'",
              },
              {
                icon: GiChart,
                title: "Industry Leader",
                description:
                  "Former technical analysis department leader at top firms",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 rounded-lg p-6 text-center"
              >
                <item.icon className="text-5xl mb-4 mx-auto text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        ref={timelineRef}
        className="py-20 bg-gradient-to-b from-green-900 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Dr. Bansal's Journey
          </motion.h2>
          <motion.div style={{ opacity, scale }} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400" />
            {[
              { year: 1998, title: "Started Trading Career" },
              { year: 2005, title: "Published First Book" },
              { year: 2010, title: "Launched Online Trading Course" },
              { year: 2015, title: "Established Trading Academy" },
              { year: 2020, title: "Released Trading App" },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{event.year}</h3>
                  <p className="text-lg">{event.title}</p>
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trading Philosophy and Methodology */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Trading Philosophy and Methodology
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Disciplined Approach
              </h3>
              <p className="text-sm mb-4">
                Dr. Bansal's trading philosophy is rooted in discipline and
                meticulous technical analysis. He focuses on identifying strong
                entry and exit points, utilizing advanced tools to uncover
                hidden market opportunities.
              </p>
              <ul className="list-disc list-inside text-sm">
                <li>3-line break charts</li>
                <li>Inverse charts</li>
                <li>ATM trading strategy</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white bg-opacity-10 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Risk Management</h3>
              <p className="text-sm mb-4">
                Dr. Bansal emphasizes the importance of effective risk
                management in trading. His strategies are designed to help
                traders capitalize on short-term trends while minimizing
                potential losses.
              </p>
              <ul className="list-disc list-inside text-sm">
                <li>Clear stop-loss levels</li>
                <li>Position sizing techniques</li>
                <li>Diversification strategies</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Contributions */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-green-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Educational Contributions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GiTeacher,
                title: "Webinars",
                description: "Live interactive sessions on market analysis",
              },
              {
                icon: GiBookshelf,
                title: "Courses",
                description: "Comprehensive trading courses for all levels",
              },
              {
                icon: GiChart,
                title: "Research",
                description: "In-depth market research and analysis reports",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 rounded-lg p-6 text-center"
              >
                <item.icon className="text-5xl mb-4 mx-auto text-green-400" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BookPublished />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-blue-500"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default AboutUs;
