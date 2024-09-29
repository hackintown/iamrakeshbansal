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
  | "Options/Intraday"
  | "Options"
  | "Futures"
  | "Mentorship"
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

type WhyChooseUs = {
  title: string;
  features: string[];
};

export const serviceContent: Record<
  ServiceKey,
  {
    title: string;
    additionalDescription: string;
    description: string;
    keyFeatures: string[];
    disclaimer: string;
    registration: string;
    whyChooseUs: WhyChooseUs;
    plans: { duration: string; price: string }[];
  }
> = {
  "Intraday/BTST": {
    title: "Intraday/BTST Plan",
    description:
      "Our Intraday Trading Subscription Plan offers precise and disciplined signals for single-day market movements. Trades are short-term with specific targets and are squared off the same or next day. We share only the stock name and current cash market price (CMP) to distribute the load and prevent price spikes. Based on your trading style and risk appetite, you can choose to trade in the cash segment or Futures & Options (If the stock is available in derivatives)",
    additionalDescription:
      "Please note that these signals are meant for intraday trading in equity. Using the correct mode will help distribute the load and avoid price spikes in a single PUT/CALL.",
    keyFeatures: [
      "BTST: Buy today & Sell tomorrow",
      "STBT: Sell today & Buy tomorrow",
      "Enter the trade after 2 PM before Close & exit the trade on Open within 30 minutes next day",
      "2 quality calls will be sent by SMS each day",
      "Please call me on 9322210907 only after you make payment and I will explain to you as to how to exit the trade the next morning",
    ],
    whyChooseUs: {
      title: "Why Choose Our Intraday Trading Subscription?",
      features: [
        "Real-Time Trade Signals: Receive real-time alerts for buying and selling stocks during the trading day.",
        "Expert-Backed Recommendations: Our team uses a blend of original intelligence and years of experience.",
        "Simplified Strategies: We prioritize straightforward and effective intraday trading strategies.",
        "Disciplined Trading Approach: We provide entry prices, exit prices, and stop-loss levels.",
        "Transparency and Reports: Stay informed with our detailed performance reports.",
      ],
    },
    disclaimer:
      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 20000/-" },
      { duration: "Quarterly", price: "Rs- 35000/-" },
      { duration: "Yearly", price: "Rs- 60000/-" },
    ],
  },
  "Options/Intraday": {
    title: "Options/Intraday",
    description:
      "Our Options Trading Plan provides strategic insights into options markets, helping you leverage the potential of options for enhanced returns and risk management.",
    additionalDescription:
      "This plan is designed for traders who understand the complexities of options and want to capitalize on market volatility.",
    keyFeatures: [
      "Daily options trading signals",
      "Strategy explanations for each trade",
      "Risk management guidelines",
      "Options Greeks analysis",
      "Weekly market outlook for options",
    ],
    whyChooseUs: {
      title: "Why Choose Our Options Trading Plan?",
      features: [
        "Expert Options Analysis: Our team provides in-depth analysis of options markets.",
        "Diverse Strategies: We cover a range of options strategies from basic to advanced.",
        "Risk Management Focus: Each trade comes with clear risk parameters.",
        "Educational Content: Regular webinars and tutorials on options trading.",
        "Responsive Support: Get your options-related queries answered promptly.",
      ],
    },
    disclaimer:
      "Options trading carries substantial risk of loss and is not suitable for all investors. Please ensure you fully understand the risks involved.",
    registration:
      "Our options trading recommendations are for educational purposes only. Always consult with a licensed financial advisor before making investment decisions.",
    plans: [
      { duration: "Monthly", price: "Rs- 15000/-" },
      { duration: "Quarterly", price: "Rs- 40000/-" },
      { duration: "Yearly", price: "Rs- 70000/-" },
    ],
  },

  Options: {
    title: "Options Plan",
    description:
      "Our Options Trading Plan provides strategic insights into options markets, helping you leverage the potential of options for enhanced returns and risk management.",
    additionalDescription:
      "This plan is designed for traders who understand the complexities of options and want to capitalize on market volatility.",
    keyFeatures: [
      "Daily options trading signals",
      "Strategy explanations for each trade",
      "Risk management guidelines",
      "Options Greeks analysis",
      "Weekly market outlook for options",
    ],
    whyChooseUs: {
      title: "Why Choose Our Options Trading Plan?",
      features: [
        "Expert Options Analysis: Our team provides in-depth analysis of options markets.",
        "Diverse Strategies: We cover a range of options strategies from basic to advanced.",
        "Risk Management Focus: Each trade comes with clear risk parameters.",
        "Educational Content: Regular webinars and tutorials on options trading.",
        "Responsive Support: Get your options-related queries answered promptly.",
      ],
    },
    disclaimer:
      "Options trading carries substantial risk of loss and is not suitable for all investors. Please ensure you fully understand the risks involved.",
    registration:
      "Our options trading recommendations are for educational purposes only. Always consult with a licensed financial advisor before making investment decisions.",
    plans: [
      { duration: "Monthly", price: "Rs- 15000/-" },
      { duration: "Quarterly", price: "Rs- 40000/-" },
      { duration: "Yearly", price: "Rs- 70000/-" },
    ],
  },
  Futures: {
    title: "Futures Plan",
    description:
      "Our Futures Trading Plan offers comprehensive analysis and timely signals for futures markets across various asset classes.",
    additionalDescription:
      "This plan is tailored for traders looking to capitalize on price movements in futures contracts with a medium to long-term perspective.",
    keyFeatures: [
      "Daily futures market analysis",
      "Entry and exit signals for futures contracts",
      "Rollover strategies",
      "Margin requirement guidelines",
      "Sector-specific futures insights",
    ],
    whyChooseUs: {
      title: "Why Choose Our Futures Trading Plan?",
      features: [
        "Comprehensive Market Coverage: We analyze futures across equity, commodity, and currency markets.",
        "Trend Analysis: Our experts identify and explain key market trends affecting futures.",
        "Risk-Reward Optimization: Each recommendation comes with clear risk-reward ratios.",
        "Regular Market Updates: Stay informed with our daily and weekly futures market reports.",
        "Educational Resources: Access to webinars and articles on futures trading strategies.",
      ],
    },
    disclaimer:
      "Futures trading involves substantial risk and is not appropriate for all investors. Ensure you understand the risks before trading.",
    registration:
      "Our futures trading recommendations are for informational purposes. Always conduct your own research and consult with a licensed financial advisor.",
    plans: [
      { duration: "Monthly", price: "Rs- 18000/-" },
      { duration: "Quarterly", price: "Rs- 45000/-" },
      { duration: "Yearly", price: "Rs- 80000/-" },
    ],
  },
  Mentorship: {
    title: "Mentorship Plan",
    description:
      "Our Mentorship Plan offers personalized guidance from experienced traders to help you develop your trading skills and strategies.",
    additionalDescription:
      "This plan is ideal for both beginners looking to start their trading journey and experienced traders aiming to refine their strategies.",
    keyFeatures: [
      "One-on-one sessions with expert traders",
      "Personalized trading plan development",
      "Live market analysis and trading sessions",
      "Performance review and improvement strategies",
      "Access to proprietary trading tools and resources",
    ],
    whyChooseUs: {
      title: "Why Choose Our Mentorship Plan?",
      features: [
        "Personalized Attention: Get individual guidance tailored to your trading goals and experience level.",
        "Hands-on Learning: Participate in live trading sessions with your mentor.",
        "Comprehensive Skill Development: Cover everything from basic concepts to advanced trading strategies.",
        "Continuous Support: Regular check-ins and progress assessments to keep you on track.",
        "Network Building: Connect with other traders and industry professionals.",
      ],
    },
    disclaimer:
      "Trading carries risk of capital loss. Our mentorship program aims to educate but does not guarantee trading success.",
    registration:
      "Enrollment in our mentorship program does not constitute financial advice. Always make independent decisions regarding your investments.",
    plans: [
      { duration: "Quarterly", price: "Rs- 50000/-" },
      { duration: "Quarterly", price: "Rs- 90000/-" },
      { duration: "Yearly", price: "Rs- 150000/-" },
    ],
  },
  Commodity: {
    title: "Commodity Plan",
    description:
      "Our Commodity Trading Plan provides expert insights and timely signals for trading in various commodity markets including metals, energy, and agricultural products.",
    additionalDescription:
      "This plan is designed for traders interested in diversifying their portfolio with commodity exposure and capitalizing on global economic trends.",
    keyFeatures: [
      "Daily commodity market analysis",
      "Entry and exit signals for major commodities",
      "Correlation analysis with other markets",
      "Seasonal trends and patterns in commodities",
      "Global events impact assessment on commodity prices",
    ],
    whyChooseUs: {
      title: "Why Choose Our Commodity Trading Plan?",
      features: [
        "Diverse Market Coverage: We provide analysis on a wide range of commodity markets.",
        "Fundamental and Technical Analysis: Our recommendations combine both fundamental economic factors and technical chart patterns.",
        "Risk Management Strategies: Learn how to use options and futures to hedge commodity risks.",
        "Global Perspective: Understand how international events affect commodity prices.",
        "Regular Market Insights: Receive daily updates and weekly comprehensive reports on commodity markets.",
      ],
    },
    disclaimer:
      "Commodity trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.",
    registration:
      "Our commodity trading recommendations are for informational purposes only. Always conduct your own due diligence before making investment decisions.",
    plans: [
      { duration: "Monthly", price: "Rs- 12000/-" },
      { duration: "Quarterly", price: "Rs- 30000/-" },
      { duration: "Yearly", price: "Rs- 55000/-" },
    ],
  },
  HNI: {
    title: "HNI Plan",
    description:
      "Our High Net Worth Individual (HNI) Plan offers exclusive, high-value trading opportunities and personalized portfolio management services for select clients.",
    additionalDescription:
      "This premium plan is tailored for sophisticated investors looking for comprehensive wealth management and high-potential investment strategies.",
    keyFeatures: [
      "Exclusive high-value trading opportunities",
      "Personalized portfolio management",
      "Access to pre-IPO placements and block deals",
      "Customized risk management strategies",
      "Priority access to market research and analyst calls",
    ],
    whyChooseUs: {
      title: "Why Choose Our HNI Plan?",
      features: [
        "Exclusive Opportunities: Access to high-value trades and investment opportunities not available to regular clients.",
        "Personalized Service: Dedicated relationship manager and direct access to senior analysts.",
        "Comprehensive Wealth Management: Holistic approach to managing and growing your wealth across various asset classes.",
        "Advanced Risk Management: Sophisticated tools and strategies to protect and grow your wealth.",
        "Networking Opportunities: Exclusive events and meetings with industry leaders and fellow HNI clients.",
      ],
    },
    disclaimer:
      "High-value investments carry significant risks. Our HNI services are designed for experienced investors who can bear substantial financial risks.",
    registration:
      "Enrollment in our HNI plan is subject to eligibility criteria. Our services do not guarantee profits and investors should be prepared for potential losses.",
    plans: [
      { duration: "Monthly", price: "Rs- 200000/-" },
      { duration: "Quarterly", price: "Rs- 350000/-" },
      { duration: "Yearly", price: "Rs- 600000/-" },
    ],
  },
};
