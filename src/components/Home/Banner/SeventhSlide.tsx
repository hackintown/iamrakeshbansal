"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SeventhSlide = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
        <motion.div
          className="flex items-center justify-center w-full lg:order-2 lg:w-7/12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
            <div className="flex flex-col justify-between flex-1 h-full">
              <div>
                <h1 className="text-4xl font-bold text-secondary-foreground sm:text-6xl xl:text-7xl">
                  Take control <br />
                  on your daily expenses
                </h1>
                <p className="mt-6 text-base text-secondary-foreground sm:text-xl">
                  Our A.I helps you to predict your expenses based on your
                  previous activity and shares how you should manage your money.
                </p>
                <motion.a
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-5 text-base font-semibold text-secondary-foreground transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400"
                  role="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started for free
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>

              <div className="mt-8 border-t-2 border-border lg:mt-auto sm:mt-14">
                <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                  <p className="text-base font-semibold text-secondary-foreground">
                    App available on
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
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full overflow-hidden lg:w-5/12 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-100 opacity-40"></div>
          <div className="lg:absolute lg:bottom-0 lg:left-0">
            <Image
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
              alt="Phone mockup"
              width={600}
              height={900}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeventhSlide;
