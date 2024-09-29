"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Check,
} from "lucide-react";
import { serviceContent, ServiceKey } from "./ServicesContent";
import Image from "next/image";

const fullDisclaimer = `
DISCLAIMER: Trading in the stock market involves substantial risk and is not suitable for all investors. The information provided on this website is for educational purposes only and should not be considered as financial advice. Past performance is not indicative of future results. Always conduct your own research and consult with a licensed financial advisor before making any investment decisions.

By using this website and our services, you acknowledge that:

1. All investments carry risk, and you may lose all or part of your investment.
2. The content provided is for informational purposes only and does not constitute personalized investment advice.
3. We are not responsible for any losses incurred as a result of trading based on the information provided.
4. You are solely responsible for your investment decisions and the consequences thereof.
5. You should always verify the accuracy of the information provided and seek professional advice when necessary.

Please read all relevant documents, terms, and conditions carefully before investing. By proceeding, you agree to these terms and conditions.
`;

interface ServiceProps {
  param: string;
}
const urlToServiceKeyMap: Record<string, ServiceKey> = {
  "intraday-btst-plan": "Intraday/BTST",
  "options-plan": "Options",
  "option-intraday": "Options/Intraday",
  "future-trading": "Futures",
  "mentorship-plan": "Mentorship",
  "option-trading": "Options",
  "commodity-trading": "Commodity",
  "portfolio-management": "HNI",
};

export default function Services({ param }: ServiceProps) {
  const [selectedService, setSelectedService] =
    useState<ServiceKey>("Intraday/BTST");
  const [content, setContent] = useState(serviceContent["Intraday/BTST"]);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false);
  const [hasReadDisclaimer, setHasReadDisclaimer] = useState(false);

  useEffect(() => {
    const serviceKey = urlToServiceKeyMap[param];
    if (serviceKey && serviceKey in serviceContent) {
      setSelectedService(serviceKey);
      setContent(serviceContent[serviceKey]);
    }
  }, [param]);

  const handlePayNow = () => {
    if (!disclaimerAgreed) {
      setShowDisclaimer(true);
    } else {
      // Proceed with payment logic
      alert("Proceeding to payment...");
    }
  };

  const handleDisclaimerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setHasReadDisclaimer(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      {/* Short banner with animation */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-800 to-green-600"
      >
        <h1 className="text-4xl md:text-5xl font-bold z-10">Our Services</h1>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/fyi.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.section
            key={selectedService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black rounded-lg p-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
                <p className="mb-6">{content.description}</p>
              </div>
              <div className="">
                <Image
                  src="/images/fyi.png"
                  alt="Rakesh Bansal"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {content.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center p-3 rounded-lg ${
                    index % 2 === 0 ? "bg-purple-100" : "bg-green-100"
                  }`}
                >
                  <Check className="mr-2 text-green-600" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Our Intraday Trading Subscription?
            </h3>
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Expert analysis and insights",
                "Real-time market updates",
                "Personalized trading strategies",
                "Risk management guidance",
                "Educational resources",
                "Dedicated support team",
              ].map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-100 rounded-lg"
                >
                  <Check className="mr-2 text-purple-600" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </motion.ul>

            <h3 className="text-2xl font-semibold mb-4">Pricing Plans</h3>
            <div className="flex flex-col flex-wrap md:flex-row gap-6 mb-6">
              {content.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg text-center text-white w-full h-full max-w-[250px] max-h-[250px]"
                  style={{
                    backgroundImage: `url(${getPlanBackgroundImage(
                      plan.duration
                    )})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="relative z-10 p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {plan.duration}
                    </h4>
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    <button
                      onClick={handlePayNow}
                      className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="font-semibold">Disclaimer:</p>
              <p>{content.disclaimer}</p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
              <p className="font-semibold">Registration Information:</p>
              <p>{content.registration}</p>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 Rakesh Bansal. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="hover:text-green-400 transition-colors duration-300"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="hover:text-green-400 transition-colors duration-300"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="hover:text-green-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="hover:text-green-400 transition-colors duration-300"
              >
                <Youtube size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="hover:text-green-400 transition-colors duration-300"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showDisclaimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white text-black p-8 rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <div
                className="overflow-y-auto flex-grow mb-4 pr-4"
                style={{ scrollbarWidth: "thin" }}
                onScroll={handleDisclaimerScroll}
              >
                <p className="whitespace-pre-line">{fullDisclaimer}</p>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={disclaimerAgreed}
                    onChange={(e) => setDisclaimerAgreed(e.target.checked)}
                    disabled={!hasReadDisclaimer}
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                  <span>I agree to the terms and conditions</span>
                </label>
                <button
                  onClick={() => {
                    if (disclaimerAgreed) {
                      setShowDisclaimer(false);
                      // Proceed with payment logic
                      alert("Proceeding to payment...");
                    }
                  }}
                  disabled={!disclaimerAgreed}
                  className={`px-4 py-2 rounded ${
                    disclaimerAgreed
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  } transition-colors duration-300`}
                >
                  Proceed
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getPlanBackgroundImage(duration: string): string {
  switch (duration.toLowerCase()) {
    case "monthly":
      return "/images/dream-card1.png";
    case "quarterly":
      return "/images/dream-card2.png";
    case "yearly":
      return "/images/dream-card3.png";
    default:
      return "/images/dream-card1.png";
  }
}
