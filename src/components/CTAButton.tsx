
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const CTAButton = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  ...props
}: CTAButtonProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";
  
  const variantStyles = {
    primary: isDark 
      ? "bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50 focus:ring-white/20" 
      : "bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 focus:ring-blue-200 shadow-sm",
    secondary: isDark
      ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 focus:ring-white/20"
      : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 focus:ring-gray-200",
    outline: isDark
      ? "bg-transparent hover:bg-white/5 text-white border border-white/20 focus:ring-white/20"
      : "bg-transparent hover:bg-gray-50 text-gray-800 border border-gray-300 focus:ring-gray-200",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  // Add animated background glow effect for primary variant in dark mode
  const glowEffect = (variant === "primary" && isDark) ? 
    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600/0 before:via-blue-400/40 before:to-blue-600/0 before:blur-xl before:opacity-0 before:transition-opacity before:duration-1000 hover:before:opacity-100 before:-z-10" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizes[size],
        glowEffect,
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {(variant === "primary" && isDark) && (
        <span className="absolute inset-0 overflow-hidden rounded-md -z-10">
          <span className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-600/50 via-blue-500/30 to-purple-600/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
        </span>
      )}
    </button>
  );
};

export default CTAButton;
