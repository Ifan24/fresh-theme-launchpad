
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check, FileText, Download, Play, Languages, Settings, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import ProviderLogo from "@/components/ProviderLogo";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import TranslationComparison from "@/components/TranslationComparison";

const Index = () => {
  const { t } = useTranslation();
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
      title: t("features.items.formatSupport.title"),
      description: t("features.items.formatSupport.description")
    },
    {
      icon: <Languages className="w-5 h-5 text-blue-400" />,
      title: t("features.items.languages.title"),
      description: t("features.items.languages.description")
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: t("features.items.settings.title"),
      description: t("features.items.settings.description")
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
      title: t("features.items.errorHandling.title"),
      description: t("features.items.errorHandling.description")
    },
  ];

  const steps = [
    {
      number: 1,
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: t("howItWorks.steps.upload.title"),
      description: t("howItWorks.steps.upload.description")
    },
    {
      number: 2,
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: t("howItWorks.steps.select.title"),
      description: t("howItWorks.steps.select.description")
    },
    {
      number: 3,
      icon: <Play className="w-5 h-5 text-blue-400" />,
      title: t("howItWorks.steps.process.title"),
      description: t("howItWorks.steps.process.description")
    },
    {
      number: 4,
      icon: <Download className="w-5 h-5 text-blue-400" />,
      title: t("howItWorks.steps.download.title"),
      description: t("howItWorks.steps.download.description")
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
              <span className="text-xs font-medium text-gray-800 dark:text-white/80">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient opacity-0 animate-fade-up light-mode-heading">
              {t("hero.title")}
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up light-mode-text">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up">
              <CTAButton 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {t("hero.cta.primary")}
              </CTAButton>
              
              <CTAButton 
                variant="secondary" 
                size="lg"
              >
                {t("hero.cta.secondary")}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4 light-mode-heading">{t("comparison.title")}</h2>
            <p className="light-mode-text max-w-2xl mx-auto">
              {t("comparison.subtitle")}
            </p>
          </div>
          
          <TranslationComparison />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4 light-mode-heading">{t("features.title")}</h2>
            <p className="light-mode-text max-w-2xl mx-auto">
              {t("features.subtitle")}
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
            <h2 className="text-xl font-medium mb-2 light-mode-subheading">{t("providers.title")}</h2>
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
            <h2 className="text-3xl font-bold mb-4 light-mode-heading">{t("howItWorks.title")}</h2>
            <p className="light-mode-text max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
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
              {t("howItWorks.cta")}
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4 light-mode-heading">{t("faq.title")}</h2>
            <p className="light-mode-text max-w-2xl mx-auto">
              {t("faq.subtitle")}
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
            
            <h2 className="text-3xl font-bold mb-4 relative z-10 light-mode-heading">{t("cta.title")}</h2>
            <p className="light-mode-text max-w-xl mx-auto mb-8 relative z-10">
              {t("cta.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <CTAButton 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {t("cta.primary")}
              </CTAButton>
              
              <CTAButton 
                variant="outline" 
                size="lg"
              >
                {t("cta.secondary")}
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
                {t("footer.description")}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3 light-mode-subheading">{t("footer.product")}</h4>
              <ul className="space-y-2">
                {[
                  { key: "features", label: t("footer.features") },
                  { key: "pricing", label: t("footer.pricing") },
                  { key: "useCases", label: t("footer.useCases") },
                  { key: "integrations", label: t("footer.integrations") }
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
              <h4 className="text-sm font-medium mb-3 light-mode-subheading">{t("footer.resources")}</h4>
              <ul className="space-y-2">
                {[
                  { key: "documentation", label: t("footer.documentation") },
                  { key: "api", label: t("footer.api") },
                  { key: "guides", label: t("footer.guides") },
                  { key: "support", label: t("footer.support") }
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
              <h4 className="text-sm font-medium mb-3 light-mode-subheading">{t("footer.company")}</h4>
              <ul className="space-y-2">
                {[
                  { key: "about", label: t("footer.about") },
                  { key: "blog", label: t("footer.blog") },
                  { key: "careers", label: t("footer.careers") },
                  { key: "contact", label: t("footer.contact") }
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
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {[
                { key: "terms", label: t("footer.terms") },
                { key: "privacy", label: t("footer.privacy") },
                { key: "cookies", label: t("footer.cookies") }
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
