
import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="hero-blur top-20 left-1/4 animate-pulse-subtle"></div>
      <div className="hero-blur bottom-20 right-1/4 animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-animation">
          <div className="inline-block mb-4 px-3 py-1 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10 opacity-0 animate-fade-down">
            <span className="text-xs font-medium text-gray-800 dark:text-white/80">Powered by AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient opacity-0 animate-fade-up light-mode-heading">
            AI-Powered Subtitle Translation
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up light-mode-text">
            Turn your videos into global content with precise, context-aware translations
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up">
            <CTAButton 
              variant="primary" 
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Try Now
            </CTAButton>
            
            <CTAButton 
              variant="secondary" 
              size="lg"
            >
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
