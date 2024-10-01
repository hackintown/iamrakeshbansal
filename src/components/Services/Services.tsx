"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { serviceContent, ServiceKey } from "./ServicesContent";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const urlToServiceKeyMap: Record<string, ServiceKey> = {
  "intraday-btst-plan": "Intraday/BTST",
  "options-plan": "Index & Option",
  "option-intraday": "Option & Intraday",
  "mentorship-plan": "Mentorship",
  "futures-plan": "Futures",
  "commodity-plan": "Commodity",
};

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

const ServicesPage: React.FC<ServiceProps> = ({ param }) => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ServiceHeader title={content.title} />
      <main className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.section
            key={selectedService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-800 rounded-lg p-8 shadow-xl"
          >
            <ServiceDescription content={content} />
            {content.generalFeatures && (
              <GeneralFeatures features={content.generalFeatures} />
            )}
            {content.advancedFeatures && (
              <AdvancedFeatures features={content.advancedFeatures} />
            )}
            {content.whyChooseUs && <WhyChooseUs items={content.whyChooseUs} />}
            {content.whatWeOffer && <WhatWeOffer items={content.whatWeOffer} />}
            {content.plans && (
              <PricingPlans plans={content.plans} onPayNow={handlePayNow} />
            )}
            {content.disclaimer && <Disclaimer text={content.disclaimer} />}
            {content.registration && (
              <Registration text={content.registration} />
            )}
            {content.notes && <Notes text={content.notes} />}
          </motion.section>
        </AnimatePresence>
      </main>
      <DisclaimerModal
        show={showDisclaimer}
        onClose={handleCloseDisclaimer}
        onScroll={handleDisclaimerScroll}
        agreed={disclaimerAgreed}
        setAgreed={setDisclaimerAgreed}
        hasRead={hasReadDisclaimer}
        disclaimerText={content.disclaimer || ""}
        handlePayNow={handlePayNow}
      />
    </div>
  );
};

const ServiceHeader: React.FC<{ title: string }> = ({ title }) => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-800 to-indigo-600"
  >
    <h1 className="text-4xl md:text-5xl font-bold z-10">{title}</h1>
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
);

const ServiceDescription: React.FC<{
  content: (typeof serviceContent)[ServiceKey];
}> = ({ content }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-light"
      >
        {content.description}
      </motion.p>
      {content.additionalDescription && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 font-light"
        >
          {content.additionalDescription}
        </motion.p>
      )}
    </div>
    <div className="w-full">
      <Image
        src="/images/fyi.png"
        alt="Service Image"
        width={500}
        height={500}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  </div>
);

const CustomCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white text-gray-800 rounded-lg p-6 shadow-xl mb-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const CustomAccordion: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GeneralFeatures: React.FC<{ features: string[] }> = ({ features }) => (
  <CustomCard title="General Features">
    <ul className="list-disc pl-5 space-y-2">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {feature}
        </motion.li>
      ))}
    </ul>
  </CustomCard>
);

const AdvancedFeatures: React.FC<{
  features: Record<string, { price: string; features: string[] }>;
}> = ({ features }) => (
  <CustomCard title="Advanced Features">
    {Object.entries(features).map(([key, value], index) => (
      <CustomAccordion
        key={index}
        title={`${key.charAt(0).toUpperCase() + key.slice(1)} Service`}
      >
        <p className="font-semibold mb-2">Price: {value.price}</p>
        <ul className="list-disc pl-5 space-y-2">
          {value.features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </CustomAccordion>
    ))}
  </CustomCard>
);

const WhyChooseUs: React.FC<{ items: { title: string; info: string }[] }> = ({
  items,
}) => (
  <CustomCard title="Why Choose Us">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-4"
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p>{item.info}</p>
      </motion.div>
    ))}
  </CustomCard>
);

const WhatWeOffer: React.FC<{ items: { title: string; info: string }[] }> = ({
  items,
}) => (
  <CustomCard title="What We Offer">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-4"
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p>{item.info}</p>
      </motion.div>
    ))}
  </CustomCard>
);

const PricingPlans: React.FC<{
  plans: { duration: string; price: string }[];
  onPayNow: () => void;
}> = ({ plans, onPayNow }) => (
  <CustomCard title="Pricing Plans">
    <div className="flex flex-wrap gap-6 items-center justify-center text-white">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-50 rounded-lg p-6 shadow-md w-full h-full max-w-[250px] max-h-[250px]"
          style={{
            backgroundImage: `url(${getPlanBackgroundImage(plan.duration)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-xl font-semibold mb-2">{plan.duration}</h4>
          <p className="text-3xl font-bold mb-4">{plan.price}</p>
          <button
            onClick={onPayNow}
            className="w-full bg-background border border-border text-foreground py-2 px-4 rounded transition-colors duration-300 hover:bg-opacity-80"
          >
            Subscribe Now
          </button>
        </motion.div>
      ))}
    </div>
  </CustomCard>
);

const Disclaimer: React.FC<{ text: string }> = ({ text }) => (
  <CustomCard title="Disclaimer">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-yellow-600"
    >
      {text}
    </motion.p>
  </CustomCard>
);

const Registration: React.FC<{ text: string }> = ({ text }) => (
  <CustomCard title="Registration Information">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-blue-600"
    >
      {text}
    </motion.p>
  </CustomCard>
);

const Notes: React.FC<{ text: string }> = ({ text }) => (
  <CustomCard title="Additional Notes">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-green-600"
    >
      {text}
    </motion.p>
  </CustomCard>
);

const DisclaimerModal: React.FC<{
  show: boolean;
  onClose: () => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
  hasRead: boolean;
  disclaimerText: string;
  handlePayNow: () => void;
}> = ({
  show,
  onClose,
  onScroll,
  agreed,
  setAgreed,
  hasRead,
  handlePayNow,
}) => (
  <AnimatePresence>
    {show && (
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
          className="bg-white text-gray-800 p-6 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col relative"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Disclaimer</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Disclaimer content rendered with dangerouslySetInnerHTML */}
          <div
            className="text-base font-light text-gray-800 overflow-y-auto h-[70vh] p-4"
            onScroll={onScroll}
            dangerouslySetInnerHTML={{ __html: fullDisclaimer }}
          />
          <div className="mt-6 flex justify-end space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                disabled={!hasRead}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-white bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={handlePayNow}
              disabled={!agreed}
              className={`px-4 py-2 rounded-lg text-white ${
                agreed ? "bg-indigo-600" : "bg-gray-400"
              }`}
            >
              Processed
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

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

export default ServicesPage;
