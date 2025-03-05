
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark 
            ? "bg-black/30 backdrop-blur-lg border-b border-white/10 py-3" 
            : "bg-white/70 backdrop-blur-lg border-b border-black/10 py-3"
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
          Your Brand
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Products", "Pricing", "Q&A", "ChangeLog", "Discover"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`text-sm hover:opacity-100 transition-colors duration-200 ${
                isDark ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link
            to="/login"
            className={`text-sm transition-colors duration-200 ${
              isDark ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`text-sm px-4 py-2 rounded-md backdrop-blur-sm transition-all duration-200 ${
              isDark 
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/10" 
                : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
            }`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
