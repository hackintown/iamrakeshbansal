"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdAccessTime, MdSend } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-green-900 text-white">
      {/* Hero Section with Animated Graphics */}
      <motion.div
        className="relative h-64 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "200% 200%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(16, 185, 129, 0.3))",
          }}
        />
        <motion.div
          className="text-center z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Want to get in touch?
          </h1>
          <h2 className="text-2xl md:text-3xl">Contact us</h2>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Information Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MdPhone className="text-green-400 mr-3 text-xl" />
                  <div>
                    <p>Payment & Joining related:</p>
                    <p className="font-semibold">(+91) - 95608 - 84223</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdPhone className="text-green-400 mr-3 text-xl" />
                  <div>
                    <p>Enquiries:</p>
                    <p className="font-semibold">(+91) - 88514 - 75191</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-green-400 mr-3 text-xl" />
                  <span>wecare@iamrakeshbansal.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Hours of Operation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Monday: 11 am to 6 pm",
                  "Tuesday: 11 am to 6 pm",
                  "Wednesday: 11 am to 6 pm",
                  "Thursday: 11 am to 6 pm",
                  "Friday: 11 am to 6 pm",
                  "Saturday: 10 am to 6 pm",
                ].map((day, index) => (
                  <div key={index} className="flex items-center">
                    <MdAccessTime className="text-green-400 mr-2" />
                    <span>{day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
              <div className="flex justify-center space-x-4">
                {[
                  { Icon: FaFacebookF, color: "bg-blue-600" },
                  { Icon: FaTwitter, color: "bg-sky-500" },
                  { Icon: FaInstagram, color: "bg-pink-600" },
                  { Icon: FaLinkedinIn, color: "bg-blue-700" },
                ].map(({ Icon, color }, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`${color} p-3 rounded-full text-white`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdSend className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
