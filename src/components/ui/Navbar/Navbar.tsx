"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
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
import { ChevronDownIcon } from "lucide-react";
import { NAVBAR_CONSTANT } from "./constant";

const servicesData =
  NAVBAR_CONSTANT.find((group) => group.title === "Services")?.items || [];

const coursesData =
  NAVBAR_CONSTANT.find((group) => group.title === "Courses")?.items || [];

const aboutusData =
  NAVBAR_CONSTANT.find((group) => group.title === "About Us")?.items || [];

const disclaimerData =
  NAVBAR_CONSTANT.find((group) => group.title === "Disclaimer")?.items || [];

interface AnimatedHamburgerButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({
  active,
  setActive,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative w-[60px] h-[55px] rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-9 bg-primary"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-primary"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-3 bg-primary"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white py-2 border-b-gray-200 shadow-md relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            width={140}
            height={140}
            alt="Logo"
            className="w-auto h-auto max-w-[120px] lg:max-w-[130px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <NavigationMenu>
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
                  Advisory Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-row">
                  <ul className="grid max-w-[300px] w-full gap-2 p-4 bg-background items-center justify-center">
                    {servicesData.map((service) => (
                      <ListItem
                        key={service.id}
                        title={service.name}
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
                  <ul className="grid max-w-[300px] w-full gap-2 p-4 bg-background items-center justify-center">
                    {coursesData.map((course) => (
                      <ListItem
                        key={course.id}
                        title={course.name}
                        href={course.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Blogs */}
              {/* <NavigationMenuItem>
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
              </NavigationMenuItem> */}
              {/* About Us */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-primary">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid max-w-[300px] w-full gap-2 p-4 bg-background items-center justify-center">
                    {aboutusData.map((about) => (
                      <ListItem
                        key={about.id}
                        title={about.name}
                        href={about.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Contact Us */}
              <NavigationMenuItem>
                <Link href="/contact-us" passHref legacyBehavior>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base text-primary"
                    )}
                  >
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Disclaimer */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-primary">
                  Disclaimer
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid max-w-[300px] w-full gap-2 p-4 bg-background items-center justify-center">
                    {disclaimerData.map((disclaimer) => (
                      <ListItem
                        key={disclaimer.id}
                        title={disclaimer.name}
                        href={disclaimer.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <AnimatedHamburgerButton active={isOpen} setActive={setIsOpen} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            className="absolute top-full inset-0 min-h-screen bg-white z-50 flex flex-col px-6 py-6 overflow-y-auto"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Home */}
            <Link
              href="/"
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
                  className="grid w-full gap-2 p-4 rounded-2xl"
                >
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={handleCloseSidebar}
                      className="block shadow-md px-3 py-2 rounded-xl bg-[#D9D9D9] transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
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
                  className="grid w-full gap-2 p-4 rounded-2xl"
                >
                  {coursesData.map((course) => (
                    <Link
                      key={course.id}
                      href={course.href}
                      onClick={handleCloseSidebar}
                      className="block shadow-md px-3 py-2 rounded-xl transition-all"
                    >
                      {course.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Static Links */}
            {/* <Link
              href="/blogs"
              onClick={handleCloseSidebar}
              className="block py-4 text-base font-medium text-primary hover:text-accent transition-all"
            >
              Blogs
            </Link> */}
            <Link
              href="/about-us"
              onClick={handleCloseSidebar}
              className="block py-4 text-base font-medium text-primary hover:text-accent transition-all"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              onClick={handleCloseSidebar}
              className="block py-4 text-base font-medium text-primary hover:text-accent transition-all"
            >
              Contact Us
            </Link>

            {/* Disclaimer */}
            <div className="">
              <button
                className="w-full flex items-center justify-between text-left text-base font-medium text-primary py-4 hover:text-accent transition-all"
                onClick={() => toggleMenu("disclaimer")}
              >
                <span>Disclaimer</span>
                <motion.div
                  animate={{
                    rotate: activeMenu === "" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </button>
              {activeMenu === "disclaimer" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                  className="grid w-full gap-2 p-4 rounded-2xl"
                >
                  {disclaimerData.map((disclaimer) => (
                    <Link
                      key={disclaimer.id}
                      href={disclaimer.href}
                      onClick={handleCloseSidebar}
                      className="block shadow-md px-3 py-2 rounded-xl transition-all"
                    >
                      {disclaimer.name}
                    </Link>
                  ))}
                </motion.div>
              )}
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
              "block select-none space-y-1 text-nowrap shadow-sm rounded-xl hover:shadow-md text-center p-3 leading-none no-underline outline-none transition-colors hover:text-primary",
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
