
import { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative flex items-start gap-4 p-6 glass-card rounded-lg opacity-0 animate-fade-up">
      <div className={`absolute -top-3 -left-3 ${isDark ? 'bg-white/10' : 'bg-blue-100'} backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center text-sm ${isDark ? 'border border-white/20' : 'border border-blue-200'}`}>
        {number}
      </div>
      <div className="mt-4">
        <div className={`${isDark ? 'bg-white/10' : 'bg-blue-100'} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2 light-mode-heading">{title}</h3>
        <p className="text-sm leading-relaxed light-mode-text">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
