import { Button } from "@/components/ui/button";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

// Define only the required props for CardHeader and CardFooter components
interface CardHeaderProps {
  title: string;
  price: string;
  description: string;
  popular?: boolean;
}

interface CardFooterProps {
  buttonText: string;
}

interface Feature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  popular?: boolean;
}

// Adjust the prop types for the CardHeader and CardFooter components
const CardHeader = ({
  title,
  price,
  description,
  popular,
}: CardHeaderProps) => (
  <div className="p-6 relative">
    <div className="flex items-center justify-between">
      <h2 className="text-base font-semibold text-primary">{title}</h2>
      <span className="text-2xl font-bold">₹{price}</span>
    </div>

    {popular && (
      <span className="absolute top-0 right-0 rounded-tr-md bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-bl">
        Most Popular
      </span>
    )}

    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const CardFooter = ({ buttonText }: CardFooterProps) => (
  <div className="p-6 pt-0">
    <Button className="w-full">{buttonText}</Button>
  </div>
);

const FeatureList = ({ features }: { features: Feature[] }) => (
  <ul className="space-y-2 p-6">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center">
        <RiCheckboxCircleFill className="text-accent mr-2" />
        <span
          className={feature.included ? "text-foreground" : "text-gray-500"}
        >
          {feature.name}
        </span>
      </li>
    ))}
  </ul>
);

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
}: PricingPlan) => (
  <div className="rounded-lg border-2 border-[#852B83] bg-transparent w-[300px] text-primary hover:shadow-lg transition-shadow relative">
    <CardHeader
      title={title}
      price={price}
      description={description}
      popular={popular}
    />
    <FeatureList features={features} />
    <CardFooter buttonText={buttonText} />
  </div>
);

export default PricingCard;
