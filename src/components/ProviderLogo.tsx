
import { useState } from "react";

interface ProviderLogoProps {
  name: string;
  delay: number;
}

const ProviderLogo = ({ name, delay }: ProviderLogoProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      className="flex flex-col items-center opacity-0" 
      style={{ 
        animation: `fade-up 0.5s ease-out ${delay}s forwards`
      }}
    >
      <div className="w-12 h-12 mb-2 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
        <span className="text-white/80 text-xl">{name.charAt(0)}</span>
      </div>
      <span className="text-white/70 text-xs">{name}</span>
    </div>
  );
};

export default ProviderLogo;
