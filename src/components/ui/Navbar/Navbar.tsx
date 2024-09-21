"use client";
import React, { useState } from "react";
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
import { NavigationItems } from "./constant";

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
  return (
    <nav className="bg-white py-2 border-b-gray-200 shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            width={140}
            height={140}
            alt="Logo"
            className="w-full h-auto mr-3"
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
            <Button>Free Trail</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-green-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
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
                className="w-6 h-6"
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-50 flex flex-col px-4 py-6"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="w-6 h-6 text-green-600" />
              </button>
            </div>

            {/* Services Menu */}
            <div>
              <button
                className="w-full flex items-center justify-between text-left text-foreground py-2"
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
                  className="pl-4"
                >
                  <Link
                    href="/web-development"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/agile-development"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Agile Development
                  </Link>
                  <Link
                    href="/cloud-devops"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Cloud & DevOps
                  </Link>
                  <Link
                    href="/application-development"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Application Development
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Technologies Menu */}
            <div>
              <button
                className="w-full flex items-center justify-between text-left text-foreground py-2"
                onClick={() => toggleMenu("technologies")}
              >
                <span>Technologies</span>
                <motion.div
                  animate={{
                    rotate: activeMenu === "technologies" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </button>
              {activeMenu === "technologies" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4"
                >
                  {NavigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-2"
                      onClick={handleCloseSidebar}
                    >
                      {item.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Static Links */}
            <Link
              href="/work"
              onClick={handleCloseSidebar}
              className="block py-2 text-foreground"
            >
              Work
            </Link>
            <Link
              href="/company"
              onClick={handleCloseSidebar}
              className="block py-2 text-foreground"
            >
              Company
            </Link>
            <Link
              href="/hire-developer"
              onClick={handleCloseSidebar}
              className="block py-2 text-foreground"
            >
              Hire Developer
            </Link>

            {/* Mobile Button */}
            <div className="mt-4">
              <Button>Start a Project</Button>
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
