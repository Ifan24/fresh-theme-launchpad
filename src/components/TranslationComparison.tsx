
import { useState } from "react";
import { Check, X, ArrowLeftRight, Languages, ChevronDown } from "lucide-react";

interface TranslationExample {
  id: number;
  originalText: string;
  language: string;
  aiTranslation: string;
  machineTranslation: string;
  targetLanguage: string;
  englishMeaning?: string; // Optional field for English speakers who don't know the target language
}

const examples: TranslationExample[] = [
  {
    id: 1,
    originalText: "The weather is beautiful today, I think we should go for a walk in the park.",
    language: "English",
    aiTranslation: "Сегодня прекрасная погода, я думаю, нам стоит прогуляться в парке.",
    machineTranslation: "Погода сегодня прекрасная, я думаю, мы должны пойти на прогулку в парк.",
    targetLanguage: "Russian",
    englishMeaning: "Today the weather is beautiful, I think we should go for a walk in the park."
  },
  {
    id: 2,
    originalText: "This movie was absolutely incredible. The character development and plot twists kept me on the edge of my seat.",
    language: "English",
    aiTranslation: "Cette film était absolument incroyable. Le développement des personnages et les rebondissements m'ont tenu en haleine.",
    machineTranslation: "Ce film était absolument incroyable. Le développement du personnage et les rebondissements de l'intrigue m'ont tenu en haleine.",
    targetLanguage: "French",
    englishMeaning: "This movie was absolutely incredible. The character development and plot twists kept me on the edge of my seat."
  },
  {
    id: 3,
    originalText: "I can't believe how much technology has changed in the last decade. It's truly remarkable.",
    language: "English",
    aiTranslation: "Ich kann nicht glauben, wie sehr sich die Technologie im letzten Jahrzehnt verändert hat. Es ist wirklich bemerkenswert.",
    machineTranslation: "Ich kann nicht glauben, wie viel sich die Technologie im letzten Jahrzehnt verändert hat. Es ist wirklich bemerkenswert.",
    targetLanguage: "German",
    englishMeaning: "I can't believe how much technology has changed in the last decade. It's truly remarkable."
  },
  {
    id: 4,
    originalText: "Learning a new language opens up a world of opportunities and helps you connect with different cultures.",
    language: "English",
    aiTranslation: "学习一门新语言开启了一个充满机遇的世界，帮助你与不同文化建立联系。",
    machineTranslation: "学习新语言为您打开了一个充满机遇的世界，并帮助您与不同的文化联系。",
    targetLanguage: "Chinese",
    englishMeaning: "Learning a new language opens up a world of opportunities and helps you connect with different cultures."
  }
];

const TranslationComparison = () => {
  const [activeExample, setActiveExample] = useState<TranslationExample>(examples[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleExampleChange = (example: TranslationExample) => {
    setActiveExample(example);
    setIsDropdownOpen(false);
  };

  return (
    <div className="glass-card rounded-lg p-6 md:p-8 w-full max-w-4xl mx-auto opacity-0 animate-fade-up">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">Translation Comparison</h3>
        
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition-all duration-200"
          >
            <span>Example {activeExample.id}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-lg border border-white/10 rounded-md shadow-lg z-10">
              {examples.map((example) => (
                <button
                  key={example.id}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                  onClick={() => handleExampleChange(example)}
                >
                  Example {example.id} - {example.targetLanguage}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Languages className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">Original Text ({activeExample.language})</span>
          </div>
          
          <div className="p-4 bg-white/5 border border-white/10 rounded-md">
            <p className="text-white/90">{activeExample.originalText}</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/10 p-2 rounded-full">
              <ArrowLeftRight className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">GPT Subtitler</span>
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <span className="text-xs text-white/50">({activeExample.targetLanguage})</span>
            </div>
            
            <div className="p-4 bg-white/5 border border-blue-500/20 rounded-md">
              <p className="text-white/90">{activeExample.aiTranslation}</p>
              {activeExample.englishMeaning && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/60 italic">English meaning: {activeExample.englishMeaning}</p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">Generic Machine Translation</span>
                <X className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-xs text-white/50">({activeExample.targetLanguage})</span>
            </div>
            
            <div className="p-4 bg-white/5 border border-white/10 rounded-md">
              <p className="text-white/90">{activeExample.machineTranslation}</p>
              {activeExample.englishMeaning && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/60 italic">English meaning: {activeExample.englishMeaning}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-white/70">
          GPT Subtitler produces more natural, context-aware translations that preserve the original tone and meaning.
        </p>
      </div>
    </div>
  );
};

export default TranslationComparison;
