"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Book,
  Users,
  RefreshCcw,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function CoursePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const features = [
    { icon: Book, text: "20+ HOURS OF CONTENT" },
    { icon: Users, text: "GROUP LIVE Q&A SESSIONS" },
    { icon: RefreshCcw, text: "100% REFUND POLICY" },
    { icon: GraduationCap, text: "25,117+ STUDENTS" },
  ];

  const curriculum = [
    { title: "Introduction to YouTube", duration: "2 hours" },
    { title: "Content Creation Strategies", duration: "4 hours" },
    { title: "Growing Your Audience", duration: "3 hours" },
    { title: "Monetization Techniques", duration: "3 hours" },
    { title: "Advanced YouTube Strategies", duration: "5 hours" },
  ];

  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for both beginners and intermediate content creators who want to grow their YouTube channel and start earning as creators.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "You will have lifetime access to the course content, including any future updates.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if youre not satisfied with the course.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 199,
      features: [
        "20+ hours of content",
        "Lifetime access",
        "Certificate of completion",
      ],
    },
    {
      name: "Pro",
      price: 299,
      features: [
        "Everything in Basic",
        "Group live Q&A sessions",
        "Private community access",
      ],
    },
    {
      name: "Premium",
      price: 499,
      features: [
        "Everything in Pro",
        "1-on-1 coaching session",
        "Priority support",
      ],
    },
  ];

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-purple-100 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-center space-x-6">
          {["Curriculum", "Instructor", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-purple-800 hover:text-purple-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-100 to-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-6 lg:p-12">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl lg:text-5xl font-bold mb-4 text-purple-900"
                >
                  HOW TO <span className="text-green-600">YOUTUBE</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg mb-6 text-gray-700"
                >
                  The complete guide to 100K subscribers on YouTube and start
                  earning as a creator.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-green-100 border-l-4 border-green-500 p-4 mb-6"
                >
                  <p className="text-sm text-green-800">
                    Insights from Rakesh Bansal and his team that grew the
                    channel from 7K subscribers to 4M+ subscribers in 4 years.
                  </p>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <feature.icon className="w-5 h-5 text-purple-600" />
                      <span className="text-xs font-medium text-gray-700">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <Button variant="gradient" size="custom" className="w-full">
                  ENROLL NOW
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/ozfP9JbESWM`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Course Curriculum
          </h2>
          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-50 rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <Book className="w-6 h-6 text-green-500 mr-3" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <span className="text-sm text-gray-600">{item.duration}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Know Your</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 p-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-64 mx-auto md:mx-0"
                >
                  <Image
                    src="/images/avatar.webp"
                    alt="Rakesh Bansal"
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-4xl font-bold mb-2 text-gray-900">
                  Coach, Guide & Mentor
                </h3>
                <h4 className="text-3xl font-bold mb-6 text-red-500">
                  Rakesh Bansal
                </h4>
                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    {
                      Icon: FaInstagram,
                      followers: "3.5M+",
                      platform: "Instagram",
                    },
                    {
                      Icon: FaTwitter,
                      followers: "600K+",
                      platform: "Twitter",
                    },
                    {
                      Icon: FaLinkedin,
                      followers: "2.3M+",
                      platform: "LinkedIn",
                    },
                    { Icon: FaYoutube, followers: "5M+", platform: "YouTube" },
                  ].map((social, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <social.Icon className="w-6 h-6 text-gray-600" />
                      <span className="text-lg font-bold">
                        {social.followers}
                      </span>
                      <span className="text-sm text-gray-600">followers</span>
                    </div>
                  ))}
                </div>
                <Link href="/about-us">
                  <Button variant="gradient" size="custom">
                    Learn More About Rakesh Bansal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Pricing</h2>
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-purple-50 rounded-lg p-6 text-center flex-1 ${
                  selectedPlan === index ? "ring-2 ring-purple-600" : ""
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-green-600 mb-4">
                  ${plan.price}
                </p>
                <ul className="text-left mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg transition-colors ${
                    selectedPlan === index
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-purple-200 hover:bg-purple-300 text-purple-800"
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  {selectedPlan === index ? "Selected" : "Select Plan"}
                </button>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <label
              htmlFor="price-slider"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Adjust your budget
            </label>
            <input
              type="range"
              id="price-slider"
              min="0"
              max="2"
              step="1"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">$199</span>
              <span className="text-sm text-gray-600">$299</span>
              <span className="text-sm text-gray-600">$499</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="gradient" size="custom">
              Enroll Now for ${pricingPlans[selectedPlan].price}
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection(`faq-${index}`)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {activeSection === `faq-${index}` ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  )}
                </button>
                {activeSection === `faq-${index}` && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">
            Ready to Start Your YouTube Journey?
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Join thousands of successful creators and start your path to YouTube
            stardom today!
          </p>
          <Button variant="gradient" size="custom">
            Enroll Now and Transform Your Channel
          </Button>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
