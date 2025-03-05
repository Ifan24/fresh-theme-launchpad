
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface ProviderLogoProps {
  name: string;
  delay: number;
}

const ProviderLogo = ({ name, delay }: ProviderLogoProps) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      className="flex flex-col items-center opacity-0" 
      style={{ 
        animation: `fade-up 0.5s ease-out ${delay}s forwards`
      }}
    >
      <div className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center transition-all duration-300 ${
        isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
      }`}>
        <span className={`text-xl ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{name.charAt(0)}</span>
      </div>
      <span className={`text-xs ${isDark ? 'text-white/70' : 'text-gray-600'}`}>{name}</span>
    </div>
  );
};

export default ProviderLogo;
