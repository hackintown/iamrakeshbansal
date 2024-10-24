import {
  Clock,
  BarChart2,
  PieChart,
  DollarSign,
  BookOpen,
  TrendingUp,
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
  { name: "Intraday/BTST", icon: Clock, color: "bg-purple-500" },
  { name: "Index & Option", icon: PieChart, color: "bg-yellow-500" },
  { name: "Option & Intraday", icon: PieChart, color: "bg-yellow-500" },
  { name: "Futures", icon: BarChart2, color: "bg-green-500" },
  { name: "Mentorship", icon: BookOpen, color: "bg-blue-500" },
  { name: "Commodity", icon: DollarSign, color: "bg-red-500" },
  { name: "HNI", icon: TrendingUp, color: "bg-indigo-500" },
];

type ServicePlan = {
  duration: "Monthly" | "Quarterly" | "Yearly";
  price: string;
  buttonText?: string;
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
  price?: string;
  features: string[];
};
type KeyFeatures = string;

type AdvancedFeatures = {
  [key: string]: ServiceFeatures;
};
export const serviceContent: Record<
  ServiceKey,
  {
    buttonText?: string;
    title: string;
    additionalDescription: string;
    description: string;
    generalFeatures?: string[];
    advancedFeatures?: AdvancedFeatures;
    disclaimer?: string[];
    registration?: string;
    whyChooseUs?: WhyChooseUs[];
    whatWeOffer?: WhatWeOffer[];
    plans?: ServicePlan[];
    notes?: string;
    keyFeatures?: KeyFeatures[];
    href?: string;
    termsAndConditions?: string[];
  }
> = {
  "Intraday/BTST": {
    title: "Intraday/BTST Service",
    description:
      "Our Intraday Trading Subscription Plan offers precise and disciplined signals for single-day market movements. Trades are short-term with specific targets and are squared off the same or next day. We share only the stock name and current cash market price (CMP) to distribute the load and prevent price spikes. Based on your trading style and risk appetite, you can choose to trade in the cash segment or Futures & Options (If the stock is available in derivatives).",
    additionalDescription:
      "Please note that these signals are meant for intraday trading in equity. Using the correct mode will help distribute the load and avoid price spikes in a single PUT/CALL.",
    keyFeatures: [
      "Monthly 15-20 Calls",
      "Entry Price",
      "Exit Price",
      "Stop Loss",
      "First Target",
      "Top Nifty 50 Companies",
      "Index & Equity",
    ],
    whyChooseUs: [
      {
        title: "Real-Time Trade Signals:",
        info: "Receive real-time alerts for buying and selling stocks during the trading day. Our expert team leverages advanced algorithms and thorough market analysis to identify high-probability trading opportunities, ensuring you stay ahead of the curve.",
      },
      {
        title: "Expert-Backed Recommendations:",
        info: "Our team, led by Dr. Rakesh Bansal, uses a blend of original intelligence and years of experience to provide top-notch trading signals you can rely on.",
      },
      {
        title: "Simplified Strategies:",
        info: "We prioritize straightforward and effective intraday trading strategies, eliminating the complexity and focusing on clear, actionable advice to help you make the most of each trading session.",
      },
      {
        title: "Disciplined Trading Approach:",
        info: "By providing entry prices, exit prices, and stop-loss levels, we empower you to trade confidently and manage risks effectively.",
      },
      {
        title: "Transparency and Reports:",
        info: "Stay informed with our detailed performance reports, offering insights into our trading strategies and the rationale behind each recommendation. Track your performance and understand the mechanics of successful intraday trading.",
      },
    ],
    disclaimer: [
      "All our recommendations are backed by solid trading rationale, and we publish a monthly performance report on particular group or WhatsApp.",
    ],
    notes:
      "Join Us Today! Embark on your journey to successful intraday trading with our new subscription plan. At just ₹999 per month, this is an unbeatable opportunity to sharpen your trading skills and boost your profits.",
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      {
        duration: "Monthly",
        price: "Rs- 999/-",
      },
    ],
    href: "https://rakeshbansal.rpy.club/g/KbkzwwjCcO",
  },
  "Index & Option": {
    title: "Master the Art of Options Buying and Index",
    description:
      "Options trading presents an enticing opportunity, but to succeed, you need a sophisticated skill set. In options buying, it's not just about predicting market trends, it's about timing your trades effectively. To ensure a seamless trading experience, we exclusively recommend options trading in the top Nifty 50 companies. We provide entry prices, exit prices, and stop-loss levels, empowering you to make confident and informed trading decisions. This strategic approach minimizes impact costs and ensures ample liquidity, allowing you to execute trades smoothly and efficiently.",
    additionalDescription: "",
    keyFeatures: [
      "Monthly 8-10 Calls",
      "Entry Price",
      "Exit Price",
      "Stop Loss",
      "First Target",
      "Top Nifty 50 Companies",
      "Nifty, Bank Nifty, FINNIFTY, & MIDCPNIFTY",
    ],
    whatWeOffer: [
      {
        title: "Expert-Backed Recommendations:",
        info: "Our trading ideas are powered by a unique blend of original intelligence and AI technology.",
      },
      {
        title: "Simplified Strategies:",
        info: "We are strong advocates of keeping it simple. Our recommendations focus solely on options buying, eliminating the complexities of naked selling or intricate strategies. This straightforward approach enhances your understanding and execution.",
      },
      {
        title: "Disciplined Trading:",
        info: "We firmly believe that over-trading can erode capital. We encourage disciplined trading, helping you avoid impulsive decisions and stay focused on strategic opportunities.",
      },
      {
        title: "Transparency and Reports:",
        info: "All our recommendations are backed by detailed trading rationale, and we publish a monthly options/index performance report on our website. This allows you to track our performance and gain further insights into our strategies.",
      },
    ],
    disclaimer: [
      "All our recommendations are backed by solid trading rationale, and we publish a monthly performance report on particular group or WhatsApp.",
    ],
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 19,999/-" },
    ],
    href: "https://rakeshbansal.rpy.club/pick-package/NjXQphqSS",
  },
  "Option & Intraday": {
    title: "Option & Intraday",
    href: "https://rakeshbansal.rpy.club/pick-package/NjXQphqSS",
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
        info: "Get real-time alerts for intraday and BTST trading opportunities, ideal for capturing single-day market movements. Trades are based on current cash market prices, helping you avoid price spikes and distribute load efficiently. You can choose to trade in the cash segment or Futures & Options, depending on stock availability.",
      },
    ],
    advancedFeatures: {
      Options: {
        price: "₹1,999/month",
        features: [
          "Monthly 10-15 Calls",
          "Entry Price, Exit Price, and Stop Loss provided for each trade.",
          "Covers Nifty, Bank Nifty, FINNIFTY, and MIDCPNIFTY for strategic options trading",
        ],
      },
      Intraday: {
        price: "₹999/month",
        features: [
          "Monthly 15-20 Calls",
          "Entry Price, Exit Price, Stop Loss, and First Target for each signal",
          "Focuses on top Nifty 50 companies for effective short-term trading.",
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
    disclaimer: [
      "All our recommendations are backed by solid trading rationale, and we publish a monthly performance report on particular group or WhatsApp.",
    ],
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 1,999/-" },
      { duration: "Yearly", price: "Rs- 19,999/-" },
    ],
  },
  Futures: {
    title: "Futures Service",
    href: "https://rakeshbansal.rpy.club/jcp/Z3WkEvk1L6",
    description: `We let the performance speak for itself. You can view our historical performance under the 
      "Performance" tab on our website. Here's what you gain from our Futures Trading Strategy:`,
    additionalDescription:
      "Join us today to master options buying and intraday trading with a disciplined, straightforward, and transparent approach. This is your chance to trade with confidence and enhance your profitability.",
    keyFeatures: [
      "Monthly 8-10 Calls",
      "Entry Price",
      "Exit Price",
      "Stop Loss",
      "Performance Reports",
      "Top Nifty 50 Companies",
    ],
    whyChooseUs: [
      {
        title: "Emotion-Free Trading:",
        info: "The trend is surely your friend, but emotions can be your enemies. We've developed a system to validate our views, avoiding the urge to chase every breakout or rack up minor gains. This approach ensures that our strategies are data-driven and not influenced by impulsive reactions.",
      },
      {
        title: "Focused on Winning Trades:",
        info: "We firmly believe that you only need a few big winning ideas to be successful in futures trading. Our recommendations come with a solid trading rationale and comprehensive reports. We share every signal with BUY/SELL signals, Expiry dates, Future CMP (Current Market Price), Cash CMP, Stop Loss (SL) and Lot Size. This information empowers you to make informed trading decisions with confidence.",
      },
      {
        title: "Limited and Monitored Trading Ideas:",
        info: "Our trading ideas are carefully selected and continuously monitored to meet margin requirements. This disciplined approach ensures that you have a manageable number of trades to consider.",
      },
      {
        title: "Regular Performance Reports:",
        info: "We maintain transparency by publishing monthly performance reports on our WhatsApp Or Particular group. This helps you track our results and assess the effectiveness of our strategies over time.",
      },
    ],
    disclaimer: [
      "All our recommendations are backed by solid trading rationale, and we publish a monthly performance report on particular group or WhatsApp.",
    ],
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 5,000/-" },
      { duration: "Yearly", price: "Rs- 50,000/-" },
    ],
  },

  Mentorship: {
    title: "Mentorship Service",
    href: "https://rakeshbansal.rpy.club/jcp/cjSFgnD01I",
    description:
      "Unlock Your Trading Potential with Our Comprehensive Mentorship Program!",
    additionalDescription:
      "Are you ready to take your trading journey to the next level? Our upgraded mentorship program offers you a range of powerful tools and insights to enhance your trading skills and profitability. We're dedicated to providing you with the knowledge and support you need to succeed in the dynamic world of the stock market.",

    keyFeatures: [
      "Quarterly 10-15 Calls",
      "Entry Price",
      "Exit Price",
      "Short & Medium Term",
      "Live Market Support",
    ],
    generalFeatures: [
      "Strategic Buy Ideas for Short to Medium Term: Our program equips you with carefully researched and analyzed cash market buy ideas that span the short to medium-term horizon. Supported by robust rationale and detailed reports, we provide entry price, exit price, and stop-loss levels, empowering you to make confident and informed trading decisions.",
      "Webinar Series for In-Depth Learning: To ensure your success, we conduct webinars that cater to problem-solving, address conceptual doubts, and tackle any queries you might have. Additionally, our webinar series includes real-life examples featuring shared videos showcasing real-life trading scenarios. These examples provide you with the conceptual understanding necessary to navigate the complexities of the stock market effectively.",
      "Mentorship Performance Reports: Our mentorship program provides transparency through quarterly and yearly performance reports, which will be published on our website. This allows you to track our performance and assess the program's overall effectiveness.",
    ],
    disclaimer: [
      "All our recommendations are backed by solid trading rationale, and we publish a monthly performance report on particular group or WhatsApp.",
    ],
    registration:
      "Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors",
    plans: [
      { duration: "Monthly", price: "Rs- 3,800/-" },
      { duration: "Quarterly", price: "Rs- 9,999/-" },
      { duration: "Yearly", price: "Rs- 34,999/-" },
    ],
  },

  Commodity: {
    title: "Commodity Service",
    href: "https://rakeshbansal.rpy.club/jcp/atcYbhpxGM",
    description:
      "The MCX market offers vast potential, but it also demands discipline and a strategic approach. Our advisory provides you with the knowledge and support needed to make informed trading decisions with confidence. We offer precise entry prices, exit prices, and stop-loss levels, empowering you to trade with assurance.",
    additionalDescription:
      "Blending human intelligence with robust data-driven models, we guide you through the exciting world of MCX, focusing on gold, silver, crude oil, and other strategically chosen metals.",
    keyFeatures: [
      "Quarterly 10-15 Calls",
      "Entry Price",
      "Exit Price",
      "Stop Loss",
      "Performance Reports",
      "Short & Medium Term",
      "Silver, Zinc, Aluminium, Gold, Copper and Crude Oil",
    ],
    whyChooseUs: [
      {
        title: "Regular Updates:",
        info: "Receive timely signals and analysis to navigate the MCX market with confidence.",
      },
      {
        title: "Data-Driven Insights:",
        info: "Our quantitative models crunch the numbers, providing you with valuable trading opportunities.",
      },
      {
        title: "Strategic Risk Management:",
        info: "We prioritize calculated entries and exits, incorporating stop-loss levels to safeguard your capital.",
      },
      {
        title: "Transparency & Reports:",
        info: "Track your progress with our monthly performance reports, offering a transparent view of our trading rationale and results.",
      },
    ],
    disclaimer: [
      "All our recommendations are backed by solid trading rationale, and we publish a monthly commodities performance report on particular group or WhatsApp.",
    ],
    plans: [
      { duration: "Monthly", price: "Rs- 3,500/-" },
      { duration: "Quarterly", price: "Rs- 8,999/-" },
    ],
  },

  HNI: {
    title: "Exclusive HNI Service",
    href: "https://forms.gle/diuYQdWGtuvjmvts8",
    description:
      "Our HNI (High Net-worth Individual) subscription is designed for serious investors seeking personalized insights, exclusive stock recommendations, and expert guidance tailored to maximize potential returns. This service gives you direct access to Rakesh Bansal Ventures' expertise, ensuring that you stay ahead in the dynamic stock market.",
    additionalDescription: `
      <b>What's Included:</b><br>
        <li>Blending human intelligence with robust data-driven models</li>
        <li>Exclusive Access to Telegram Channels:
            <li>HNI Channel</li>
            <li>Future Service Channel</li>
            <li>Mentorship Channel</li>
        </li>
   
        `,
    advancedFeatures: {
      Future: {
        features: [
          "10-15 calls per month",
          "Entry, Exit, and Stop Loss prices.",
          "Regular performance reports",
          "Focus on top Nifty 50 companies",
        ],
      },
      Mentorship: {
        features: [
          "10-15 calls per Quarter",
          "Entry &  Exit",
          "Short & Medium Term",
          "Focuses on top Nifty 50 companies for effective short-term trading.",
        ],
      },
    },
    whyChooseUs: [
      {
        title: "HNI Group Exclusive Benefits:",
        info: "Access to exclusive stock information and business insights Personalized entry and exit strategies for chosen shares Personalized discussions and one-on-one consultations based on pre-booked slots",
      },
      {
        title: "One-on-One Consultations:",
        info: "Exclusive one-on-one consultations with Dr. Rakesh Bansal may be available based on slot bookings and advisor discretion.",
      },
      {
        title: "Direct Access to Rakesh Bansal Ventures’ Senior Team:",
        info: "Get the facility to connect with a senior representative of the Rakesh Bansal Ventures team for personalized insights and discussions.",
      },
    ],
    disclaimer: [
      "Investment in securities market is subject to market risks. Read all the related documents carefully before investing.",
      "We don't guarantee any kind of Profit.",
      "Stock market involves risk and trade only if you are comfortable with risk.",
      "Please don't trade/invest based on our performance sheet, as past performance is not a guarantee for future performance.",
      "Our performance sheet is for our own satisfaction & transparency. You may or may not be able to buy/sell at our recommended price.",
      "Our humble request is to trade/invest according to your individual risk appetite.",
    ],

    plans: [
      {
        duration: "Yearly",
        price: "Rs- 5 lakh + 18% GST",
        buttonText: "Register Now",
      },
    ],
    notes:
      "100% payment in advance, no refunds applicable under any circumstances.",

    termsAndConditions: [
      "The fee is annual and payment is 100% advance and under no circumstances Rakesh Bansal Ventures (hereinafter referred to as Advisor) shall be liable for any refund for amount paid by the client.",
      "In case of any cancellation/termination from Client, the amount paid by the client shall be forfeited and Advisor shall not be liable to provide any more services to the client.",
      "The Client represents that the research advisory shall solely be used for own use and not shared with anyone under any circumstances, whatsoever.",
      "The services will not include portfolio management or any related services relating to sale/purchase of Equities/other financial instruments, the services shall remain pure research advisory based.",
      "There is no commitment of any profits under the scope of this service. Client has to understand the speculative and dynamic nature of stock market.",
      "Specific requests may be made by client to have one-on-one consultation with Dr. Rakesh Bansal with respect to research advisory. Such requests may be entertained at sole discretion of the Advisor.",
    ],
  },
};
