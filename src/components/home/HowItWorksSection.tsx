
import React from "react";
import { FileText, Settings, Play, Download, ArrowRight } from "lucide-react";
import StepCard from "@/components/StepCard";
import CTAButton from "@/components/CTAButton";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: "Upload Your Content",
      description: "Upload subtitle files or video with embedded subtitles in any format."
    },
    {
      number: 2,
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: "Select Languages",
      description: "Choose your source and target languages from our extensive list."
    },
    {
      number: 3,
      icon: <Play className="w-5 h-5 text-blue-400" />,
      title: "Process With AI",
      description: "Our advanced AI models translate with context awareness and cultural nuance."
    },
    {
      number: 4,
      icon: <Download className="w-5 h-5 text-blue-400" />,
      title: "Download & Use",
      description: "Get your professionally translated subtitles ready for your content."
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-4 light-mode-heading">How It Works</h2>
          <p className="light-mode-text max-w-2xl mx-auto">
            Simple, fast, and accurate subtitle translation in 4 easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <CTAButton 
            variant="primary" 
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get Started Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
