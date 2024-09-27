"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Youtube, Instagram, TrendingUp, DollarSign, BarChart2, PieChart, Clock, Award } from 'lucide-react'

const services = [
  { name: 'BTST/STBT', icon: Clock, color: 'bg-purple-500' },
  { name: 'Intraday', icon: TrendingUp, color: 'bg-blue-500' },
  { name: 'Future Plan', icon: BarChart2, color: 'bg-green-500' },
  { name: 'Options', icon: PieChart, color: 'bg-yellow-500' },
  { name: 'Commodity', icon: DollarSign, color: 'bg-red-500' },
  { name: 'Portfolio', icon: Award, color: 'bg-indigo-500' },
]

type ServiceKey = 'BTST/STBT';
const serviceContent: Record<ServiceKey, {
  title: string;
  description: string;
  keyFeatures: string[];
  disclaimer: string;
  registration: string;
  sampleCalls: string[];
  plans: { duration: string; price: string; }[];
}> = {
  'BTST/STBT': {
    title: 'BTST/STBT',
    description: 'The idea is to enter the trade near close of the market hours around 3:15 and exit the trade after open around 9:20 in the morning, the holding period is overnight. Here the trader takes advantage of the momentum and exits at after open. It is a time based trading method',
    keyFeatures: [
      'BTST: Buy today & Sell tomorrow',
      'STBT: Sell today & Buy tomorrow',
      'Enter the trade after 2 PM before Close & exit the trade on Open within 30 minutes next day',
      '2 quality calls will be sent by SMS each day',
      'Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning',
    ],
    disclaimer: 'Investment in securities market are subject to market risks. Read all the related documents carefully before investing',
    registration: 'Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors',
    sampleCalls: [
      'BTST: SBI can climb to around 340 stop below 320',
      'STBT: Idea can slide to around 85 stop above 100',
    ],
    plans: [
      { duration: '3 Months', price: 'Rs- 20000/-' },
      { duration: '6 Months', price: 'Rs- 35000/-' },
      { duration: '12 Months', price: 'Rs- 60000/-' },
    ],
  },
  // Add content for other services here
}

const fullDisclaimer = `
DISCLAIMER: Trading in the stock market involves substantial risk and is not suitable for all investors. The information provided on this website is for educational purposes only and should not be considered as financial advice. Past performance is not indicative of future results. Always conduct your own research and consult with a licensed financial advisor before making any investment decisions.

By using this website and our services, you acknowledge that:

1. All investments carry risk, and you may lose all or part of your investment.
2. The content provided is for informational purposes only and does not constitute personalized investment advice.
3. We are not responsible for any losses incurred as a result of trading based on the information provided.
4. You are solely responsible for your investment decisions and the consequences thereof.
5. You should always verify the accuracy of the information provided and seek professional advice when necessary.

Please read all relevant documents, terms, and conditions carefully before investing. By proceeding, you agree to these terms and conditions.
`

export default function Services() {
  const [selectedService, setSelectedService] = useState('BTST/STBT')
  const [content, setContent] = useState(serviceContent['BTST/STBT'])
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false)
  const [hasReadDisclaimer, setHasReadDisclaimer] = useState(false)

  useEffect(() => {
    if (selectedService in serviceContent) {
      setContent(serviceContent[selectedService as ServiceKey]);
    }
  }, [selectedService]);
  const handlePayNow = () => {
    if (!disclaimerAgreed) {
      setShowDisclaimer(true)
    } else {
      // Proceed with payment logic
      alert('Proceeding to payment...')
    }
  }

  const handleDisclaimerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      setHasReadDisclaimer(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Trading Mentor Services</h1>
          <p className="text-xl md:text-2xl mb-8">Unlock Your Trading Potential with Rakesh Bansal</p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900 to-transparent"
        />
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
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${service.color} rounded-lg p-6 shadow-lg cursor-pointer`}
                onClick={() => setSelectedService(service.name)}
              >
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                <p className="text-sm opacity-80">Click to learn more about our {service.name} service.</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <AnimatePresence mode="wait">
          <motion.section
            key={selectedService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
            <p className="mb-6">{content.description}</p>
            
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside mb-6">
              {content.keyFeatures.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Sample Calls</h3>
            <ul className="list-disc list-inside mb-6">
              {content.sampleCalls.map((call, index) => (
                <li key={index} className="mb-2">{call}</li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Pricing Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {content.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-100 p-6 rounded-lg text-center"
                >
                  <h4 className="text-xl font-semibold mb-2">{plan.duration}</h4>
                  <p className="text-2xl font-bold mb-4">{plan.price}</p>
                  <button
                    onClick={handlePayNow}
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    Subscribe Now
                  </button>
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

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            Profit from the Industry Expert and Transform your life Today
          </h2>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Register for the Free Webinar
          </motion.a>
          <p className="mt-4 text-xl">'Trading is only about Making Money…Nothing else'</p>
        </motion.section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2020 Rakesh Bansal. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-green-400 transition-colors duration-300">
                <Facebook size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-green-400 transition-colors duration-300">
                <Twitter size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-green-400 transition-colors duration-300">
                <Linkedin size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-green-400 transition-colors duration-300">
                <Youtube size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-green-400 transition-colors duration-300">
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
                style={{ scrollbarWidth: 'thin' }}
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
                      setShowDisclaimer(false)
                      // Proceed with payment logic
                      alert('Proceeding to payment...')
                    }
                  }}
                  disabled={!disclaimerAgreed}
                  className={`px-4 py-2 rounded ${
                    disclaimerAgreed
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 
                      'bg-gray-300 text-gray-500 cursor-not-allowed'
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
  )
}