"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, X } from "lucide-react";
import Slider from "react-slick";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  monthlyPrice: string;
  quarterlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: Feature[];
  buttonText: string;
  popular?: boolean;
}

type PlanDuration = "monthly" | "quarterly" | "yearly";

const pricingData: PricingPlan[] = [
  {
    title: "Intraday/BTST",
    monthlyPrice: "999",
    quarterlyPrice: "4500",
    yearlyPrice: "15999",
    description: "For beginners",
    features: [
      { name: "Monthly 15-20 Calls", included: true },
      { name: "Entry Price", included: true },
      { name: "Exit Price", included: true },
      { name: "Stop Loss", included: true },
      { name: "First Target", included: true },
      { name: "Capital Required 20k to 50k", included: true },
      { name: "Top Nifty 50 Companies", included: true },
      { name: "Index & Equity", included: true },
    ],
    buttonText: "Start Trading",
  },
  {
    title: "Mentorship Service",
    monthlyPrice: "1999",
    quarterlyPrice: "5700",
    yearlyPrice: "19999",
    description: "Most popular",
    features: [
      { name: "Monthly 10-15 Calls", included: true },
      { name: "Entry Price", included: true },
      { name: "Exit Price", included: true },
      { name: "Stop Loss", included: true },
      { name: "Capital Required 100k to 500k", included: true },
      { name: "Short Medium & Long Term", included: true },
      { name: "Swing Trade", included: true },
      { name: "Live Market Support", included: true },
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    title: "Future Service",
    monthlyPrice: "3999",
    quarterlyPrice: "11400",
    yearlyPrice: "39999",
    description: "For professionals",
    features: [
      { name: "Monthly 10-15 Calls", included: true },
      { name: "Entry Price", included: true },
      { name: "Exit Price", included: true },
      { name: "Stop Loss", included: true },
      { name: "Performance Reports", included: true },
      { name: "Capital Required 500k to 10000k", included: true },
      { name: "Top Nifty 50 Companies", included: true },
    ],
    buttonText: "Contact Sales",
  },
  {
    title: "Commodity Service",
    monthlyPrice: "3999",
    quarterlyPrice: "11400",
    yearlyPrice: "39999",
    description: "For professionals",
    features: [
      { name: "Monthly 10-15 Calls", included: true },
      { name: "Entry Price", included: true },
      { name: "Exit Price", included: true },
      { name: "Stop Loss", included: true },
      { name: "Performance Reports", included: true },
      { name: "Capital Required 500k to 10000k", included: true },
      {
        name: "Silver, Zinc, Aluminium, Gold, Copper and Crude Oil",
        included: true,
      },
    ],
    buttonText: "Contact Sales",
  },
  {
    title: "Index/Option",
    monthlyPrice: "3999",
    quarterlyPrice: "11400",
    yearlyPrice: "39999",
    description: "For professionals",
    features: [
      { name: "Monthly 10-15 Calls", included: true },
      { name: "Entry Price", included: true },
      { name: "Exit Price", included: true },
      { name: "Stop Loss", included: true },
      { name: "Capital Required 55k to 100k", included: true },
      { name: "Top Nifty 50 Companies", included: true },
      { name: "Nifty, Bank Nifty, FINNIFTY, & MIDCPNIFTY", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const CardHeader = ({
  title,
  price,
  description,
  popular,
  duration,
}: {
  title: string;
  price: string;
  description: string;
  popular?: boolean;
  duration: PlanDuration;
}) => (
  <div className="p-6 relative">
    <div className="mb-2">
      <h2 className="text-xl font-sans font-semibold text-primary mb-3 text-left">
        {title}
      </h2>
      <div className="text-center">
        <span className="text-3xl font-bold text-primary">₹{price}</span>
        <span className="text-sm text-muted-foreground">/{duration}</span>
      </div>
    </div>

    {popular && (
      <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
        Most Popular
      </span>
    )}

    <p className="text-sm text-muted-foreground hidden">{description}</p>
  </div>
);

const FeatureList = ({ features }: { features: Feature[] }) => (
  <ul className="space-y-3 p-6">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center">
        {feature.included ? (
          <CheckCircle className="w-5 h-5 mr-2 text-accent" />
        ) : (
          <X className="w-5 h-5 mr-2 text-muted-foreground" />
        )}
        <span
          className={
            feature.included ? "text-primary" : "text-muted-foreground"
          }
        >
          {feature.name}
        </span>
      </li>
    ))}
  </ul>
);

const CardFooter = ({ buttonText }: { buttonText: string }) => (
  <div className="p-6 pt-0">
    <Button className="w-full" size="lg">
      {buttonText}
    </Button>
  </div>
);

const PricingCard = ({
  plan,
  duration,
}: {
  plan: PricingPlan;
  duration: PlanDuration;
}) => {
  const price = plan[`${duration}Price`];

  return (
    <motion.div
      className={`rounded-lg border-2 grid grid-cols-1 justify-between ${
        plan.popular ? "border-accent" : "border-border"
      } bg-card w-full max-w-sm text-card-foreground shadow-sm hover:shadow-lg 
      transition-shadow relative`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <CardHeader
        title={plan.title}
        price={price}
        description={plan.description}
        popular={plan.popular}
        duration={duration}
      />
      <FeatureList features={plan.features} />
      <CardFooter buttonText={plan.buttonText} />
    </motion.div>
  );
};

// Custom Switch component
const Switch = ({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: () => void;
}) => (
  <button
    className={`w-14 h-7 flex items-center rounded-full p-1 shadow-sm ${
      checked ? "bg-accent" : "bg-gray-400"
    }`}
    onClick={onCheckedChange}
  >
    <motion.div
      className="w-5 h-5 bg-white rounded-full shadow-sm"
      animate={{ x: checked ? 28 : 0 }}
    />
  </button>
);

const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="custom-slick-next absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full p-2 shadow-md"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-primary" />
  </div>
);

export default function Pricing() {
  const [duration, setDuration] = useState<PlanDuration>("monthly");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <></>,
    className: "right-side-visible-slider",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const handleDurationChange = (newDuration: PlanDuration) => {
    setDuration(newDuration);
  };

  return (
    <div className="relative z-10 py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <Image
        src="/images/pricing.webp"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover object-[top,center] opacity-90"
        priority
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#852B83] mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-xs md:text-sm text-[#323232] font-light">
            Unlock your trading potential with our flexible pricing options.
            Choose the plan that best fits your needs and start your journey to
            financial success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <span
            className={`text-lg ${
              duration === "monthly"
                ? "text-accent"
                : "text-[#323232] opacity-50"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={duration !== "monthly"}
            onCheckedChange={() =>
              handleDurationChange(
                duration === "monthly" ? "yearly" : "monthly"
              )
            }
          />
          <span
            className={`text-lg ${
              duration === "yearly"
                ? "text-accent"
                : "text-[#323232] opacity-50"
            }`}
          >
            Yearly
          </span>
          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
            Save 20%
          </span>
        </motion.div>
        <Slider {...settings}>
          {pricingData.map((plan, index) => (
            <div key={index} className="outline-none px-2 py-2">
              <PricingCard plan={plan} duration={duration} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
