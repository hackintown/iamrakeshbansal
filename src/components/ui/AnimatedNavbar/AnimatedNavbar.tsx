"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import { NAVBAR_CONSTANT, NavGroup, NavItem } from "../Navbar/constant";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AnimatedNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 mx-auto z-50 w-full bg-white",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              width={140}
              height={140}
              alt="Logo"
              className="w-auto h-auto max-w-[120px] lg:max-w-[130px]"
            />
          </Link>
          <Menu setActive={setActive}>
            {NAVBAR_CONSTANT.map((group: NavGroup) => (
              <MenuItem
                key={group.title}
                setActive={setActive}
                active={active}
                item={group.title}
              >
                <div className="flex flex-col space-y-4 text-sm">
                  {group.items.map((item: NavItem) => (
                    <HoveredLink key={item.id} href={item.href}>
                      {item.name}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAVBAR_CONSTANT.map((group: NavGroup) => (
                <div key={group.title} className="py-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-3">
                    {group.title}
                  </h3>
                  {group.items.map((item: NavItem) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
