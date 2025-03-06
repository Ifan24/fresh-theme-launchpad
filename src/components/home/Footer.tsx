
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4 light-mode-heading">GPT Subtitler</h3>
            <p className="light-mode-muted text-sm">
              AI-powered subtitle translation with deep context understanding for creators worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3 light-mode-subheading">Product</h4>
            <ul className="space-y-2">
              {[
                { key: "features", label: "Features" },
                { key: "pricing", label: "Pricing" },
                { key: "useCases", label: "Use Cases" },
                { key: "integrations", label: "Integrations" }
              ].map((item) => (
                <li key={item.key}>
                  <a href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3 light-mode-subheading">Resources</h4>
            <ul className="space-y-2">
              {[
                { key: "documentation", label: "Documentation" },
                { key: "api", label: "API" },
                { key: "guides", label: "Guides" },
                { key: "support", label: "Support" }
              ].map((item) => (
                <li key={item.key}>
                  <a href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3 light-mode-subheading">Company</h4>
            <ul className="space-y-2">
              {[
                { key: "about", label: "About" },
                { key: "blog", label: "Blog" },
                { key: "careers", label: "Careers" },
                { key: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.key}>
                  <a href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-white/60 text-sm">
            © {new Date().getFullYear()} GPT Subtitler. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {[
              { key: "terms", label: "Terms" },
              { key: "privacy", label: "Privacy" },
              { key: "cookies", label: "Cookies" }
            ].map((item) => (
              <a key={item.key} href="#" className="text-gray-600 dark:text-white/60 text-sm hover:text-blue-600 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
