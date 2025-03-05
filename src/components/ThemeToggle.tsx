
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} className={`${isDark ? 'text-white/60' : 'text-yellow-500'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className={`${isDark ? 'data-[state=checked]:bg-white/10' : 'data-[state=unchecked]:bg-black/10'}`}
      />
      <Moon size={16} className={`${isDark ? 'text-white/90' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeToggle;
