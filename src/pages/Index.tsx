
import React from "react";
import Navbar from "@/components/Navbar";
import AnimationWrapper from "@/components/home/AnimationWrapper";
import HeroSection from "@/components/home/HeroSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProvidersSection from "@/components/home/ProvidersSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <AnimationWrapper>
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <ProvidersSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </AnimationWrapper>
    </div>
  );
};

export default Index;
