'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { serviceContent, ServiceKey } from './ServicesContent'
import {ChevronDown, ChevronUp, X } from 'lucide-react'

const urlToServiceKeyMap: Record<string, ServiceKey> = {
  'intraday-btst-plan': 'Intraday/BTST',
  'options-plan': 'Index & Option',
  'option-intraday': 'Option & Intraday',
  'mentorship-plan': 'Mentorship',
  'future-trading': 'Futures',
  'commodity-trading': 'Commodity',
}

interface ServiceProps {
  param: string
}

const ServicesPage: React.FC<ServiceProps> = ({ param }) => {
  const [selectedService, setSelectedService] = useState<ServiceKey>('Intraday/BTST')
  const [content, setContent] = useState(serviceContent['Intraday/BTST'])
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false)
  const [hasReadDisclaimer, setHasReadDisclaimer] = useState(false)

  useEffect(() => {
    const serviceKey = urlToServiceKeyMap[param]
    if (serviceKey && serviceKey in serviceContent) {
      setSelectedService(serviceKey)
      setContent(serviceContent[serviceKey])
    }
  }, [param])

  const handlePayNow = () => {
    if (!disclaimerAgreed) {
      setShowDisclaimer(true)
    } else {
      alert('Proceeding to payment...')
    }
  }

  const handleDisclaimerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      setHasReadDisclaimer(true)
    }
  }

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false)
    setDisclaimerAgreed(false)
    setHasReadDisclaimer(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ServiceHeader title={content.title} />
      <main className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.section
            key={selectedService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-800 rounded-lg p-8 shadow-xl"
          >
            <ServiceDescription content={content} />
            {content.generalFeatures && <GeneralFeatures features={content.generalFeatures} />}
            {content.advancedFeatures && <AdvancedFeatures features={content.advancedFeatures} />}
            {content.whyChooseUs && <WhyChooseUs items={content.whyChooseUs} />}
            {content.whatWeOffer && <WhatWeOffer items={content.whatWeOffer} />}
            {content.plans && <PricingPlans plans={content.plans} onPayNow={handlePayNow} />}
            {content.disclaimer && <Disclaimer text={content.disclaimer} />}
            {content.registration && <Registration text={content.registration} />}
            {content.notes && <Notes text={content.notes} />}
          </motion.section>
        </AnimatePresence>
      </main>
      <DisclaimerModal
        show={showDisclaimer}
        onClose={handleCloseDisclaimer}
        onScroll={handleDisclaimerScroll}
        agreed={disclaimerAgreed}
        setAgreed={setDisclaimerAgreed}
        hasRead={hasReadDisclaimer}
        disclaimerText={content.disclaimer || ''}
      />
    </div>
  )
}

const ServiceHeader: React.FC<{ title: string }> = ({ title }) => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-800 to-indigo-600"
  >
    <h1 className="text-4xl md:text-5xl font-bold z-10">{title}</h1>
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
)

const ServiceDescription: React.FC<{ content: typeof serviceContent[ServiceKey] }> = ({ content }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-light"
      >
        {content.description}
      </motion.p>
      {content.additionalDescription && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 font-light"
        >
          {content.additionalDescription}
        </motion.p>
      )}
    </div>
    <div className="w-full">
      <Image
        src="/images/fyi.png"
        alt="Service Image"
        width={500}
        height={500}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  </div>
)

const CustomCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white text-gray-800 rounded-lg p-6 shadow-xl mb-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
)

const CustomAccordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const GeneralFeatures: React.FC<{ features: string[] }> = ({ features }) => (
  <CustomCard title="General Features">
    <ul className="list-disc pl-5 space-y-2">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {feature}
        </motion.li>
      ))}
    </ul>
  </CustomCard>
)

const AdvancedFeatures: React.FC<{ features: Record<string, { price: string; features: string[] }> }> = ({ features }) => (
  <CustomCard title="Advanced Features">
    {Object.entries(features).map(([key, value], index) => (
      <CustomAccordion key={index} title={`${key.charAt(0).toUpperCase() + key.slice(1)} Service`}>
        <p className="font-semibold mb-2">Price: {value.price}</p>
        <ul className="list-disc pl-5 space-y-2">
          {value.features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </CustomAccordion>
    ))}
  </CustomCard>
)

const WhyChooseUs: React.FC<{ items: { title: string; info: string }[] }> = ({ items }) => (
  <CustomCard title="Why Choose Us">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-4"
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p>{item.info}</p>
      </motion.div>
    ))}
  </CustomCard>
)

const WhatWeOffer: React.FC<{ items: { title: string; info: string }[] }> = ({ items }) => (
  <CustomCard title="What We Offer">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-4"
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p>{item.info}</p>
      </motion.div>
    ))}
  </CustomCard>
)

const PricingPlans: React.FC<{ plans: { duration: string; price: string }[]; onPayNow: () => void }> = ({ plans, onPayNow }) => (
  <CustomCard title="Pricing Plans">
    <div className="flex flex-wrap gap-6 items-center justify-center text-white">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-50 rounded-lg p-6 shadow-md w-full h-full max-w-[250px] max-h-[250px]"
          style={{
            backgroundImage: `url(${getPlanBackgroundImage(plan.duration)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-xl font-semibold mb-2">{plan.duration}</h4>
          <p className="text-3xl font-bold mb-4">{plan.price}</p>
          <button
            onClick={onPayNow}
            className="w-full bg-background border border-border text-foreground py-2 px-4 rounded transition-colors duration-300 hover:bg-opacity-80"
          >
            Subscribe Now
          </button>
        </motion.div>
      ))}
    </div>
  </CustomCard>
)

const Disclaimer: React.FC<{ text: string }> = ({ text }) => (
  <CustomCard title="Disclaimer">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-yellow-600"
    >
      {text}
    </motion.p>
  </CustomCard>
)

const Registration: React.FC<{ text: string }> = ({ text }) => (
  <CustomCard title="Registration Information">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-blue-600"
    >
      {text}
    </motion.p>
  </CustomCard>
)

const Notes: React.FC<{ text: string }> = ({ text }) => (
  <CustomCard title="Additional Notes">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-green-600"
    >
      {text}
    </motion.p>
  </CustomCard>
)

const DisclaimerModal: React.FC<{
  show: boolean
  onClose: () => void
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void
  agreed: boolean
  setAgreed: (agreed: boolean) => void
  hasRead: boolean
  disclaimerText: string
}> = ({ show, onClose, onScroll, agreed, setAgreed, hasRead, disclaimerText }) => (
  <AnimatePresence>
    {show && (
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
          className="bg-white text-gray-800 p-6 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col relative"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <div
            className="overflow-y-auto flex-grow mb-4 pr-4 text-sm font-light md:text-base"
            style={{ scrollbarWidth: "thin" }}
            onScroll={onScroll}
          >
            <p className="whitespace-pre-line">{disclaimerText}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                disabled={!hasRead}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <span>I agree to the terms and conditions</span>
            </label>
            <div className="flex space-x-4">
              <button
                onClick={onClose}
                className="py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (agreed) {
                    onClose()
                    alert('Proceeding to payment...')
                  }
                }}
                disabled={!agreed}
                className={`py-2 px-4 rounded transition-colors duration-300 ${
                  agreed
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Proceed
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

function getPlanBackgroundImage(duration: string): string {
  switch (duration.toLowerCase()) {
    case 'monthly':
      return '/images/dream-card1.png'
    case 'quarterly':
      return '/images/dream-card2.png'
    case 'yearly':
      return '/images/dream-card3.png'
    default:
      return '/images/dream-card1.png'
  }
}

export default ServicesPage