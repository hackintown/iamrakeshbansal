"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../navigation.menu";
import { ChevronDownIcon, XIcon } from "lucide-react";

const servicesData = [
  { title: "Intraday/BTST Plan", href: "/services/intraday-btst" },
  { title: "Options Plan", href: "/services/options" },
  { title: "Futures Plan", href: "/services/futures" },
  { title: "Mentorship Plan", href: "/services/mentorship" },
  { title: "Commodity Plan", href: "/services/commodity" },
  { title: "HNI", href: "/services/hni" },
];

const coursesData = [
  { title: "Kurukshetra- win the battle", href: "/courses/kurukshetra" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // For tracking active submenus

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Close the menu if already open
    } else {
      setActiveMenu(menu); // Open the selected menu
    }
  };
  const handleCloseSidebar = () => {
    setIsOpen(false); // Close sidebar when a link is clicked
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // adjust the breakpoint to your needs
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="bg-white py-2 border-b-gray-200 shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            width={140}
            height={140}
            alt="Logo"
            className="w-auto h-auto max-w-[120px] lg:max-w-[160px] xl:max-w-[180px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <NavigationMenu style={{ zIndex: 1000 }}>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <Link href="/" passHref legacyBehavior>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base text-primary"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-primary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-row">
                  <ul className="grid max-w-[300px] w-full gap-2 p-4  bg-gradient-to-b from-[#852B83] to-[#FFFFFF] items-center justify-center">
                    {servicesData.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Courses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-primary">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid max-w-[300px] w-full gap-2 p-4  bg-gradient-to-b from-[#852B83] to-[#FFFFFF] items-center justify-center">
                    {coursesData.map((course) => (
                      <ListItem
                        key={course.title}
                        title={course.title}
                        href={course.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Blogs */}
              <NavigationMenuItem>
                <Link href="/blogs" passHref legacyBehavior>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base text-primary"
                    )}
                  >
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <Link href="/about-us" passHref legacyBehavior>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base text-primary"
                    )}
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link href="/contact-us" passHref>
            <Button>Enroll Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-accent focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="fixed inset-0 bg-white z-50 flex flex-col px-6 py-6 overflow-y-auto"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-accent">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <XIcon className="w-7 h-7 text-green-600" />
              </button>
            </div>

            {/* Home */}
            <Link
              href="/home"
              onClick={handleCloseSidebar}
              className="block py-4 text-base font-medium text-primary hover:text-accent transition-all"
            >
              Home
            </Link>

            {/* Services Menu */}
            <div className="">
              <button
                className="w-full flex items-center justify-between text-left text-base font-medium text-primary py-4 hover:text-accent transition-all"
                onClick={() => toggleMenu("services")}
              >
                <span>Services</span>
                <motion.div
                  animate={{
                    rotate: activeMenu === "services" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </button>
              {activeMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                  className="grid w-full gap-2 p-4 rounded-2xl  bg-gradient-to-b from-[#852B83] to-[#FFFFFF]"
                >
                  <Link
                    href="/intraday-btst-plan"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    Intraday/BTST Plan
                  </Link>
                  <Link
                    href="/options-plan"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    Options Plan
                  </Link>
                  <Link
                    href="/futures-plan"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    Futures Plan
                  </Link>
                  <Link
                    href="/mentorship-plan"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    Mentorship Plan
                  </Link>
                  <Link
                    href="/commodity-plan"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    Commodity Plan
                  </Link>
                  <Link
                    href="/hni-plan"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    HNI Plan
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Courses Menu */}
            <div className="">
              <button
                className="w-full flex items-center justify-between text-left text-base font-medium text-primary py-4 hover:text-accent transition-all"
                onClick={() => toggleMenu("courses")}
              >
                <span>Courses</span>
                <motion.div
                  animate={{
                    rotate: activeMenu === "courses" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </button>
              {activeMenu === "courses" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                  className="grid w-full gap-2 p-4 rounded-2xl  bg-gradient-to-b from-[#852B83] to-[#FFFFFF]"
                >
                  <Link
                    href="/kurukshetra"
                    onClick={handleCloseSidebar}
                    className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                  >
                    Kurukshetra - Win the Battle
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Static Links */}
            <Link
              href="/blogs"
              onClick={handleCloseSidebar}
              className="block py-4 text-base font-medium text-primary hover:text-accent transition-all"
            >
              Blogs
            </Link>
            <Link
              href="/about-us"
              onClick={handleCloseSidebar}
              className="block py-4 text-base font-medium text-primary hover:text-accent transition-all"
            >
              About Us
            </Link>

            {/* Mobile Button */}
            <div className="mt-3">
              <Link href="/contact-us" passHref>
                <Button>Enroll Now</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 text-nowrap shadow-md bg-[#D9D9D9] rounded-xl text-center p-3 leading-none no-underline outline-none transition-colors  hover:text-primary",
              className
            )}
            {...props}
          >
            <div className="text-primary font-normal leading-none">{title}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
