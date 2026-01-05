import digitalIndiaImg from "@/assets/digital-india.png";
import pmModiImg from "@/assets/pm-modi.jpg";
import satyamevJayateImg from "@/assets/satyamev-jayate.jpg";
import makeInIndiaImg from "@/assets/made-in-india.png";

interface OfficialBrandingProps {
  language: string;
}

const translations = {
  en: {
    digitalIndia: "Digital India",
    primeMinister: "Hon'ble Prime Minister",
    satyamev: "Truth Alone Triumphs",
    makeInIndia: "Make in India",
  },
  hi: {
    digitalIndia: "डिजिटल इंडिया",
    primeMinister: "माननीय प्रधानमंत्री",
    satyamev: "सत्य की ही जीत होती है",
    makeInIndia: "मेक इन इंडिया",
  },
  mr: {
    digitalIndia: "डिजिटल इंडिया",
    primeMinister: "मा. पंतप्रधान",
    satyamev: "सत्याचाच विजय होतो",
    makeInIndia: "मेक इन इंडिया",
  },
};

const OfficialBranding = ({ language }: OfficialBrandingProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="pt-20 pb-8 bg-gradient-to-b from-primary/5 to-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {/* Digital India Logo */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden bg-[#1a1a2e] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <img 
                src={digitalIndiaImg} 
                alt="Digital India"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <span className="text-xs text-muted-foreground">{t.digitalIndia}</span>
          </div>

          {/* PM Modi Photo */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:shadow-xl group-hover:border-primary/50 transition-all">
              <img 
                src={pmModiImg} 
                alt="Prime Minister Narendra Modi"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{t.primeMinister}</span>
          </div>

          {/* Satyamev Jayate / National Emblem */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <img 
                src={satyamevJayateImg} 
                alt="Satyamev Jayate - National Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs text-muted-foreground">{t.satyamev}</span>
          </div>

          {/* Make in India */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <img 
                src={makeInIndiaImg} 
                alt="Make in India"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <span className="text-xs text-muted-foreground">{t.makeInIndia}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialBranding;
