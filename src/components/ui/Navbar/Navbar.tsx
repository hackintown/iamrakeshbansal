"use client";

import { useState, useCallback, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAVBAR_CONSTANT } from "./constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const toggleSubmenu = useCallback((menu: string) => {
    setExpandedMenu((prev) => (prev === menu ? null : menu));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full bg-white text-black px-4 py-3 transition-all duration-300 z-50 top-0 ${
        isScrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="max-w-[100px] w-full block">
          <Image
            src="/images/logo.webp"
            width={150}
            height={150}
            alt="header-logo"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="hidden lg:flex space-x-6">
          <Link
            href="/"
            className="text-base font-medium text-foreground hover:text-purple-600 transition-colors duration-200"
          >
            Home
          </Link>
          {NAVBAR_CONSTANT.map((group) => (
            <div key={group.title} className="relative group">
              <button className="text-base font-medium text-foreground hover:text-purple-600 transition-colors duration-200 flex items-center gap-x-1">
                {group.title}
                <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180 size-3" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block px-4 py-2 text-sm lg:text-base text-black hover:bg-purple-100 hover:text-purple-600 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col px-8 pt-8 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
              <Link
                href="/"
                className="text-lg font-medium text-black hover:text-purple-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                HOME
              </Link>
              {NAVBAR_CONSTANT.map((group) => (
                <div key={group.title} className="w-full">
                  <button
                    onClick={() => toggleSubmenu(group.title)}
                    className="w-full flex items-center justify-between text-lg font-medium text-black hover:text-purple-600 transition-colors duration-200 py-2"
                  >
                    {group.title}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        expandedMenu === group.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedMenu === group.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="block py-2 pl-4 text-sm text-black hover:text-purple-600 transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
