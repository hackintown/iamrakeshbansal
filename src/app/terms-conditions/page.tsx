import FAQ from "@/components/ui/Faq";
import Footer from "@/components/ui/Footer/Footer";
import TermsAndConditions from "@/components/ui/TermsAndConditions";
import React from "react";

const page = () => {
  return (
    <div>
      <TermsAndConditions />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
