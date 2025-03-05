
import { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`rounded-lg p-6 transition-all duration-300 opacity-0 animate-fade-up ${
      isDark 
        ? "glass-card hover:bg-white/[0.07]" 
        : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
    }`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
        isDark ? "bg-white/10" : "bg-blue-100"
      }`}>
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className={`text-sm leading-relaxed ${
        isDark ? "text-white/70" : "text-gray-600"
      }`}>{description}</p>
    </div>
  );
};

export default FeatureCard;
