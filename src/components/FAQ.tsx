
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

const FAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
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

  // Group FAQs into categories
  const categories = [
    { name: "General", items: faqs.slice(0, 2) },
    { name: "Pricing", items: [faqs[2]] },
    { name: "Features", items: faqs.slice(3) }
  ];

  return (
    <div className="glass-card rounded-lg p-6 md:p-8 w-full max-w-3xl mx-auto opacity-0 animate-fade-up">
      <h2 className="text-2xl font-bold mb-6 light-mode-heading">Frequently Asked Questions</h2>
      
      <Tabs defaultValue="General" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category.name} value={category.name}>{category.name}</TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.name} value={category.name} className="space-y-4">
            {category.items.map((faq, index) => (
              <Card key={index} className={`border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <CardContent className="p-4">
                  <h3 className="text-sm md:text-base font-medium light-mode-heading mb-2">{faq.question}</h3>
                  <p className="text-sm light-mode-text">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FAQ;
