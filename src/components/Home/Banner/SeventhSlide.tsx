"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight} from "lucide-react"

export default function Component() {
  return (
    <section className="overflow-hidden">
      <div className="px-4 py-12 lg:py-0 lg:h-[650px] flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Take control of your daily expenses
          </h1>
          <p className="text-lg text-[#eee] mb-8">
            Our AI helps you predict expenses based on your previous activity and guides you in managing your money effectively.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get started for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
          <div className="mt-12">
            <p className="text-sm font-medium text-purple-900 mb-4">
              Available on
            </p>
            <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                    {[
                      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png",
                      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png",
                    ].map((src, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          className="w-auto rounded h-14 sm:h-16"
                          src={src}
                          alt={
                            index === 0
                              ? "Download on App Store"
                              : "Get it on Google Play"
                          }
                          width={135}
                          height={40}
                        />
                      </motion.a>
                    ))}
                  </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full h-[400px] lg:h-[580px]">
            <Image
              src="/hero/app-img.webp"
              alt="Expense tracking app interface"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}