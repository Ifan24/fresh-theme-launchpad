
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} className="text-white/80 dark:text-white/80" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-white/10 data-[state=unchecked]:bg-black/10"
      />
      <Moon size={16} className="text-white/80 dark:text-white/80" />
    </div>
  );
};

export default ThemeToggle;
