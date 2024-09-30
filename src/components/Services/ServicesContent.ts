import {
  Clock,
  // TrendingUp,
  BarChart2,
  PieChart,
  DollarSign,
  BookOpen,
  Users,
} from "lucide-react";

export type ServiceKey =
  | "Intraday/BTST"
  | "Index & Option"
  | "Option & Intraday"
  | "Mentorship"
  | "Futures"
  | "Commodity"
  | "HNI";

export const services = [
  { name: "Intraday/BTST" as ServiceKey, icon: Clock, color: "bg-purple-500" },
  { name: "Options" as ServiceKey, icon: PieChart, color: "bg-yellow-500" },
  {
    name: "Options/Intraday" as ServiceKey,
    icon: PieChart,
    color: "bg-yellow-500",
  },
  { name: "Futures" as ServiceKey, icon: BarChart2, color: "bg-green-500" },
  { name: "Mentorship" as ServiceKey, icon: BookOpen, color: "bg-blue-500" },
  { name: "Commodity" as ServiceKey, icon: DollarSign, color: "bg-red-500" },
  { name: "HNI" as ServiceKey, icon: Users, color: "bg-indigo-500" },
];

type ServicePlan = {
  duration: "Monthly" | "Quarterly" | "Yearly";
  price: string;
};
type WhyChooseUs = {
  title: string;
  info: string;
};
type WhatWeOffer = {
  title: string;
  info: string;
};
type ServiceFeatures = {
  price: string;
  features: string[];
  generalFeatures?: string[];
};
type generalFeatures = string;

export const serviceContent: Record<
  ServiceKey,
  {
    title: string;
    additionalDescription: string;
    description: string;
    generalFeatures?: generalFeatures[];
    advancedFeatures?: {
      optionsService?: ServiceFeatures;
      intradayService?: ServiceFeatures;
    };
    disclaimer?: string;
    registration: string;
    whyChooseUs?: WhyChooseUs[];
    whatWeOffer?: WhatWeOffer[];
    plans?: ServicePlan[];
  }
> = {
  "Intraday/BTST": {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    generalFeatures: [],
    advancedFeatures: {
      optionsService: {
        price: "₹1,999/month",
        features: [
          "Monthly 10-15 Calls",
          "Entry Price, Exit Price, and Stop Loss provided for each trade.",
          "Capital Required: ₹55,000 to ₹1,00,000",
          "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
          "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning.",
        ],
      },
      intradayService: {
        price: "₹999/month",
        features: [
          "Monthly 15-20 Calls",
          "Entry Price, Exit Price, Stop Loss, and First Target for each signal.",
          "Capital Required: ₹20,000 to ₹50,000.",
          "Focuses on top Nifty 50 companies for effective short-term trading.",
        ],
      },
    },
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },

  "Index & Option": {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    keyFeatures: [
      "Monthly 10-15 Calls",
      "Entry Price, Exit Price, and Stop Loss provided for each trade.",
      "Capital Required: ₹55,000 to ₹1,00,000",
      "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },

  "Option & Intraday": {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    keyFeatures: [
      "Monthly 10-15 Calls",
      "Entry Price, Exit Price, and Stop Loss provided for each trade.",
      "Capital Required: ₹55,000 to ₹1,00,000",
      "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },

  Mentorship: {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    keyFeatures: [
      "Monthly 10-15 Calls",
      "Entry Price, Exit Price, and Stop Loss provided for each trade.",
      "Capital Required: ₹55,000 to ₹1,00,000",
      "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },

  Futures: {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    keyFeatures: [
      "Monthly 10-15 Calls",
      "Entry Price, Exit Price, and Stop Loss provided for each trade.",
      "Capital Required: ₹55,000 to ₹1,00,000",
      "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },

  Commodity: {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    keyFeatures: [
      "Monthly 10-15 Calls",
      "Entry Price, Exit Price, and Stop Loss provided for each trade.",
      "Capital Required: ₹55,000 to ₹1,00,000",
      "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },
  HNI: {
    title: "Master the Art of Options & Intraday/BTST Service",
    description:
      "Seize profitable market opportunities with our combined trading package, designed to help you excel in both options buying and intraday/BTST strategies. Whether you're aiming for short-term gains or a disciplined options approach, our expert-backed recommendations and real-time signals provide you with everything you need to trade confidently and strategically.",
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    whatWeOffer: [
      {
        title: "Options Buying (Nifty 50 Focus):",
        info: "We offer precise entry, exit, and stop-loss levels for Nifty 50 companies, ensuring optimal liquidity and reduced impact costs. Our trading ideas are powered by a mix of human expertise and AI technology, focusing solely on options buying for simplified and effective strategies.",
      },
      {
        title: "Intraday/BTST Signals:",
        info: " Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    keyFeatures: [
      "Monthly 10-15 Calls",
      "Entry Price, Exit Price, and Stop Loss provided for each trade.",
      "Capital Required: ₹55,000 to ₹1,00,000",
      "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading.",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Led by industry experts like Dr. Rakesh Bansal, our trading signals blend years of market experience with advanced algorithms, offering actionable insights you can trust.",
      },
      {
        title: "Simplified & Effective Strategies:",
        info: "We believe in keeping things simple, focusing solely on options buying and straightforward intraday trading strategies. This clarity helps you execute trades without unnecessary complexity.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "Avoid over-trading and manage risk effectively with our well-defined entry, exit, and stop-loss levels for each trade.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 20,000/-" },
    ],
  },
};
