
import { useRef, useEffect } from "react";
import { ArrowRight, Check, FileText, Download, Play, Languages, Settings, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import ProviderLogo from "@/components/ProviderLogo";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import TranslationComparison from "@/components/TranslationComparison";

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Comparison Section */}
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
      
      {/* Features Section */}
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
      
      {/* Providers Section */}
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
      
      {/* How It Works Section */}
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
      
      {/* FAQ Section */}
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
      
      {/* CTA Section */}
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
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 light-mode-heading">GPT Subtitler</h3>
              <p className="light-mode-muted text-sm">
                AI-powered subtitle translation with deep context understanding for creators worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3 light-mode-subheading">Product</h4>
              <ul className="space-y-2">
                {[
                  { key: "features", label: "Features" },
                  { key: "pricing", label: "Pricing" },
                  { key: "useCases", label: "Use Cases" },
                  { key: "integrations", label: "Integrations" }
                ].map((item) => (
                  <li key={item.key}>
                    <a href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3 light-mode-subheading">Resources</h4>
              <ul className="space-y-2">
                {[
                  { key: "documentation", label: "Documentation" },
                  { key: "api", label: "API" },
                  { key: "guides", label: "Guides" },
                  { key: "support", label: "Support" }
                ].map((item) => (
                  <li key={item.key}>
                    <a href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3 light-mode-subheading">Company</h4>
              <ul className="space-y-2">
                {[
                  { key: "about", label: "About" },
                  { key: "blog", label: "Blog" },
                  { key: "careers", label: "Careers" },
                  { key: "contact", label: "Contact" }
                ].map((item) => (
                  <li key={item.key}>
                    <a href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-white/60 text-sm">
              © {new Date().getFullYear()} GPT Subtitler. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {[
                { key: "terms", label: "Terms" },
                { key: "privacy", label: "Privacy" },
                { key: "cookies", label: "Cookies" }
              ].map((item) => (
                <a key={item.key} href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                  {item.label}
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
