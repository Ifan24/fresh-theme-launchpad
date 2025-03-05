
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { key: "products", label: t("navbar.products") },
    { key: "pricing", label: t("navbar.pricing") },
    { key: "qa", label: t("navbar.qa") },
    { key: "changelog", label: t("navbar.changelog") },
    { key: "discover", label: t("navbar.discover") }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark 
            ? "bg-black/30 backdrop-blur-lg border-b border-white/10 py-3" 
            : "bg-white/90 backdrop-blur-lg border-b border-gray-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className={`text-xl font-bold tracking-tight hover:opacity-80 transition-opacity ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          GPT Subtitler
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={`/${item.key}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                isDark 
                  ? "text-white/80 hover:text-white" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/login"
            className={`text-sm font-medium transition-colors duration-200 ${
              isDark 
                ? "text-white/80 hover:text-white" 
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {t("navbar.login")}
          </Link>
          <Link
            to="/signup"
            className={`text-sm px-4 py-2 rounded-md transition-all duration-200 ${
              isDark 
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/10" 
                : "bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 shadow-sm"
            }`}
          >
            {t("navbar.signup")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
