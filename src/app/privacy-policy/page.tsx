import FAQ from "@/components/ui/Faq";
import Footer from "@/components/ui/Footer/Footer";
import PrivacyPolicy from "@/components/ui/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <div>
      <PrivacyPolicy />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
