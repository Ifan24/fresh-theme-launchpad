
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`border-b ${isDark ? 'border-white/10' : 'border-gray-200'} py-4 last:border-none`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left"
      >
        <h3 className="text-sm md:text-base font-medium light-mode-heading">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 ${isDark ? 'text-white/60' : 'text-gray-500'} transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm light-mode-text">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  
  const faqs = [
    {
      question: t("faq.items.how.question"),
      answer: t("faq.items.how.answer")
    },
    {
      question: t("faq.items.formats.question"),
      answer: t("faq.items.formats.answer")
    },
    {
      question: t("faq.items.cost.question"),
      answer: t("faq.items.cost.answer")
    },
    {
      question: t("faq.items.languages.question"),
      answer: t("faq.items.languages.answer")
    },
    {
      question: t("faq.items.batch.question"),
      answer: t("faq.items.batch.answer")
    },
  ];

  return (
    <div className="glass-card rounded-lg p-6 md:p-8 w-full max-w-3xl mx-auto opacity-0 animate-fade-up">
      <h2 className="text-2xl font-bold mb-6 light-mode-heading">{t("faq.title")}</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
