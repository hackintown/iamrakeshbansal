"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
} from "lucide-react";
import { serviceContent, ServiceKey } from "./ServicesContent";
import Image from "next/image";

const fullDisclaimer = `
RAKESH BANSAL VENTURES is SEBI registered Research Entity in terms of SEBI (Research Analyst) Regulations, 2014 with SEBI Research Analyst No: INH100008984. We engage in the business of providing fundamental and technical reports including charts and other technical tools to identify market pattern aiming to provide an overview of the previous trading pattern and expectation from the future market.
"Investment in securities market are subject to market risks. Read all the related documents carefully before investing."
The information and views in the reports, our website https://www.iamrakeshbansal.com / & all the services ("Research Information") we provide are believed to be reliable, but we do not represent or warrant its accuracy, completeness or reliability of the information contained in our Research Information, investors and clients are advised to independently evaluate the market conditions/ risks involved, before making any trading/investment decisions.
The report / information / opinions have been prepared by us and are subject to change without any notice. The report and information contained herein is strictly confidential and meant solely for the selected recipient and may not be altered in any way, transmitted to, copied or distributed, in part or in whole, to any other person or to the media or reproduced in any form, without prior written consent of us. The information provided in the Report is from publicly available data, which we believe and reliable. While reasonable endeavors have been made to present reliable data in the Report so far as it relates to current and historical information, we are not guarantee the accuracy or completeness of the data in the Report. Accordingly, we or our partner's / relatives of our partner's shall not be in any way responsible for any loss or damage that may arise to any person from any inadvertent error in the information contained, views and opinions expressed in this publication.
Past performance should not be taken as an indication or guarantee of future performance, and no representation or warranty, express or implied, is made regarding future performance. The price, value of and income from any of the securities or financial instruments mentioned in this report can fall as well as rise.
The Report also includes analysis and views of our research team. The Report is purely for information purposes and does not construe to be investment recommendation/advice or an offer or solicitation of an offer to buy/sell any securities. The opinions expressed in the Report are our current opinions as of the date of the Report and may be subject to change from time to time without notice. We or any persons connected with us do not accept any liability arising from the use of this document.
Investors should not solely rely on the information contained in this Report and must make investment decisions based on their own investment objectives, judgment, risk profile and financial position. The recipients of this Report may take professional advice before acting on this information.
As we/ our partners are presently engaged in various financial services business and so might have financial, business or other interests in other entities including the subject company/ies mentioned in this Report. However, we have encourages independence in preparation of research report and strives to minimize conflict in preparation of research report. We/ Our Partner's and their relatives did not receive any compensation or other benefits from the subject company/ies mentioned in the Report or from a third party in connection with preparation of the Report. Accordingly, We/ Our Partner's and their relatives do not have any material conflict of interest at the time of publication of this Report.
It is confirmed that for giving these recommendations, we have not received any compensation from the companies mentioned herein in the preceding twelve months.
We/ Our Partner's and their relatives collectively do not own 1% or more of the actual / beneficial ownership of equity securities of the subject company/ies mentioned in the report as of the last day of the month preceding the publication of the research report.
We submit that no material disciplinary action has been taken on me by any regulatory authority impacting Equity Research activities.
By accessing https://www.iamrakeshbansal.com/, you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement:
https://www.iamrakeshbansal.com/ is not responsible for any errors, omissions, representations or any links on any of our pages. https://www.iamrakeshbansal.com/ does not endorse any advertisers on our web pages. Please verify the veracity of all information on your own before undertaking any alliance. This website contains articles contributed by several individuals. The views are exclusively their own and do not necessarily represent the views of the website or its management. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. https://www.iamrakeshbansal.com/ is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site.
There are risks associated with utilizing internet and short messaging system (SMS) based information and research dissemination services. Subscribers are advised to understand that the services can fail due to failure of hardware, software, and Internet connection. While we try our best that the messages are delivered in time to the subscribers Mobile Network, the delivery of these messages to the customer's mobile phone/handset is the responsibility of the customer's Mobile Network. SMS may be delayed and/or not delivered to the customer's mobile phone/handset on certain days, owing to technical reasons and https://www.iamrakeshbansal.com/ cannot be held responsible for the same.
https://www.iamrakeshbansal.com/ hereby expressly disclaims any implied warranties imputed by the laws of any jurisdiction. We consider ourselves and intend to be subject to the jurisdiction only of the court of Delhi in India. If you don't agree with any of our disclaimers above, please do not read the material on any of our pages. This site is specifically for users in the territory of India. Although the access to users outside India is not denied, https://www.iamrakeshbansal.com/ shall have no legal liabilities whatsoever in any laws of any jurisdiction other than India. We reserve the right to make changes to our site and these disclaimers, terms, and conditions at any time.
The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from RAKESH BANSAL VENTURES. We reserve the right to terminate the accounts of subscribers/customers, who violate the proprietary rights, in addition to necessary legal action.
Please note that by surfing our website, submitting your details in our website you are authorizing RAKESH BANSAL VENTURES to contact you and send Promotional and Transactional communication even though you may be registered under National Do Not Call Registry established under the Telecom Unsolicited Commercial Communications Regulations 2007 or registered or may register under the National Customer Preference Register established under new regulation viz the Telecom Commercial Communications Customer Preference Regulations, 2010.
Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
RAKESH BANSAL VENTURES
SEBI Registered Research Analyst Registration Number: INH100008984 `;

interface ServiceProps {
  param: string;
}
const urlToServiceKeyMap: Record<string, ServiceKey> = {
  "intraday-btst-plan": "Intraday/BTST",
  "options-plan": "Index & Option",
  "option-intraday": "Option & Intraday",
  "mentorship-plan": "Mentorship",
  "future-trading": "Futures",
  "commodity-trading": "Commodity",
  "portfolio-management": "HNI",
};

export default function Services({ param }: ServiceProps) {
  const [selectedService, setSelectedService] =
    useState<ServiceKey>("Intraday/BTST");
  const [content, setContent] = useState(serviceContent["Intraday/BTST"]);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false);
  const [hasReadDisclaimer, setHasReadDisclaimer] = useState(false);

  useEffect(() => {
    const serviceKey = urlToServiceKeyMap[param];
    if (serviceKey && serviceKey in serviceContent) {
      setSelectedService(serviceKey);
      setContent(serviceContent[serviceKey]);
    }
  }, [param]);

  const handlePayNow = () => {
    if (!disclaimerAgreed) {
      setShowDisclaimer(true);
    } else {
      // Proceed with payment logic
      alert("Proceeding to payment...");
    }
  };

  const handleDisclaimerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setHasReadDisclaimer(true);
    }
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
    setDisclaimerAgreed(false);
    setHasReadDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      {/* Short banner with animation */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-800 to-green-600"
      >
        <h1 className="text-4xl md:text-5xl font-bold z-10">Our Services</h1>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/fyi.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.section
            key={selectedService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black rounded-lg p-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
                <p className="mb-6">{content.description}</p>
              </div>
              <div className="">
                <Image
                  src="/images/fyi.png"
                  alt="Rakesh Bansal"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {content.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center p-3 rounded-lg ${
                    index % 2 === 0 ? "bg-purple-100" : "bg-green-100"
                  }`}
                >
                  <Check className="mr-2 text-green-600" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Our Intraday Trading Subscription?
            </h3>
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Expert analysis and insights",
                "Real-time market updates",
                "Personalized trading strategies",
                "Risk management guidance",
                "Educational resources",
                "Dedicated support team",
              ].map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-100 rounded-lg"
                >
                  <Check className="mr-2 text-purple-600" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </motion.ul>

            <h3 className="text-2xl font-semibold mb-4">Pricing Plans</h3>
            <div className="flex flex-col flex-wrap md:flex-row gap-6 mb-6">
              {content.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg text-center text-white w-full h-full max-w-[250px] max-h-[250px]"
                  style={{
                    backgroundImage: `url(${getPlanBackgroundImage(
                      plan.duration
                    )})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="relative z-10 p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {plan.duration}
                    </h4>
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    <button
                      onClick={handlePayNow}
                      className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="font-semibold">Disclaimer:</p>
              <p>{content.disclaimer}</p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
              <p className="font-semibold">Registration Information:</p>
              <p>{content.registration}</p>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showDisclaimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white text-black p-6 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col relative"
            >
              <button
                onClick={handleCloseDisclaimer}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <div
                className="overflow-y-auto flex-grow mb-4 pr-4 text-sm md:text-base"
                style={{ scrollbarWidth: "thin" }}
                onScroll={handleDisclaimerScroll}
              >
                <p className="whitespace-pre-line">
                  {fullDisclaimer.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph.includes("https://www.iamrakeshbansal.com") ? (
                        <span>
                          {paragraph
                            .split("https://www.iamrakeshbansal.com")
                            .map((part, i) => (
                              <React.Fragment key={i}>
                                {part}
                                {i <
                                  paragraph.split(
                                    "https://www.iamrakeshbansal.com"
                                  ).length -
                                    1 && (
                                  <a
                                    href="https://www.iamrakeshbansal.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                  >
                                    https://www.iamrakeshbansal.com
                                  </a>
                                )}
                              </React.Fragment>
                            ))}
                        </span>
                      ) : (
                        paragraph
                      )}
                      <br />
           
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <label className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={disclaimerAgreed}
                    onChange={(e) => setDisclaimerAgreed(e.target.checked)}
                    disabled={!hasReadDisclaimer}
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                  <span>I agree to the terms and conditions</span>
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={handleCloseDisclaimer}
                    className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (disclaimerAgreed) {
                        setShowDisclaimer(false);
                        // Proceed with payment logic
                        alert("Proceeding to payment...");
                      }
                    }}
                    disabled={!disclaimerAgreed}
                    className={`px-4 py-2 rounded ${
                      disclaimerAgreed
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } transition-colors duration-300`}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getPlanBackgroundImage(duration: string): string {
  switch (duration.toLowerCase()) {
    case "monthly":
      return "/images/dream-card1.png";
    case "quarterly":
      return "/images/dream-card2.png";
    case "yearly":
      return "/images/dream-card3.png";
    default:
      return "/images/dream-card1.png";
  }
}
