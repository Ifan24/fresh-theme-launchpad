
import { useState } from "react";
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
  const faqs = [
    {
      question: "How does GPT Subtitler work?",
      answer: "GPT Subtitler uses advanced AI models to translate subtitles with context awareness, ensuring accurate translations that preserve the original meaning, tone, and cultural nuances."
    },
    {
      question: "What file formats are supported?",
      answer: "We support all common subtitle formats including SRT, VTT, ASS/SSA, and more. You can also directly upload video files with embedded subtitles."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free tier with basic features and paid plans starting at $19/month. Check our pricing page for detailed information about our plans and features."
    },
    {
      question: "Which languages are supported?",
      answer: "GPT Subtitler supports over 50 languages for our Pro plan, with all major world languages available even on our free tier. Our system is constantly being trained on new languages."
    },
    {
      question: "Can I process multiple files at once?",
      answer: "Yes, our batch processing feature allows you to translate multiple subtitle files simultaneously, saving you time on large projects."
    }
  ];

  return (
    <div className="glass-card rounded-lg p-6 md:p-8 w-full max-w-3xl mx-auto opacity-0 animate-fade-up">
      <h2 className="text-2xl font-bold mb-6 light-mode-heading">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
