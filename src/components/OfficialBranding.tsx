import { Card } from "@/components/ui/card";

const OfficialBranding = () => {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {/* Digital India Logo */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <div className="text-center text-white">
                <div className="text-2xl md:text-3xl font-bold">Digital</div>
                <div className="text-lg md:text-xl font-semibold">India</div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">डिजिटल इंडिया</span>
          </div>

          {/* PM Modi Photo */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:shadow-xl group-hover:border-primary/50 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=200&h=200&fit=crop&crop=face" 
                alt="Government Official"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">माननीय प्रधानमंत्री</span>
          </div>

          {/* Satyamev Jayate / National Emblem */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl md:text-6xl mb-1">🇮🇳</div>
                <div className="text-sm md:text-base font-bold text-primary">सत्यमेव जयते</div>
                <div className="text-xs text-muted-foreground">Truth Alone Triumphs</div>
              </div>
            </div>
          </div>

          {/* Make in India */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <div className="text-center text-white">
                <div className="text-xl md:text-2xl font-bold">Make in</div>
                <div className="text-lg md:text-xl font-semibold">India</div>
                <div className="text-2xl">🦁</div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">मेक इन इंडिया</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialBranding;
