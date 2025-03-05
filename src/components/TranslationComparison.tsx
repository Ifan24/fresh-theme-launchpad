
import { useState } from "react";
import { Check, X, ArrowLeftRight, Languages, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface TranslationExample {
  id: number;
  originalText: string;
  language: string;
  aiTranslation: string;
  machineTranslation: string;
  targetLanguage: string;
  englishMeaning?: string;
  context?: string;
}

const examples: TranslationExample[] = [
  {
    id: 1,
    originalText: "The fisherman couldn't decide whether to go to sea, so he remained in a state of pier pressure.",
    language: "English",
    aiTranslation: "El pescador no podía decidir si ir al mar, así que se quedó en un estado de indecisión.",
    machineTranslation: "El pescador no podía decidir si ir al mar, así que permaneció en un estado de presión de muelle.",
    targetLanguage: "Spanish",
    englishMeaning: "The fisherman couldn't decide whether to go to sea, so he remained indecisive.",
    context: "English pun: 'pier pressure' sounds like 'peer pressure' but refers to a fishing dock (pier)"
  },
  {
    id: 2,
    originalText: "I'll burn that bridge when I get to it.",
    language: "English",
    aiTranslation: "Me ocuparé de ese problema cuando llegue el momento.",
    machineTranslation: "Quemaré ese puente cuando llegue a él.",
    targetLanguage: "Spanish",
    englishMeaning: "I'll deal with that problem when the time comes.",
    context: "Idiom mix-up: Combines 'burn bridges' and 'cross that bridge when I get to it' - AI understands the intended meaning"
  },
  {
    id: 3,
    originalText: "Time flies like an arrow; fruit flies like a banana.",
    language: "English",
    aiTranslation: "時間は矢のように飛ぶ。果実バエはバナナが好きだ。",
    machineTranslation: "時間はarrow のように飛ぶ。果物はバナナのように飛ぶ。",
    targetLanguage: "Japanese",
    englishMeaning: "Time passes quickly like an arrow; fruit flies (the insects) are attracted to bananas.",
    context: "Linguistic ambiguity: 'flies' is used as a verb then as a noun, and 'like' as an adverb then as a verb"
  },
  {
    id: 4,
    originalText: "Did you hear about the new restaurant on the moon? Great food, but no atmosphere.",
    language: "English",
    aiTranslation: "听说月球上新开了一家餐厅吗？食物很棒，但没有氛围。这是个双关语，因为月球上真的没有大气层。",
    machineTranslation: "你听说过月球上的新餐厅吗？食物很好，但没有氛围。",
    targetLanguage: "Chinese",
    englishMeaning: "Did you hear about the new restaurant on the moon? Great food, but no atmosphere.",
    context: "Scientific pun: 'atmosphere' refers both to restaurant ambiance and the moon's lack of actual atmosphere"
  },
  {
    id: 5,
    originalText: "Bob's your uncle! We'll have this fixed in no time.",
    language: "English",
    aiTranslation: "Проще простого! Мы исправим это в два счета.",
    machineTranslation: "Боб твой дядя! Мы исправим это в кратчайшие сроки.",
    targetLanguage: "Russian",
    englishMeaning: "There you go! We'll have this fixed in no time.",
    context: "British idiom: 'Bob's your uncle' means 'there you have it' or 'it's done' - has no connection to anyone named Bob"
  }
];

const TranslationComparison = () => {
  const [activeExample, setActiveExample] = useState<TranslationExample>(examples[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleExampleChange = (example: TranslationExample) => {
    setActiveExample(example);
    setIsDropdownOpen(false);
  };

  return (
    <div className="glass-card rounded-lg p-6 md:p-8 w-full max-w-4xl mx-auto opacity-0 animate-fade-up">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-bold light-mode-heading">Translation Comparison</h3>
        
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-white/20 transition-all duration-200 ${
              isDark ? 'bg-white/10 border-white/10' : 'bg-gray-100 border-gray-200'
            }`}
          >
            <span className="light-mode-text">Example {activeExample.id} - {activeExample.targetLanguage}</span>
            <ChevronDown className={`w-4 h-4 ${isDark ? 'text-white/70' : 'text-gray-500'}`} />
          </button>
          
          {isDropdownOpen && (
            <div className={`absolute right-0 mt-2 w-72 rounded-md shadow-lg z-10 ${
              isDark ? 'bg-black/80 backdrop-blur-lg border border-white/10' : 'bg-white border border-gray-200'
            }`}>
              {examples.map((example) => (
                <button
                  key={example.id}
                  className={`w-full text-left px-4 py-2 transition-colors ${
                    isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleExampleChange(example)}
                >
                  <div className="light-mode-text">Example {example.id} - {example.targetLanguage}</div>
                  <div className={`text-xs truncate ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    {example.context}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {activeExample.context && (
        <div className={`mb-6 p-3 rounded-md ${
          isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
        }`}>
          <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
            <span className="font-semibold">Context:</span> {activeExample.context}
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Languages className="w-5 h-5 text-blue-400" />
            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
              Original Text ({activeExample.language})
            </span>
          </div>
          
          <div className={`p-4 rounded-md ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
          }`}>
            <p className={`${isDark ? 'text-white/90' : 'text-gray-800'}`}>{activeExample.originalText}</p>
          </div>
          
          <div className="flex justify-center">
            <div className={`p-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <ArrowLeftRight className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>GPT Subtitler</span>
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <span className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>({activeExample.targetLanguage})</span>
            </div>
            
            <div className={`p-4 rounded-md ${
              isDark ? 'bg-white/5 border border-blue-500/20' : 'bg-gray-50 border border-blue-200'
            }`}>
              <p className={`${isDark ? 'text-white/90' : 'text-gray-800'}`}>{activeExample.aiTranslation}</p>
              {activeExample.englishMeaning && (
                <div className={`mt-3 pt-3 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                  <p className={`text-xs italic ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    English meaning: {activeExample.englishMeaning}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  Generic Machine Translation
                </span>
                <X className="w-4 h-4 text-red-500" />
              </div>
              <span className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>({activeExample.targetLanguage})</span>
            </div>
            
            <div className={`p-4 rounded-md ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
            }`}>
              <p className={`${isDark ? 'text-white/90' : 'text-gray-800'}`}>{activeExample.machineTranslation}</p>
              {activeExample.englishMeaning && (
                <div className={`mt-3 pt-3 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                  <p className={`text-xs italic ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    English meaning: {activeExample.englishMeaning}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
          GPT Subtitler excels at translating idioms, cultural references, and complex expressions that trip up conventional machine translation.
        </p>
      </div>
    </div>
  );
};

export default TranslationComparison;
