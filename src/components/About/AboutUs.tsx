"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDown,
  Book,
  Trophy,
  Briefcase,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Component() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Rakesh Bansal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Mentor | Author | Visionary
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={40} className="animate-bounce" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Rakesh Bansal"
            fill
            className="filter blur-sm"
          />
        </motion.div>
      </section>

      {/* Books Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Published Books
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((book) => (
              <motion.div
                key={book}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-96">
                  <Image
                    src={`/hero/banner-img3.webp ${book}`}
                    alt={`Book ${book}`}
                    fill
                  className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-900">
                    Transformative Leadership: Volume {book}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover the secrets to becoming an exceptional leader in
                    today's dynamic business landscape.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                      $24.99
                    </span>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-purple-800"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Achievements
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Trophy,
                title: "Industry Leader Award",
                description:
                  "Recognized for outstanding contributions to the field of leadership development.",
              },
              {
                icon: Book,
                title: "Bestselling Author",
                description:
                  "Author of multiple bestselling books on business strategy and personal growth.",
              },
              {
                icon: Briefcase,
                title: "Top 100 Mentors",
                description:
                  "Named one of the Top 100 Business Mentors by Forbes for three consecutive years.",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <achievement.icon className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2 text-purple-900">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Profile and Social Media */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-gradient-to-b from-purple-800 to-black"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Connect with Rakesh
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/hero/banner-img3.webp"
                alt="Rakesh Bansal"
                fill
                className="rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-bold mb-4">Rakesh Bansal</h3>
              <p className="text-lg mb-6">
                Passionate about empowering the next generation of leaders.
                Connect with me on social media for daily inspiration and
                insights.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { icon: Facebook, href: "#", color: "bg-blue-600" },
                  { icon: Twitter, href: "#", color: "bg-sky-500" },
                  { icon: Linkedin, href: "#", color: "bg-blue-700" },
                  { icon: Instagram, href: "#", color: "bg-pink-600" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`${social.color} text-white hover:opacity-80 rounded-full p-3 transition duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
