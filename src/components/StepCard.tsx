
import { ReactNode } from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <div className="relative flex items-start gap-4 p-6 glass-card rounded-lg opacity-0 animate-fade-up">
      <div className="absolute -top-3 -left-3 bg-white/10 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center text-sm border border-white/20">
        {number}
      </div>
      <div className="mt-4">
        <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
