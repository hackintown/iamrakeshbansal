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
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/drrakeshbansal/",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/therakeshbansal/",
      label: "Instagram",
    },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/@RakeshBansal",
      label: "YouTube",
    },
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/IAMRAKESHBANSAL/",
      label: "Facebook",
    },
    {
      Icon: FaWhatsapp,
      href: "https://www.whatsapp.com/channel/0029…",
      label: "WhatsApp",
    },
    {
      Icon: FaTwitter,
      href: "https://x.com/iamrakeshbansal",
      label: "Twitter",
    },
  ];

  const usefulLinks = [
    { text: "Blog", href: "/blog" },
    { text: "FAQ", href: "#faq-sec" },
    { text: "About Us", href: "/about-us" },
    { text: "Services", href: "#services-sec" },
    { text: "Contact", href: "/contact-us" },
  ];
  const disclaimerLinks = [
    { text: "Disclaimer ", href: "/about-us" },
    { text: "Feedback Form", href: "#services-sec" },
    { text: "Privacy Policy", href: "/contact-us" },
    { text: "Customer Grievances", href: "/blog" },
    { text: "Terms and Conditions", href: "#faq-sec" },
  ];
  const contactInfo = [
    { Icon: MdPhone, text: "+91  88514-75191", href: "tel:+918851475191" },
    {
      Icon: MdEmail,
      text: "wecare@iamrakeshbansal.com",
      href: "mailto:wecare@iamrakeshbansal.com",
    },
    { Icon: MdLocationOn, text: "123 Main St, City, Country", href: "#" },
  ];

  return (
    <footer className="relative bg-background overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute md:hidden bottom-0 w-full h-[420px] lg:h-[250px] -mt-1 z-0"
      >
        <path
          fill="#800080"
          fill-opacity="1"
          d="M0,224L40,240C80,256,160,288,240,261.3C320,235,400,149,480,133.3C560,117,640,171,720,165.3C800,160,880,96,960,112C1040,128,1120,224,1200,229.3C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-[420px] lg:h-[250px] -mt-1 z-0 hidden md:block"
      >
        <path
          fill="#800080"
          fill-opacity="1"
          d="M0,80L80,80C160,80,320,80,480,128C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className="container relative px-4 pt-10 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-[25%,65%] lg:grid-cols-[20%,25%,25%,25%] xl:grid-cols-[20%,30%,25%,25%] gap-12 sm:gap-8 xl:gap-12 justify-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center sm:items-start"
          >
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-xs lg:text-sm mb-6 text-center sm:text-left">
              Empowering your digital journey with innovative solutions and
              unparalleled service.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 justify-between gap-x-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl font-semibold mb-3">Explore</h3>
              <ul className="space-y-1">
                {usefulLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-green-400 transition-colors text-sm xl:text-base"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl font-semibold mb-3">Disclaimer</h3>
              <ul className="space-y-1">
                {disclaimerLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-green-400 transition-colors text-sm xl:text-base"
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <motion.li
                  key={index}
                  className="flex items-center sm:text-left space-x-3 justify-center sm:justify-start"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-5 h-5 text-green-400" />
                  <Link
                    href={href}
                    className="hover:text-green-400 transition-colors text-sm xl:text-base"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="sm:ml-20 lg:ml-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">
              Download Our App
            </h3>
            <div className="flex lg:flex-col items-center justify-center sm:items-start sm:justify-start gap-4">
              {[
                {
                  src: "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png",
                  href: "https://apps.apple.com/us/app/rakesh-bansal-ventures/id6474428694?mt=8",
                  alt: "Download on App Store",
                },
                {
                  src: "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png",
                  href: "https://play.google.com/store/apps/details?id=com.rpy.rakeshplhrwc",
                  alt: "Get it on Google Play",
                },
              ].map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.href}
                  title=""
                  className="block transition-all duration-200"
                  role="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    className="w-auto rounded h-12"
                    src={icon.src}
                    alt={icon.alt}
                    width={135}
                    height={40}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 xl:mt-28 pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:gap-x-5">
            <div className="flex gap-2 md:gap-3 lg:gap-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="bg-white text-purple-900 p-2 rounded-full hover:bg-green-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-3 h-3 lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs lg:text-sm text-white">
              &copy; {new Date().getFullYear()} Rakesh Bansal Venture. All
              rights reserved.
            </p>
            <div className="flex space-x-4 text-white">
              <Link
                href="/privacy-policy"
                className="text-xs lg:text-sm hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-xs lg:text-sm hover:text-green-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-xs lg:text-sm hover:text-green-400 transition-colors"
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
