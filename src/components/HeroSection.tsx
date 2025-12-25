import { ArrowRight, MessageSquare, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    title: "Your Voice, Your Rights",
    subtitle: "Empowering Citizens",
    description: "Access government schemes, file complaints, and get answers in your language. JanSeva bridges the gap between citizens and governance.",
    cta: "Start Chatting",
    secondary: "File a Complaint",
    stats: [
      { label: "Citizens Helped", value: "50,000+" },
      { label: "Languages", value: "10+" },
      { label: "Departments", value: "25+" },
    ],
  },
  hi: {
    title: "आपकी आवाज़, आपके अधिकार",
    subtitle: "नागरिकों को सशक्त बनाना",
    description: "सरकारी योजनाओं तक पहुंचें, शिकायतें दर्ज करें और अपनी भाषा में जवाब पाएं। जनसेवा नागरिकों और शासन के बीच की दूरी को पाटता है।",
    cta: "चैट शुरू करें",
    secondary: "शिकायत दर्ज करें",
    stats: [
      { label: "नागरिकों की मदद", value: "50,000+" },
      { label: "भाषाएं", value: "10+" },
      { label: "विभाग", value: "25+" },
    ],
  },
  mr: {
    title: "तुमचा आवाज, तुमचे हक्क",
    subtitle: "नागरिकांना सक्षम करणे",
    description: "सरकारी योजनांमध्ये प्रवेश करा, तक्रारी नोंदवा आणि तुमच्या भाषेत उत्तरे मिळवा. जनसेवा नागरिक आणि शासन यांच्यातील अंतर कमी करते.",
    cta: "चॅट सुरू करा",
    secondary: "तक्रार नोंदवा",
    stats: [
      { label: "नागरिकांना मदत", value: "50,000+" },
      { label: "भाषा", value: "10+" },
      { label: "विभाग", value: "25+" },
    ],
  },
};

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-civic-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            {t.subtitle}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
            {t.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1 text-balance">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-2">
            <Button
              size="xl"
              variant="hero"
              onClick={() => scrollToSection("#chatbot")}
              className="group w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5" />
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => scrollToSection("#complaints")}
              className="w-full sm:w-auto"
            >
              {t.secondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto animate-fade-in-up stagger-3">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card shadow-civic-sm">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features preview */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: MessageSquare,
              title: "Multilingual AI",
              desc: "Chat in Hindi, English, Marathi & more",
            },
            {
              icon: Shield,
              title: "Smart Complaints",
              desc: "Auto-generate professional letters",
            },
            {
              icon: Users,
              title: "Citizen Community",
              desc: "Learn from success stories",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl shadow-civic-sm hover:shadow-civic-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
