
import React from "react";
import { FileText, Languages, Settings, AlertCircle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: "Multiple Format Support",
      description: "Support for all major subtitle formats including SRT, VTT, ASS, and more."
    },
    {
      icon: <Languages className="w-5 h-5 text-blue-400" />,
      title: "50+ Languages",
      description: "Translate to and from over 50 languages with high accuracy and natural phrasing."
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: "Customizable Settings",
      description: "Fine-tune translations with terminology control and style preferences."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
      title: "Error Handling",
      description: "Smart detection of timing issues and formatting errors with automatic corrections."
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-4 light-mode-heading">Why Choose GPT Subtitler?</h2>
          <p className="light-mode-text max-w-2xl mx-auto">
            Our advanced AI delivers unmatched translation quality
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
