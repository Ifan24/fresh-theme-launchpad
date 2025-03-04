
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left"
      >
        <h3 className="text-sm md:text-base font-medium">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pt-3" : "max-h-0"
        }`}
      >
        <p className="text-white/70 text-sm">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I translate subtitles?",
      answer: "Upload your subtitle file, select your target language, and our AI will instantly translate your subtitles while preserving the timing and formatting."
    },
    {
      question: "What file formats are supported for subtitle uploads?",
      answer: "We support all major subtitle formats including SRT, VTT, ASS, SSA, and more. You can easily convert between formats after translation."
    },
    {
      question: "How much does it cost to use the service?",
      answer: "We offer a free tier with 100,000 tokens. After that, you can purchase additional tokens as needed or subscribe to our premium plans for unlimited translations."
    },
    {
      question: "What languages are supported for translation?",
      answer: "We support over 100 languages for translation, powered by advanced AI models from OpenAI, Claude, Gemini, and more."
    },
    {
      question: "How does batch translation work?",
      answer: "Our batch processing feature allows you to translate multiple subtitle files simultaneously, saving you time on large translation projects."
    },
  ];

  return (
    <div className="glass-card rounded-lg p-6 md:p-8 w-full max-w-3xl mx-auto opacity-0 animate-fade-up">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
