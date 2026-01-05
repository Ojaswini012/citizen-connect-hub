import { useState } from "react";
import { Menu, X, Globe, MessageSquare, FileText, BookOpen, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import jansevaLogo from "@/assets/janseva-logo.jpeg";

const languages = [
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "hi", name: "Hindi", native: "हिंदी", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", native: "मराठी", flag: "🇮🇳" },
];

const translations = {
  en: {
    chatbot: "AI Assistant",
    complaints: "Complaints",
    blog: "Resources",
    news: "News",
    selectLanguage: "Select Language",
  },
  hi: {
    chatbot: "AI सहायक",
    complaints: "शिकायतें",
    blog: "संसाधन",
    news: "समाचार",
    selectLanguage: "भाषा चुनें",
  },
  mr: {
    chatbot: "AI सहाय्यक",
    complaints: "तक्रारी",
    blog: "संसाधने",
    news: "बातम्या",
    selectLanguage: "भाषा निवडा",
  },
};

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navbar = ({ currentLanguage, onLanguageChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === currentLanguage) || languages[0];
  const t = translations[currentLanguage as keyof typeof translations] || translations.en;

  const navLinks = [
    { href: "#news", label: t.news, icon: Newspaper },
    { href: "#chatbot", label: t.chatbot, icon: MessageSquare },
    { href: "#complaints", label: t.complaints, icon: FileText },
    { href: "#blog", label: t.blog, icon: BookOpen },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={jansevaLogo} 
              alt="JanSeva Logo"
              className="w-10 h-10 rounded-xl object-cover shadow-civic-md group-hover:shadow-civic-lg transition-shadow"
            />
            <span className="text-xl font-bold text-foreground">
              JanSeva
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 border-primary/30 hover:border-primary">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="hidden sm:inline">{currentLang.flag} {currentLang.native}</span>
                  <span className="sm:hidden">{currentLang.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  {t.selectLanguage}
                </div>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`cursor-pointer ${currentLanguage === lang.code ? "bg-primary/10 text-primary" : ""}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span className="font-medium">{lang.native}</span>
                    <span className="ml-auto text-muted-foreground text-xs">
                      {lang.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
