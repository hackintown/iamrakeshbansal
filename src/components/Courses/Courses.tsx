"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Courses = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const courseImage =
    "https://www.iamrakeshbansal.com/wp-content/uploads/2024/10/COURSE-website.jpg";
  const courseTitle = "Master the Art of Trading";
  const videoUrl =
    "https://www.iamrakeshbansal.com/wp-content/uploads/2024/09/Final-Trailer.mp4";
  const quotation =
    "Embark on your journey into the world of financial markets with this comprehensive course designed specifically for beginners who wish to master the art of technical analysis from the ground up. Led by the esteemed Dr. Rakesh Bansal, a seasoned expert in the field, this course provides you with the knowledge and tools necessary to analyze market trends, make informed decisions, and achieve your trading and investment goals.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          {/* Image Section */}
          <div
            className="relative aspect-video w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              fill
              src={courseImage}
              alt={courseTitle}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <Link href="https://com.rpy.club/cop/k01M4Phela" passHref>
                    <Button
                      variant="gradient"
                      size="custom"
                      className="font-semibold"
                    >
                      Buy Now
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8">
            {/* Quotation */}
            <blockquote className="border-l-4 border-purple-500 pl-4 mb-6 italic text-gray-700 text-sm md:text-base">
              {quotation}
            </blockquote>

            {/* Video Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Course Preview
              </h2>
              <div className="relative aspect-video w-full bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay={false}
                  loop={false}
                  muted={false}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={handlePlayPause}
                >
                  {!isPlaying && (
                    <PlayCircle className="w-16 h-16 text-white opacity-75 hover:opacity-100 transition duration-300 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link
                href="https://com.rpy.club/cop/k01M4Phela"
                className="w-full"
                passHref
              >
                <Button variant="gradient" size="custom" className="w-full">
                  Buy Now
                </Button>
              </Link>

              <Link
                href="https://iamrakeshbansal.ck.page/kurukshetra"
                className="w-full"
                passHref
              >
                <Button variant="gradient" size="custom" className="w-full">
                  For Demo Class Click Here
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
