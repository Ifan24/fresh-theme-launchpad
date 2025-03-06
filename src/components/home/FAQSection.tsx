
import React from "react";
import FAQ from "@/components/FAQ";

const FAQSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-4 light-mode-heading">Frequently Asked Questions</h2>
          <p className="light-mode-text max-w-2xl mx-auto">
            Find answers to common questions about our service
          </p>
        </div>
        
        <FAQ />
      </div>
    </section>
  );
};

export default FAQSection;
