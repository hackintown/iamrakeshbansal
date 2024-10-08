"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socialMedias = [
  { name: "Facebook", icon: Facebook, color: "#1877F2" },
  { name: "Twitter", icon: Twitter, color: "#1DA1F2" },
  { name: "Instagram", icon: Instagram, color: "#E4405F" },
  { name: "LinkedIn", icon: Linkedin, color: "#0A66C2" },
  { name: "YouTube", icon: Youtube, color: "#FF0000" },
];

export default function SocialMediaSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
      {socialMedias.map((social, index) => (
        <motion.div
          key={social.name}
          className="flex items-center justify-end mb-2 cursor-pointer overflow-hidden"
          initial={{ width: 40 }}
          animate={{
            width: hoveredIndex === index ? 140 : 40,
          }}
          transition={{ duration: 0.3 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          style={{ backgroundColor: social.color }}
        >
          <motion.div
            className="flex items-center w-full"
            animate={{
              flexDirection: hoveredIndex === index ? "row" : "row-reverse",
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 shrink-0">
              <social.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-sm font-medium mx-2 whitespace-nowrap">
              {social.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
