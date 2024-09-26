"use client";
import {
  Shield,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function WhyJoinUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Unwavering Integrity",
      description:
        "We uphold the highest standards of integrity in all our services, ensuring reliable and accurate investment advice.",
    },
    {
      icon: Lightbulb,
      title: "Absolute Transparency",
      description:
        "Our transparent processes build trust and confidence through clear and open communication about every recommendation.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Discipline",
      description:
        "We help you develop a disciplined investment strategy, focusing on long-term goals to maximize consistent returns.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Embark on a journey of growth with our educational resources and expert guidance to enhance your investment skills.",
    },
  ];

  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-green-900">
        <svg
          className="absolute bottom-0 left-0 w-full h-64"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="why-us-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#why-us-grad)"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="why-us-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.2)" />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#why-us-pattern)"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            Why Join Us?
          </span>
        </h2>

        {/* SEBI Registration Highlight */}
        <div className="bg-black/50 backdrop-blur-lg rounded-lg p-6 mb-12 transform transition duration-500 hover:scale-105 border border-purple-500/30">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-400 mr-2" />
            <h3 className="text-2xl font-semibold text-center">
              SEBI Registered
            </h3>
          </div>
          <p className="text-xl text-center text-green-300 font-semibold mb-2">
            SEBI Research Analyst No: INH100008984
          </p>
          <p className="text-gray-300 text-center">
            Rakesh Bansal Ventures is proudly registered under SEBI (Research
            Analyst) Regulations, 2014, ensuring compliance with the highest
            regulatory standards in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-purple-900/50 border border-green-500/30"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full mb-6 mx-auto">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6">
            At Rakesh Bansal Ventures, we believe in a simple yet powerful
            approach to achieving success in the stock market. Join us and
            experience the difference with our SEBI-registered expertise.
          </p>
          <Link href="/">
            <Button variant="gradient" size="custom">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
