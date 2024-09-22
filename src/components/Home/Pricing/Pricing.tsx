import React from "react";
import PricingCard from "./PricingCard";
import Image from "next/image";

const pricingData = [
  {
    title: "Index Option Service",
    price: "1599",
    description: "Plan Start at",
    features: [
      { name: "Basic Trading Tools", included: true },
      { name: "Market Analysis", included: true },
      { name: "Limited Trades per Month", included: true },
      { name: "Basic Security", included: true },
      { name: "Email Support", included: true },
      { name: "Limited Trades per Month", included: true },
      { name: "Basic Security", included: true },
      { name: "Email Support", included: true },
    ],
    buttonText: "Subscribe Now",
  },
  {
    title: "Equality Services",
    price: "1999",
    description: "Plan Start at",
    features: [
      { name: "Basic Trading Tools", included: true },
      { name: "Market Analysis", included: true },
      { name: "Limited Trades per Month", included: true },
      { name: "Basic Security", included: true },
      { name: "Email Support", included: true },
      { name: "Limited Trades per Month", included: true },
      { name: "Basic Security", included: true },
      { name: "Email Support", included: true },
    ],
    buttonText: "Subscribe Now",
    popular: true,
  },
  {
    title: "Stock Option Services",
    price: "3999",
    description: "Plan Start at",
    features: [
      { name: "Basic Trading Tools", included: true },
      { name: "Market Analysis", included: true },
      { name: "Limited Trades per Month", included: true },
      { name: "Basic Security", included: true },
      { name: "Email Support", included: true },
      { name: "Limited Trades per Month", included: true },
      { name: "Basic Security", included: true },
      { name: "Email Support", included: true },
    ],
    buttonText: "Subscribe Now",
  },
];

export default function Pricing() {
  return (
    <div className="relative z-10 py-8 sm:py-16 md:py-20 bg-background">
      {/* Background Image */}
      <Image
        src="/images/pricing.webp"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover object-[top,center]"
        priority
      />
      <div className="relative container">
        <div className="text-center  md:order-2">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
           uppercase font-bold text-purple-100 relative leading-tight lg:leading-none opacity-50"
          >
            Our Services
            <span className="absolute inset-0 text-opacity-10 text-green-200">
              Choose Our Services
            </span>
          </h2>
          <h5 className="text-accent text-xs sm:text-sm mb-1.5 font-semibold -mt-5 relative uppercase">
            Choose Our Services
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 mb-10">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent font-bold text-center">
            Choose Our Services
          </h1>
          <p className="font-light text-xs lg:text-sm max-w-3xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
            sapien vel malesuada auctor. Curabitur venenatis ex ac semper
            posuere. Integer consequat consequat sapien. Pellentesque sed dolor
            ut ex auctor efficitur.
          </p>
        </div>
        <div className=" flex flex-wrap justify-center gap-8 z-10">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
