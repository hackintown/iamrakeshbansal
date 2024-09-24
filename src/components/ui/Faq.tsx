"use client"

import { useState, useRef} from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDownIcon, TrendingUpIcon, BookOpenIcon, DollarSignIcon, UserIcon, ClockIcon, BarChartIcon, ShieldIcon, GlobeIcon, HelpCircleIcon } from 'lucide-react'

const faqs = [
  {
    question: "What trading strategies do you teach?",
    answer: "We cover a wide range of strategies including day trading, swing trading, options trading, and long-term investing. Our mentors tailor the approach based on your goals and risk tolerance.",
    icon: <TrendingUpIcon className="w-6 h-6 text-purple-500" />
  },
  {
    question: "How long does the mentorship program last?",
    answer: "Our standard program lasts for 12 weeks, but we offer flexible options ranging from 4 weeks to 6 months depending on your needs and experience level.",
    icon: <ClockIcon className="w-6 h-6 text-green-500" />
  },
  {
    question: "What's included in the mentorship package?",
    answer: "Our comprehensive package includes one-on-one sessions, live trading rooms, educational materials, market analysis, and access to our proprietary trading tools.",
    icon: <BookOpenIcon className="w-6 h-6 text-purple-500" />
  },
  {
    question: "How much capital do I need to start trading?",
    answer: "While you can start with as little as $500, we recommend having at least $5,000 to $10,000 for a more comfortable trading experience and better risk management.",
    icon: <DollarSignIcon className="w-6 h-6 text-green-500" />
  },
  {
    question: "Can I choose my own mentor?",
    answer: "Yes, you can select a mentor based on their expertise and trading style. We'll also help match you with the best fit for your goals and personality.",
    icon: <UserIcon className="w-6 h-6 text-purple-500" />
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not happy with the program, we'll refund your investment, no questions asked.",
    icon: <ShieldIcon className="w-6 h-6 text-green-500" />
  },
  {
    question: "What markets can I trade with your strategies?",
    answer: "Our strategies are applicable to various markets including stocks, forex, cryptocurrencies, and commodities. We'll help you focus on the markets that best suit your interests and goals.",
    icon: <GlobeIcon className="w-6 h-6 text-purple-500" />
  },
  {
    question: "How do I track my progress during the mentorship?",
    answer: "We provide regular performance assessments, trading journals, and analytics tools to help you track your progress and identify areas for improvement.",
    icon: <BarChartIcon className="w-6 h-6 text-green-500" />
  },
  {
    question: "Is there ongoing support after the program ends?",
    answer: "We offer alumni programs, advanced courses, and a community platform where you can continue to learn and interact with fellow traders and mentors.",
    icon: <HelpCircleIcon className="w-6 h-6 text-purple-500" />
  },
  {
    question: "How do I get started?",
    answer: "Simply book a free consultation call through our website. We'll discuss your goals, assess your current level, and recommend the best mentorship path for you.",
    icon: <TrendingUpIcon className="w-6 h-6 text-green-500" />
  }
]

interface Faq {
  question: string;
  answer: string;
  icon: JSX.Element;  
}

interface FaqProps {
  faq: Faq; 
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number | null) => void;
}

const FAQItem: React.FC<FaqProps> = ({ faq, index, isActive, setActiveIndex }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
      ref={ref}
      className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        className="w-full px-4 py-5 sm:p-6 text-left focus:outline-none"
        onClick={() => setActiveIndex(isActive ? null : index)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {faq.icon}
            <span className="ml-3 text-lg font-medium text-gray-900">{faq.question}</span>
          </div>
          <ChevronDownIcon 
            className={`w-5 h-5 text-purple-500 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''}`}
          />
        </div>
      </motion.button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-5 sm:px-6 sm:pb-6"
          >
            <p className="text-gray-700">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Component() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="bg-gradient-to-br from-purple-50 to-green-50 py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <FAQItem 
                key={index}
                faq={faq}
                index={index}
                isActive={activeIndex === index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
          <div className="space-y-4">
            {faqs.slice(5).map((faq, index) => (
              <FAQItem 
                key={index + 5}
                faq={faq}
                index={index + 5}
                isActive={activeIndex === index + 5}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}