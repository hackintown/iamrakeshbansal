"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { Button } from "../ui/button";

export default function ModernAboutUs() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(timelineProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(timelineProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const timelineEvents = [
    { year: 2000, title: "Started Trading Career" },
    { year: 2005, title: "Published First Book" },
    { year: 2010, title: "Launched Online Trading Course" },
    { year: 2015, title: "Established Trading Academy" },
    { year: 2020, title: "Released Trading App" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section with Autoplay Video */}
      <section className="relative h-[300px]">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-50" : "opacity-0"
          }`}
        >
          <CldVideoPlayer
            width="1920"
            height="1080"
            src="samples/cld-sample-video"
            autoPlay
            loop
            muted
            controls={false}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Rakesh Bansal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering Traders, Transforming Lives
          </p>
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
        </motion.div>
      </section>

      {/* About Section */}
      <section className="sm:pt-32 pb-10 md:pt-[8rem] lg:pt-44 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                About Rakesh Bansal
              </h2>
              <p className="text-sm md:text-base mb-6 font-light leading-snug text-center md:text-left">
                Rakesh Bansal is a visionary trading mentor and bestselling
                author with over two decades of experience in the financial
                markets. His innovative strategies and mentorship programs have
                helped thousands of aspiring traders achieve their financial
                goals and transform their lives.
              </p>
              <p className="text-sm md:text-base mb-6 font-light leading-snug text-center md:text-left">
                As the founder of the renowned Trading Academy and creator of
                cutting-edge trading applications, Rakesh continues to push the
                boundaries of what's possible in the world of trading education
                and technology.
              </p>
              <Link href="#" className="flex justify-center md:justify-start">
                <Button variant="gradient" size="custom" className="">Explore My Journey</Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/hero/banner-img1.webp"
                alt="Rakesh Bansal"
                width={400}
                height={400}
                className="rounded-full border-4 border-blue-400 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        ref={timelineRef}
        className="py-20 bg-gradient-to-b from-blue-900 to-green-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Journey
          </h2>
          <motion.div style={{ opacity, scale }} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400" />
            {timelineEvents.map((event, index) => (
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

      {/* Books Section */}
      <section className="py-20 bg-gradient-to-b from-green-900 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Bestselling Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <motion.div
                key={book}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=200&text=Book ${book}`}
                  alt={`Book ${book}`}
                  width={200}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">
                    The Art of Trading: Volume {book}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover the secrets of successful trading with Rakesh
                    Bansal's comprehensive guide to market analysis and
                    strategy.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      $34.99
                    </span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Connect with Rakesh
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: FaFacebook, href: "#", color: "bg-blue-600" },
              { icon: FaTwitter, href: "#", color: "bg-sky-500" },
              { icon: FaLinkedin, href: "#", color: "bg-blue-700" },
              { icon: FaInstagram, href: "#", color: "bg-pink-600" },
              { icon: FaYoutube, href: "#", color: "bg-red-600" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} text-white rounded-full p-4 transition duration-300`}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-blue-500"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
