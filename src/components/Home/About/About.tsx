"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Star} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnhancedAboutSection() {
  const { scrollYProgress } = useViewportScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const books = [
    {
      title: "Stock Market Mastery",
      coverImage: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_1.jpg",
      rating: 5,
      reviews: 128,
      description: "A comprehensive guide to understanding and navigating the stock market.",
      tags: ["Investing", "Finance"]
    },
    {
      title: "Technical Analysis Simplified",
      coverImage: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_2.jpg",
      rating: 5,
      reviews: 95,
      description: "Learn the art of reading charts and predicting market trends.",
      tags: ["Trading", "Analysis"]
    },
    {
      title: "Wealth Management Strategies",
      coverImage: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_3.jpg",
      rating: 4,
      reviews: 76,
      description: "Expert advice on managing and growing your wealth effectively.",
      tags: ["Finance", "Planning"]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="relative py-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/abstract-finance-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-green-900/90 z-10" />
      <div className="container relative mx-auto px-4 z-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold text-white sm:text-5xl  leading-tight xl:leading-tight">
              About Dr.&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
                Rakesh Bansal
              </span>
            </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="/hero/banner-img3.webp"
                alt="Dr. Rakesh Bansal"
                width={400}
                height={350}
                className="w-full h-auto overflow-hidden transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </motion.div>
            <div>
              <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                Dr. Rakesh Bansal, a post-graduate in International Business Management, has been a prominent figure in the stock market since 1998. With over two decades of extensive experience, he specializes in technical analysis, wealth management, investment analysis, and portfolio management.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                As the founder of Rakesh Bansal Ventures, he is a SEBI-registered Research Analyst (INH100008984), offering high-quality market insights and educational resources to traders and investors across the country.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="inline-block">
                  <Button variant="gradient" size="custom">
                    Read More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          <h3 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-green-300 bg-clip-text text-transparent">
            Published Books
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {books.map((book, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="bg-gradient-to-br from-purple-900 to-green-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-64">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    className="transition-transform duration-300 hover:scale-105 object-cover object-[top,center]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                    {book.title}
                  </h4>
                  <p className="text-gray-300 mb-4">{book.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(book.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-400">({book.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag, i) => (
                      <span key={i} className="bg-gradient-to-r from-purple-600 to-green-600 text-white px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}