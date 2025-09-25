import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import saubhagyaLogo from "@/assets/saubhagya-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("Home", "होम") },
    { href: "/corporate", label: t("Corporate", "कॉर्पोरेट") },
    { href: "/about", label: t("About Us", "हमारे बारे में") },
    { href: "/services", label: t("Services", "सेवाएं") },
    { href: "/contact", label: t("Contact", "संपर्क") },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={saubhagyaLogo} 
              alt="Project Saubhagya - Cow-centered biogas logo with circular arrow transforming into leaf" 
              className="h-10 w-10"
            />
            <div>
              <h2 className="font-poppins font-bold text-primary text-lg">Saubhagya</h2>
              <p className="font-noto-hindi text-xs text-muted-foreground">{t("", "सौभाग्य")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-poppins transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="text-primary hover:bg-primary/10"
            >
              <Languages className="h-4 w-4 mr-1" />
              {language === 'en' ? 'हिंदी' : 'Eng'}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+919876543210" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-poppins">{t("Call", "कॉल")}</span>
              </a>
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-green"
              asChild
            >
              <a href="https://wa.me/919876543210" className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="font-poppins">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-poppins transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-primary font-medium bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="mx-3 my-2 text-primary hover:bg-primary/10"
              >
                <Languages className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Switch to हिंदी' : 'Switch to English'}
              </Button>
              
              <div className="flex space-x-3 px-3 py-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 text-primary border-primary"
                  asChild
                >
                  <a href="tel:+919876543210" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{t("Call", "कॉल")}</span>
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground"
                  asChild
                >
                  <a href="https://wa.me/919876543210" className="flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;