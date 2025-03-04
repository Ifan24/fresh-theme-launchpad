
import { useState } from "react";
import { Check, X, ArrowLeftRight, Languages, ChevronDown } from "lucide-react";

interface TranslationExample {
  id: number;
  originalText: string;
  language: string;
  aiTranslation: string;
  machineTranslation: string;
  targetLanguage: string;
  englishMeaning?: string;
  context?: string; // Adding context to explain cultural references/puns
}

const examples: TranslationExample[] = [
  {
    id: 1,
    originalText: "It's raining cats and dogs outside, we should probably cancel our picnic.",
    language: "English",
    aiTranslation: "Идет сильный дождь, нам, наверное, стоит отменить пикник.",
    machineTranslation: "На улице дождь кошек и собак, нам, наверное, стоит отменить наш пикник.",
    targetLanguage: "Russian",
    englishMeaning: "It's raining heavily outside, we should probably cancel our picnic.",
    context: "Idiomatic expression: 'raining cats and dogs' means heavy rainfall, not literal animals falling"
  },
  {
    id: 2,
    originalText: "Break a leg for your performance tonight! I know you'll knock it out of the park.",
    language: "English",
    aiTranslation: "Bonne chance pour ton spectacle ce soir ! Je sais que tu vas cartonner.",
    machineTranslation: "Casse-toi une jambe pour ta performance ce soir ! Je sais que tu vas la faire sortir du parc.",
    targetLanguage: "French",
    englishMeaning: "Good luck for your performance tonight! I know you'll do amazingly well.",
    context: "Theatre slang: 'Break a leg' means 'good luck' and 'knock it out of the park' means to do exceptionally well"
  },
  {
    id: 3,
    originalText: "The early bird catches the worm, so let's meet at 6am to beat the traffic.",
    language: "English",
    aiTranslation: "Wer zuerst kommt, mahlt zuerst, also lass uns um 6 Uhr treffen, um dem Verkehr zuvorzukommen.",
    machineTranslation: "Der frühe Vogel fängt den Wurm, also treffen wir uns um 6 Uhr, um den Verkehr zu schlagen.",
    targetLanguage: "German",
    englishMeaning: "The early bird catches the worm, so let's meet at 6am to beat the traffic.",
    context: "Proverb: The AI uses the German equivalent proverb 'First come, first served' instead of literal translation"
  },
  {
    id: 4,
    originalText: "That movie was so bad, it made Battlefield Earth look like The Godfather.",
    language: "English",
    aiTranslation: "那部电影太糟糕了，比起它，《地球战场》简直就像《教父》一样经典。",
    machineTranslation: "那部电影太糟糕了，它使《地球战场》看起来像《教父》。",
    targetLanguage: "Chinese",
    englishMeaning: "That movie was so bad, it made Battlefield Earth look like The Godfather.",
    context: "Cultural reference: Comparing a bad movie to 'Battlefield Earth' (famously terrible) versus 'The Godfather' (critically acclaimed)"
  },
  {
    id: 5,
    originalText: "I'm feeling under the weather today, so I'll work from home.",
    language: "English",
    aiTranslation: "今日は体調が優れないので、家から仕事をします。",
    machineTranslation: "今日は天気の下で感じているので、家から仕事します。",
    targetLanguage: "Japanese",
    englishMeaning: "I'm feeling sick today, so I'll work from home.",
    context: "Idiomatic expression: 'under the weather' means feeling ill or sick"
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
            <span>Example {activeExample.id} - {activeExample.targetLanguage}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-black/80 backdrop-blur-lg border border-white/10 rounded-md shadow-lg z-10">
              {examples.map((example) => (
                <button
                  key={example.id}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                  onClick={() => handleExampleChange(example)}
                >
                  <div>Example {example.id} - {example.targetLanguage}</div>
                  <div className="text-xs text-white/60 truncate">{example.context}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {activeExample.context && (
        <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-md">
          <p className="text-sm text-white/80"><span className="font-semibold">Context:</span> {activeExample.context}</p>
        </div>
      )}
      
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
          GPT Subtitler excels at translating idioms, cultural references, and complex expressions that trip up conventional machine translation.
        </p>
      </div>
    </div>
  );
};

export default TranslationComparison;
