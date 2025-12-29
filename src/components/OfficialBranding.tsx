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
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <div className="text-center text-white">
                <div className="text-lg md:text-2xl font-bold">Digital</div>
                <div className="text-sm md:text-lg font-semibold">India</div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{t.digitalIndia}</span>
          </div>

          {/* PM Modi Photo */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:shadow-xl group-hover:border-primary/50 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=200&h=200&fit=crop&crop=face" 
                alt="Prime Minister"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{t.primeMinister}</span>
          </div>

          {/* Satyamev Jayate / National Emblem */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-1">🇮🇳</div>
                <div className="text-sm md:text-base font-bold text-primary">सत्यमेव जयते</div>
                <div className="text-xs text-muted-foreground">{t.satyamev}</div>
              </div>
            </div>
          </div>

          {/* Make in India */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <div className="text-center text-white">
                <div className="text-base md:text-xl font-bold">Make in</div>
                <div className="text-sm md:text-lg font-semibold">India</div>
                <div className="text-xl md:text-2xl">🦁</div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{t.makeInIndia}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialBranding;
