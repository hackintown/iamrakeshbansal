"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ExternalLink, Search, Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${className}`}
    {...props}
  />
);

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

interface Section {
  title: string;
  content: string;
}

export default function Disclaimer() {
  const [searchTerm, setSearchTerm] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections: Section[] = [
    {
      title: "General Information",
      content:
        "RAKESH BANSAL VENTURES is SEBI registered Research Entity in terms of SEBI (Research Analyst) Regulations, 2014 with SEBI Research Analyst No: INH100008984. We engage in the business of providing fundamental and technical reports including charts and other technical tools to identify market pattern aiming to provide an overview of the previous trading pattern and expectation from the future market.",
    },
    {
      title: "Investment Risks",
      content:
        "Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
    },
    {
      title: "Information Reliability",
      content:
        'The information and views in the reports, our website https://www.iamrakeshbansal.com / & all the services ("Research Information") we provide are believed to be reliable, but we do not represent or warrant its accuracy, completeness or reliability of the information contained in our Research Information, investors and clients are advised to independently evaluate the market conditions/ risks involved, before making any trading/investment decisions.',
    },
    {
      title: "Confidentiality",
      content:
        "The report / information / opinions have been prepared by us and are subject to change without any notice. The report and information contained herein is strictly confidential and meant solely for the selected recipient and may not be altered in any way, transmitted to, copied or distributed, in part or in whole, to any other person or to the media or reproduced in any form, without prior written consent of us.",
    },
    {
      title: "Data Sources",
      content:
        "The information provided in the Report is from publicly available data, which we believe and reliable. While reasonable endeavors have been made to present reliable data in the Report so far as it relates to current and historical information, we are not guarantee the accuracy or completeness of the data in the Report.",
    },
    {
      title: "Liability",
      content:
        "Accordingly, we or our partner's / relatives of our partner's shall not be in any way responsible for any loss or damage that may arise to any person from any inadvertent error in the information contained, views and opinions expressed in this publication.",
    },
    {
      title: "Past Performance",
      content:
        "Past performance should not be taken as an indication or guarantee of future performance, and no representation or warranty, express or implied, is made regarding future performance. The price, value of and income from any of the securities or financial instruments mentioned in this report can fall as well as rise.",
    },
    {
      title: "Research Team",
      content:
        "The Report also includes analysis and views of our research team. The Report is purely for information purposes and does not construe to be investment recommendation/advice or an offer or solicitation of an offer to buy/sell any securities. The opinions expressed in the Report are our current opinions as of the date of the Report and may be subject to change from time to time without notice.",
    },
    {
      title: "Independence",
      content:
        "We have encouraged independence in preparation of research report and strives to minimize conflict in preparation of research report. We/ Our Partner's and their relatives did not receive any compensation or other benefits from the subject company/ies mentioned in the Report or from a third party in connection with preparation of the Report.",
    },
    {
      title: "Website Access",
      content:
        "By accessing https://www.iamrakeshbansal.com/, you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement. https://www.iamrakeshbansal.com/ is not responsible for any errors, omissions, representations or any links on any of our pages.",
    },
    {
      title: "Risks of Online Services",
      content:
        "There are risks associated with utilizing internet and short messaging system (SMS) based information and research dissemination services. Subscribers are advised to understand that the services can fail due to failure of hardware, software, and Internet connection.",
    },
    {
      title: "Intellectual Property",
      content:
        "The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from RAKESH BANSAL VENTURES. We reserve the right to terminate the accounts of subscribers/customers, who violate the proprietary rights, in addition to necessary legal action.",
    },
    {
      title: "Communication Consent",
      content:
        "Please note that by surfing our website, submitting your details in our website you are authorizing RAKESH BANSAL VENTURES to contact you and send Promotional and Transactional communication even though you may be registered under National Do Not Call Registry.",
    },
    {
      title: "SEBI Registration",
      content:
        "Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const makeLinksClickable = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return content.split(urlRegex).map((part, i) =>
      urlRegex.test(part) ? (
        <Link
          key={i}
          href={part}
          className="text-purple-600 hover:text-purple-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </Link>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-100">
      <motion.header
        className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-md sticky top-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <motion.div
            className="flex items-center mb-2 sm:mb-0"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Shield className="w-8 h-8 text-purple-600 mr-2" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
              Rakesh Bansal Ventures
            </h1>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            <span className="font-semibold text-sm sm:text-base text-black">
              Disclaimer
            </span>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-8 sm:mb-12" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-600">
            Important Notice
          </h2>
          <p className="text-base sm:text-lg text-black mb-4">
            Please read this disclaimer carefully before using our services.
          </p>
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search disclaimer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border-purple-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            initial="initial"
            animate="animate"
          >
            {filteredSections.map((section, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-purple-600">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {makeLinksClickable(section.content)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div className="mt-12 text-center" {...fadeInUp}>
          <p className="text-lg font-semibold mb-2 text-purple-600">
            RAKESH BANSAL VENTURES
          </p>
          <p className="text-sm text-gray-600">
            SEBI Registered Research Analyst Registration Number: INH100008984
          </p>
        </motion.div>
      </main>

      <motion.footer
        className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rakesh Bansal Ventures. All rights
            reserved.
          </p>
          <Link
            href="https://www.iamrakeshbansal.com"
            className="text-sm text-green-300 hover:text-green-200 transition-colors inline-flex items-center mt-2"
          >
            www.iamrakeshbansal.com
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </motion.footer>
    </div>
  );
}
