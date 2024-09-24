'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Book, Trophy, Briefcase, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rakesh Bansal</h1>
          <p className="text-xl md:text-2xl mb-8">Mentor | Author | Visionary</p>
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
            layout="fill"
            objectFit="cover"
            className="filter blur-sm"
          />
        </motion.div>
      </section>

      {/* Mentorship Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-purple-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Rakesh Bansal Mentorship
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto">
            With over two decades of experience in the industry, Rakesh Bansal has been a guiding light for
            countless aspiring professionals. His mentorship program is designed to empower individuals to reach
            their full potential and achieve their career goals.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link
              href="/mentorship"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Learn More About Mentorship
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Books Section */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-green-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Published Books
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <div key={book} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=Book ${book}`}
                  alt={`Book ${book}`}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">Book Title {book}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the book and its impact on readers.</p>
                  <Link
                    href={`/book/${book}`}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-purple-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Achievements
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: 'Industry Leader Award' },
              { icon: Book, title: 'Bestselling Author' },
              { icon: Briefcase, title: 'Top 100 Mentors' },
            ].map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <achievement.icon className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2 text-black">{achievement.title}</h3>
                <p className="text-gray-600">A brief description of the achievement and its significance.</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Career Timeline */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-green-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Career Highlights
          </motion.h2>
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>
            {[
              { year: '2022', title: 'Launched Global Mentorship Program' },
              { year: '2018', title: 'Published Third Bestselling Book' },
              { year: '2015', title: 'Awarded Industry Leader of the Year' },
              { year: '2010', title: 'Started Career Coaching Firm' },
              { year: '2005', title: 'Became Youngest CEO in the Industry' },
            ].map((event, index) => (
              <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md relative">
                  <div
                    className={`absolute top-6 ${
                      index % 2 === 0 ? '-right-3' : '-left-3'
                    } w-6 h-6 bg-purple-500 rounded-full border-4 border-white`}
                  ></div>
                  <h3 className="text-xl font-bold mb-2 text-black">{event.year}</h3>
                  <p className="text-gray-600">{event.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Profile and Social Media */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-purple-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Connect with Rakesh
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Rakesh Bansal"
              alt="Rakesh Bansal"
              width={300}
              height={300}
              className="rounded-full border-4 border-white"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Rakesh Bansal</h3>
              <p className="text-lg mb-4 max-w-md">
                Passionate about empowering the next generation of leaders. Connect with me on social media for
                daily inspiration and insights.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="bg-white text-purple-500 hover:bg-purple-100 rounded-full p-2 transition duration-300"
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
  )
}

export default AboutUs