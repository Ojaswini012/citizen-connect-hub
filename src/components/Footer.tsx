import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import jansevaLogo from "@/assets/janseva-logo.jpeg";

interface FooterProps {
  language: string;
}

const translations = {
  en: {
    taglineSubtitle: "Service is the Supreme Duty",
    description: "Empowering citizens with AI-powered tools to access government schemes, file complaints, and understand their rights in their own language.",
    madeWith: "Made with",
    forCitizens: "for citizens of India",
    followUs: "Follow Us",
    quickLinks: "Quick Links",
    news: "Latest News",
    aiAssistant: "AI Assistant",
    fileComplaint: "File Complaint",
    resources: "Resources",
    aboutUs: "About Us",
    contact: "Contact",
    tollFree: "Toll Free",
    allRights: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    accessibility: "Accessibility",
  },
  hi: {
    taglineSubtitle: "सेवा ही सर्वोच्च कर्तव्य है",
    description: "नागरिकों को उनकी अपनी भाषा में सरकारी योजनाओं तक पहुंच, शिकायत दर्ज करने और अपने अधिकारों को समझने के लिए AI-संचालित उपकरणों से सशक्त बनाना।",
    madeWith: "बनाया गया",
    forCitizens: "भारत के नागरिकों के लिए",
    followUs: "हमें फॉलो करें",
    quickLinks: "त्वरित लिंक",
    news: "ताज़ा खबरें",
    aiAssistant: "AI सहायक",
    fileComplaint: "शिकायत दर्ज करें",
    resources: "संसाधन",
    aboutUs: "हमारे बारे में",
    contact: "संपर्क",
    tollFree: "टोल फ्री",
    allRights: "सर्वाधिकार सुरक्षित।",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    accessibility: "सुलभता",
  },
  mr: {
    taglineSubtitle: "सेवा हाच सर्वोच्च धर्म आहे",
    description: "नागरिकांना त्यांच्या स्वतःच्या भाषेत सरकारी योजना, तक्रारी आणि त्यांचे हक्क समजून घेण्यासाठी AI-संचालित साधनांनी सक्षम करणे।",
    madeWith: "बनवले",
    forCitizens: "भारतातील नागरिकांसाठी",
    followUs: "आम्हाला फॉलो करा",
    quickLinks: "जलद दुवे",
    news: "ताज्या बातम्या",
    aiAssistant: "AI सहाय्यक",
    fileComplaint: "तक्रार नोंदवा",
    resources: "संसाधने",
    aboutUs: "आमच्याबद्दल",
    contact: "संपर्क",
    tollFree: "टोल फ्री",
    allRights: "सर्व हक्क राखीव.",
    privacyPolicy: "गोपनीयता धोरण",
    termsOfService: "सेवा अटी",
    accessibility: "सुलभता",
  },
};

const Footer = ({ language }: FooterProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Tagline Banner */}
        <div className="text-center mb-10 pb-8 border-b border-background/20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            सेवा परमो धर्मः
          </h2>
          <p className="text-background/70 text-sm md:text-base">
            {t.taglineSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={jansevaLogo} 
                alt="JanSeva Logo" 
                className="w-12 h-12 rounded-xl object-cover"
              />
              <span className="text-xl font-bold">JanSeva</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              {t.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60 mb-6">
              {t.madeWith} <Heart className="w-4 h-4 text-destructive fill-destructive" /> {t.forCitizens}
            </div>
            
            {/* Social Media Handles */}
            <div>
              <h4 className="text-sm font-semibold mb-3">{t.followUs}</h4>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#news" className="hover:text-background transition-colors">{t.news}</a></li>
              <li><a href="#chatbot" className="hover:text-background transition-colors">{t.aiAssistant}</a></li>
              <li><a href="#complaints" className="hover:text-background transition-colors">{t.fileComplaint}</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">{t.resources}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t.aboutUs}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>jansevagovorg@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1800-XXX-XXXX ({t.tollFree})</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Amravati, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2025 JanSeva. {t.allRights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">{t.privacyPolicy}</a>
            <a href="#" className="hover:text-background transition-colors">{t.termsOfService}</a>
            <a href="#" className="hover:text-background transition-colors">{t.accessibility}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
