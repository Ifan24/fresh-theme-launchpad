
import React from "react";
import TranslationComparison from "@/components/TranslationComparison";

const ComparisonSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-4 light-mode-heading">Context-Aware Subtitle Translation</h2>
          <p className="light-mode-text max-w-2xl mx-auto">
            Our AI understands the cultural nuances and context that generic translation tools miss
          </p>
        </div>
        
        <TranslationComparison />
      </div>
    </section>
  );
};

export default ComparisonSection;
