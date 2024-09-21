import React from "react";
import PricingCard from "./PricingCard";

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
    ],
    buttonText: "Subscribe Now",
  },
];

export default function Pricing() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="flex flex-wrap justify-center gap-8">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
