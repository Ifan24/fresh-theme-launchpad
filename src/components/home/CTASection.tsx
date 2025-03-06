
import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const CTASection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden animate-on-scroll opacity-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-600/10 animate-pulse-subtle"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 light-mode-heading">Ready to Go Global?</h2>
          <p className="light-mode-text max-w-xl mx-auto mb-8 relative z-10">
            Start translating your content with our powerful AI-driven subtitle translation service today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <CTAButton 
              variant="primary" 
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Translating
            </CTAButton>
            
            <CTAButton 
              variant="outline" 
              size="lg"
            >
              View Pricing
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
