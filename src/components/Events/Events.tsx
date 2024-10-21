'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Play } from 'lucide-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface EventCardProps {
  title: string
  date: string
  location: string
  attendees: number
  image: string
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, attendees, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="relative h-48">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-4 h-4 mr-2" />
        <span>{attendees} attendees</span>
      </div>
    </div>
  </motion.div>
)

interface GalleryImageProps {
  src: string
  alt: string
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
  >
    <Image src={src} alt={alt} layout="fill" objectFit="cover" />
  </motion.div>
)

interface VideoPlayerProps {
  src: string
  poster: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
        >
          <Play className="w-16 h-16" />
        </button>
      )}
    </div>
  )
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

const ZigZagGallery: React.FC<{ images: GalleryImageProps[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 ${
            index % 2 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
          } ${index % 3 === 2 ? 'md:col-span-2' : ''}`}
        >
          <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-bold">{image.alt}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  }

  const gallerySliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const dummyEvents: EventCardProps[] = [
    {
      title: "Advanced Trading Strategies",
      date: "June 15, 2023",
      location: "New York, NY",
      attendees: 150,
      image: "https://dummyimage.com/600x400/000/fff&text=Event+1"
    },
    {
      title: "Crypto Trading Masterclass",
      date: "July 2, 2023",
      location: "London, UK",
      attendees: 200,
      image: "https://dummyimage.com/600x400/000/fff&text=Event+2"
    },
    {
      title: "Risk Management Workshop",
      date: "July 20, 2023",
      location: "Tokyo, Japan",
      attendees: 100,
      image: "https://dummyimage.com/600x400/000/fff&text=Event+3"
    },
  ]

  const dummyGalleryImages: GalleryImageProps[] = [
    { src: "https://dummyimage.com/600x400/000/fff&text=Gallery+1", alt: "Gallery Image 1" },
    { src: "https://dummyimage.com/600x400/000/fff&text=Gallery+2", alt: "Gallery Image 2" },
    { src: "https://dummyimage.com/600x400/000/fff&text=Gallery+3", alt: "Gallery Image 3" },
    { src: "https://dummyimage.com/600x400/000/fff&text=Gallery+4", alt: "Gallery Image 4" },
    { src: "https://dummyimage.com/600x400/000/fff&text=Gallery+5", alt: "Gallery Image 5" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        <Slider {...sliderSettings}>
          {[
            "https://dummyimage.com/1920x1080/000/fff&text=Hero+1",
            "https://dummyimage.com/1920x1080/000/fff&text=Hero+2",
            "https://dummyimage.com/1920x1080/000/fff&text=Hero+3"
          ].map((src, index) => (
            <div key={index} className="relative h-screen">
              <Image
                src={src}
                alt={`Event ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Trading Mentor Events</h1>
                  <p className="text-xl md:text-2xl mb-8">Join our exclusive trading workshops and seminars</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Explore Events
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Recent Events Section */}
      <AnimatedSection>
        <section id="events" className="py-16 px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Event Gallery Section */}
      <AnimatedSection>
        <section id="gallery" className="py-16 px-4 md:px-8 bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8">Event Gallery</h2>
          <ZigZagGallery images={dummyGalleryImages} />
        </section>
      </AnimatedSection>

      {/* Video Showcase Section */}
      <AnimatedSection>
        <section id="videos" className="py-16 px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoPlayer
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://dummyimage.com/600x400/000/fff&text=Video+1"
            />
            <VideoPlayer
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              poster="https://dummyimage.com/600x400/000/fff&text=Video+2"
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Upcoming Events Section */}
      <AnimatedSection>
        <section className="py-16 px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection>
        <section id="subscribe" className="py-16 px-4 md:px-8 bg-blue-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest event updates and trading insights.</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
