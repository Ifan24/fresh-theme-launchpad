
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'zh', name: t('language.zh') }
  ];

  return (
    <div className="relative">
      <button 
        className={`flex items-center gap-1 text-sm px-2 py-1 rounded-md transition-all duration-200 ${
          isDark 
            ? "text-white/80 hover:text-white hover:bg-white/10" 
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span>{i18n.language === 'zh' ? '中文' : 'EN'}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      
      {isOpen && (
        <div 
          className={`absolute top-full right-0 mt-1 py-1 rounded-md shadow-lg z-50 min-w-32 ${
            isDark ? "bg-gray-900 border border-white/10" : "bg-white border border-gray-200"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                i18n.language === lang.code 
                  ? isDark ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"
                  : isDark ? "text-white/80 hover:bg-white/5" : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
