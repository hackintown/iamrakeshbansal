"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  const socialIcons = [
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaYoutube, href: "#", label: "YouTube" },
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  const usefulLinks = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Blog", href: "#" },
    { text: "FAQ", href: "#" },
  ];

  const contactInfo = [
    { Icon: MdPhone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    {
      Icon: MdEmail,
      text: "info@example.com",
      href: "mailto:info@example.com",
    },
    { Icon: MdLocationOn, text: "123 Main St, City, Country", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-green-800 to-black text-white overflow-hidden">
      <svg
        className="absolute top-0 w-full h-24 -mt-1 -rotate-180"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="white"
      >
        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.3C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" />
      </svg>

      <div className="container px-4 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={180}
              height={60}
              className="mb-6"
            />
            <p className="text-sm mb-6 text-center md:text-left">
              Empowering your digital journey with innovative solutions and
              unparalleled service.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="bg-white text-purple-900 p-2 rounded-full hover:bg-green-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-green-400 transition-colors"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-5 h-5 text-green-400" />
                  <a
                    href={href}
                    className="hover:text-green-400 transition-colors"
                  >
                    {text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Download Our App</h3>
            <div className="flex flex-col gap-4">
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
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-sm hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-green-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-green-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
