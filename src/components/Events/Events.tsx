"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Calendar, MapPin, Users, Play } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Masonry from "react-masonry-css";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

// Add this new interface
interface GalleryImageProps {
  src: string;
  alt: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  attendees,
  image,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-purple-200"
  >
    <div className="relative h-48">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Calendar className="w-4 h-4 mr-2 text-green-600" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2 text-green-600" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-4 h-4 mr-2 text-green-600" />
        <span>{attendees} attendees</span>
      </div>
    </div>
  </motion.div>
);

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
        >
          <Play className="w-16 h-16 text-green-400" />
        </button>
      )}
    </div>
  );
};

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ProfessionalGallery: React.FC<{ images: GalleryImageProps[] }> = ({
  images,
}) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-4"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-purple-900 bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">{image.alt}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </Masonry>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <Image
        src="https://32watts.com/iamrakeshbansal/events/event3.webp"
        alt="Event background"
        fill
        className="object-cover object-center"
        quality={100}
      />
      <div className="absolute inset-0 bg-white bg-opacity-80" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-800 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-800"
        >
          Elevate Your Trading Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-8 max-w-2xl text-gray-600"
        >
          Join our exclusive events featuring industry experts, cutting-edge
          strategies, and networking opportunities
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
          <Link
            href="#events"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md"
          >
            Explore Events
          </Link>
          <Link
            href="#subscribe"
            className="bg-transparent hover:bg-purple-100 text-purple-600 font-semibold py-3 px-6 rounded-md border-2 border-purple-600 transition duration-300 shadow-md"
          >
            Subscribe
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default function EventsPage() {
  const dummyEvents: EventCardProps[] = [
    {
      title: "Advanced Trading Strategies",
      date: "June 15, 2023",
      location: "New York, NY",
      attendees: 150,
      image: "https://32watts.com/iamrakeshbansal/events/event9.webp",
    },
    {
      title: "Crypto Trading Masterclass",
      date: "July 2, 2023",
      location: "London, UK",
      attendees: 200,
      image: "https://32watts.com/iamrakeshbansal/events/event10.webp",
    },
    {
      title: "Risk Management Workshop",
      date: "July 20, 2023",
      location: "Tokyo, Japan",
      attendees: 100,
      image: "https://32watts.com/iamrakeshbansal/events/event11.webp",
    },
  ];

  const dummyGalleryImages: GalleryImageProps[] = [
    {
      src: "https://32watts.com/iamrakeshbansal/events/event1.webp",
      alt: "Gallery Image 1",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event2.webp",
      alt: "Gallery Image 2",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event3.webp",
      alt: "Gallery Image 3",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event4.webp",
      alt: "Gallery Image 4",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event5.webp",
      alt: "Gallery Image 5",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event6.webp",
      alt: "Gallery Image 6",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event7.webp",
      alt: "Gallery Image 7",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event8.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event8.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event9.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event10.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event11.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event12.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event13.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event14.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event15.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event16.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event17.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event18.webp",
      alt: "Gallery Image 8",
    },
    {
      src: "https://32watts.com/iamrakeshbansal/events/event19.webp",
      alt: "Gallery Image 8",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />

      {/* Recent Events Section */}
      <AnimatedSection>
        <section id="events" className="py-16 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Recent Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Professional Event Gallery Section */}
      <AnimatedSection>
        <section id="gallery" className="py-16 px-4 md:px-8 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Event Gallery
          </h2>
          <ProfessionalGallery images={dummyGalleryImages} />
        </section>
      </AnimatedSection>

      {/* Video Showcase Section */}
      <AnimatedSection>
        <section id="videos" className="py-16 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoPlayer
              src="https://32watts.com/iamrakeshbansal/testimonial1.mp4"
            />
            <VideoPlayer
              src="https://32watts.com/iamrakeshbansal/testimonial2.mp4"
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Upcoming Events Section */}
      <AnimatedSection>
        <section className="py-16 px-4 md:px-8 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection>
        <section id="subscribe" className="py-16 px-4 md:px-8 bg-purple-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-purple-800">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Subscribe to our newsletter for the latest event updates and
              trading insights.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
