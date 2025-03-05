
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-black/30 backdrop-blur-lg border-b border-white/10 py-3 dark:bg-black/30"
          : "bg-transparent py-5 dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity dark:text-white"
        >
          Your Brand
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Products", "Pricing", "Q&A", "ChangeLog", "Discover"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm text-white/80 hover:text-white transition-colors duration-200 dark:text-white/80 dark:hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link
            to="/login"
            className="text-sm text-white/80 hover:text-white transition-colors duration-200 dark:text-white/80 dark:hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md backdrop-blur-sm transition-all duration-200 border border-white/10 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/10"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
