"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Download, Smartphone, Wifi, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

type Particle = {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: { x: number; y: number };
};

export default function AppDownloadSlide() {
  const controls = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    controls.start("visible");

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        if (particle.x < 0 || particle.x > canvas.width)
          particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.velocity.y *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="container px-4 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10" />

      {/* Complex SVG Background */}
      <svg className="absolute inset-0 z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="px-4 py-12 lg:py-0 lg:h-[650px] flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Take control of your daily expenses
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#eee] mb-8"
          >
            Our AI helps you predict expenses based on your previous activity
            and guides you in managing your money effectively.
          </motion.p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="gradient" size="custom" showArrow className="">
              Get started for free
            </Button>
          </motion.a>
          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-sm font-medium text-purple-400 mb-4">
              Available on
            </p>
            <div className="flex items-center mt-5 space-x-5 sm:mt-0">
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
        </motion.div>
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-2/3 lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-green-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out">
              <Image
                src="/images/download-app.webp"
                alt="Trading App Mockup"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating icons */}
      {[Download, Smartphone, Wifi, Cloud, Zap].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-300 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </section>
  );
}
