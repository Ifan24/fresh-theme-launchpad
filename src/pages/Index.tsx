
import { useRef, useEffect } from "react";
import { ArrowRight, Check, FileText, Download, Play, Languages, Settings, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import ProviderLogo from "@/components/ProviderLogo";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      el.classList.add("opacity-0");
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        animatedElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const providers = [
    "OpenAI", "Claude", "Gemini", "DeepSeek", "Mistral", "xAI"
  ];

  const features = [
    {
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: "Multiple Format Support",
      description: "Upload subtitles in SRT, VTT, ASS, and more. Convert between formats effortlessly."
    },
    {
      icon: <Languages className="w-5 h-5 text-blue-400" />,
      title: "100+ Languages",
      description: "Translate your subtitles to and from over 100 languages with high accuracy."
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: "Advanced Settings",
      description: "Fine-tune your translations with customizable settings and preferences."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
      title: "Error Handling",
      description: "Intelligent error detection and correction for professional-quality subtitles."
    },
  ];

  const steps = [
    {
      number: 1,
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: "Upload Subtitle File",
      description: "Upload your subtitle file in any supported format to begin the translation process."
    },
    {
      number: 2,
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: "Select Translation Options",
      description: "Choose your target language and adjust translation settings as needed."
    },
    {
      number: 3,
      icon: <Play className="w-5 h-5 text-blue-400" />,
      title: "Process Translation",
      description: "Our AI models will translate your subtitles while preserving timing and formatting."
    },
    {
      number: 4,
      icon: <Download className="w-5 h-5 text-blue-400" />,
      title: "Download Translated Subtitles",
      description: "Download your translated subtitles in your preferred format."
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="hero-blur top-20 left-1/4 animate-pulse-subtle"></div>
        <div className="hero-blur bottom-20 right-1/4 animate-pulse-subtle"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center stagger-animation">
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 opacity-0 animate-fade-down">
              <span className="text-xs font-medium text-white/80">AI-Powered Subtitle Translation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient opacity-0 animate-fade-up">
              GPT Subtitler
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up">
              GPT-Powered Subtitling: Fast, Accurate, Effortless. 
              Translate subtitles in seconds with cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up">
              <CTAButton 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started for Free
              </CTAButton>
              
              <CTAButton 
                variant="secondary" 
                size="lg"
              >
                Watch Demo
              </CTAButton>
            </div>
            
            <div className="mt-6 mb-12 opacity-0 animate-fade-up">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden glass-card">
                  {/* Replace with actual screenshot or demo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/30">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-white/60 flex items-center justify-center gap-2 opacity-0 animate-fade-up">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Claim your 100,000 free tokens and kick off your translation success.</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Providers Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-xl font-medium text-white/80 mb-2">Supported LLM Providers</h2>
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
      
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">Powerful Translation Features</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experience state-of-the-art subtitle translation with our comprehensive feature set.
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
      
      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">How to Use GPT Subtitler</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Complete your subtitle translations in just four simple steps.
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
              Try It Now
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Find answers to common questions about GPT Subtitler.
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden animate-on-scroll opacity-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-600/10 animate-pulse-subtle"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Transform Your Subtitles?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 relative z-10">
              Join thousands of content creators who are already using GPT Subtitler to reach global audiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <CTAButton 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started for Free
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
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">GPT Subtitler</h3>
              <p className="text-white/60 text-sm">
                AI-powered subtitle translation for content creators worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Use Cases", "Integrations"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Resources</h4>
              <ul className="space-y-2">
                {["Documentation", "API", "Guides", "Support"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Company</h4>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} GPT Subtitler. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
