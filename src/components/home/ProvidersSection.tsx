
import React from "react";
import ProviderLogo from "@/components/ProviderLogo";

const ProvidersSection = () => {
  const providers = [
    "OpenAI", "Claude", "Gemini", "DeepSeek", "Mistral", "xAI"
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-xl font-medium mb-2 light-mode-subheading">Powered By Leading AI Models</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <ProviderLogo 
              key={provider} 
              name={provider} 
              delay={0.1 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
