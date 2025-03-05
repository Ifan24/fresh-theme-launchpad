
import { useTranslation } from "react-i18next";
import { Star, CheckCircle2, Calculator, ArrowRight, HelpCircle, CreditCard, Wallet } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";

const PricingPage = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini");
  const [usdAmount, setUsdAmount] = useState("1.00");
  const [tokensAmount, setTokensAmount] = useState("2000000");
  const [hoursEstimate, setHoursEstimate] = useState("14.28");

  // Function to format numbers with commas
  const formatNumber = (num: string) => {
    return parseInt(num).toLocaleString();
  };

  // Handler for USD input
  const handleUsdChange = (value: string) => {
    setUsdAmount(value);
    // Simple conversion (for demo purposes)
    const tokens = parseFloat(value) * 2000000;
    setTokensAmount(tokens.toString());
    const hours = parseFloat(value) * 14.28;
    setHoursEstimate(hours.toFixed(2));
  };

  // Handler for tokens input
  const handleTokensChange = (value: string) => {
    setTokensAmount(value);
    // Simple conversion (for demo purposes)
    const usd = parseFloat(value) / 2000000;
    setUsdAmount(usd.toFixed(2));
    const hours = (parseFloat(value) / 2000000) * 14.28;
    setHoursEstimate(hours.toFixed(2));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 light-mode-heading">{t("pricing.title")}</h1>
          <p className="text-lg max-w-2xl mx-auto light-mode-text">{t("pricing.subtitle")}</p>
        </section>

        {/* Pricing Plans */}
        <section className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-gray-200 shadow-md'} flex flex-col`}>
            <div className="p-6 flex items-center justify-center">
              <Star className="w-10 h-10 text-green-500" />
            </div>
            <div className="px-6 pb-2">
              <h3 className="text-xl font-bold mb-2 text-center light-mode-heading">{t("pricing.freePlan.title")}</h3>
              <p className="text-center text-lg font-medium mb-6 light-mode-text">{t("pricing.freePlan.price")}</p>
            </div>
            
            <div className="px-6 pb-6 flex-1">
              <ul className="space-y-4">
                {[
                  t("pricing.freePlan.features.translation"),
                  t("pricing.freePlan.features.tokenLimit"),
                  t("pricing.freePlan.features.models"),
                  t("pricing.freePlan.features.registration"),
                  t("pricing.freePlan.features.formats"),
                  t("pricing.freePlan.features.history"),
                  t("pricing.freePlan.features.batchProcess"),
                  t("pricing.freePlan.features.maxFiles")
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm light-mode-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 mt-auto">
              <CTAButton 
                variant="secondary" 
                className="w-full"
              >
                {t("pricing.freePlan.buttonText")}
              </CTAButton>
            </div>
          </div>

          {/* Basic Plan */}
          <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-black/40 border-2 border-blue-500/50' : 'bg-white border-2 border-blue-500 shadow-lg'} flex flex-col relative`}>
            {isDark && <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>}
            
            <div className="p-6 flex items-center justify-center">
              <Star className="w-10 h-10 text-blue-500" />
            </div>
            <div className="px-6 pb-2">
              <h3 className="text-xl font-bold mb-2 text-center light-mode-heading">{t("pricing.basicPlan.title")}</h3>
              <p className="text-center text-lg font-medium mb-6 light-mode-text">{t("pricing.basicPlan.price")}</p>
            </div>
            
            <div className="px-6 pb-6 flex-1">
              <ul className="space-y-4">
                {[
                  t("pricing.basicPlan.features.translation"),
                  t("pricing.basicPlan.features.errorHandling"),
                  t("pricing.basicPlan.features.advancedSettings"),
                  t("pricing.basicPlan.features.dailyBonus"),
                  t("pricing.basicPlan.features.tokenDiscount"),
                  t("pricing.basicPlan.features.batchProcess"),
                  t("pricing.basicPlan.features.formatSupport"),
                  t("pricing.basicPlan.features.maxFiles")
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm light-mode-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 mt-auto">
              <CTAButton 
                variant="primary" 
                className="w-full"
              >
                {t("pricing.basicPlan.buttonText")}
              </CTAButton>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center text-xs text-green-500">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  {t("pricing.wechatPay")}
                </div>
                <div className="flex items-center text-xs text-blue-500">
                  <CreditCard className="w-4 h-4 mr-1" />
                  {t("pricing.alipay")}
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-gray-200 shadow-md'} flex flex-col`}>
            <div className="p-6 flex items-center justify-center">
              <Star className="w-10 h-10 text-red-500" />
            </div>
            <div className="px-6 pb-2">
              <h3 className="text-xl font-bold mb-2 text-center light-mode-heading">{t("pricing.proPlan.title")}</h3>
              <p className="text-center text-lg font-medium mb-6 light-mode-text">{t("pricing.proPlan.price")}</p>
            </div>
            
            <div className="px-6 pb-6 flex-1">
              <ul className="space-y-4">
                {[
                  t("pricing.proPlan.features.translation"),
                  t("pricing.proPlan.features.userExperience"),
                  t("pricing.proPlan.features.customization"),
                  t("pricing.proPlan.features.qualityControl"),
                  t("pricing.proPlan.features.dailyBonus"),
                  t("pricing.proPlan.features.tokenDiscount"),
                  t("pricing.proPlan.features.batchProcess"),
                  t("pricing.proPlan.features.formatSettings"),
                  t("pricing.proPlan.features.maxFiles")
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm light-mode-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 mt-auto">
              <CTAButton 
                variant="primary" 
                className="w-full"
              >
                {t("pricing.proPlan.buttonText")}
              </CTAButton>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center text-xs text-green-500">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  {t("pricing.wechatPay")}
                </div>
                <div className="flex items-center text-xs text-blue-500">
                  <CreditCard className="w-4 h-4 mr-1" />
                  {t("pricing.alipay")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Calculator Section */}
        <section className="mb-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-gray-200 shadow-md'} p-6`}>
            <div className="flex items-center mb-6">
              <Wallet className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-xl font-bold light-mode-heading">{t("pricing.buyTokens.title")}</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                t("pricing.buyTokens.features.bulk"),
                t("pricing.buyTokens.features.flexible"),
                t("pricing.buyTokens.features.discounts")
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  {index === 0 ? (
                    <Star className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  ) : index === 1 ? (
                    <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  ) : (
                    <Star className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm light-mode-text">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center mt-auto">
              <CTAButton variant="primary">
                {t("pricing.buyTokens.buttonText")}
              </CTAButton>
            </div>
          </div>
          
          <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-gray-200 shadow-md'} p-6`}>
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold light-mode-heading">{t("pricing.calculator.title")}</h3>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 light-mode-text">{t("pricing.calculator.model")}</label>
              <Select 
                defaultValue="gpt-4o-mini" 
                onValueChange={(value) => setSelectedModel(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
                  <SelectItem value="gpt-4">gpt-4</SelectItem>
                  <SelectItem value="claude-haiku">claude-haiku</SelectItem>
                  <SelectItem value="gemini-pro">gemini-pro</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs mt-2 light-mode-muted">{t("pricing.calculator.modelNote")}</p>
            </div>
            
            <div className="mb-6">
              <Tabs defaultValue="usd">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="usd">$ {t("pricing.calculator.usd")}</TabsTrigger>
                  <TabsTrigger value="tokens">{t("pricing.calculator.tokens")}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usd" className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={usdAmount}
                        onChange={(e) => handleUsdChange(e.target.value)}
                        className="w-full"
                      />
                      <span className="text-sm">=</span>
                      <Input
                        type="text"
                        value={formatNumber(tokensAmount)}
                        readOnly
                        className="w-full bg-muted"
                      />
                      <span className="text-sm">=</span>
                      <Input
                        type="text"
                        value={hoursEstimate}
                        readOnly
                        className="w-full bg-muted"
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="light-mode-muted">$ {t("pricing.calculator.usd")}</span>
                      <span className="light-mode-muted">{t("pricing.calculator.tokens")}</span>
                      <span className="light-mode-muted">{t("pricing.calculator.hours")}</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tokens" className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        type="text"
                        value={usdAmount}
                        readOnly
                        className="w-full bg-muted"
                      />
                      <span className="text-sm">=</span>
                      <Input
                        type="number"
                        value={tokensAmount}
                        onChange={(e) => handleTokensChange(e.target.value)}
                        className="w-full"
                      />
                      <span className="text-sm">=</span>
                      <Input
                        type="text"
                        value={hoursEstimate}
                        readOnly
                        className="w-full bg-muted"
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="light-mode-muted">$ {t("pricing.calculator.usd")}</span>
                      <span className="light-mode-muted">{t("pricing.calculator.tokens")}</span>
                      <span className="light-mode-muted">{t("pricing.calculator.hours")}</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <p className="text-sm light-mode-text">
              {t("pricing.calculator.estimate", { hours: hoursEstimate })}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center light-mode-heading">{t("pricing.faq.title")}</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: t("pricing.faq.questions.tokens"),
                answer: t("pricing.faq.answers.tokens")
              },
              {
                question: t("pricing.faq.questions.payment"),
                answer: t("pricing.faq.answers.payment")
              },
              {
                question: t("pricing.faq.questions.free"),
                answer: t("pricing.faq.answers.free")
              },
              {
                question: t("pricing.faq.questions.refund"),
                answer: t("pricing.faq.answers.refund")
              }
            ].map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left light-mode-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="light-mode-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
