import { useState, useEffect } from "react";
import { Newspaper, ExternalLink, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import digitalIndiaImg from "@/assets/digital-india.png";
import ayushmanBharatImg from "@/assets/ayushman-bharat.png";

interface NewsHeadlinesProps {
  language: string;
}

const translations = {
  en: {
    title: "Latest News & Updates",
    subtitle: "Stay informed with the latest government announcements",
    readMore: "Read More",
    hoursAgo: "hours ago",
  },
  hi: {
    title: "ताज़ा खबरें और अपडेट",
    subtitle: "नवीनतम सरकारी घोषणाओं से अवगत रहें",
    readMore: "और पढ़ें",
    hoursAgo: "घंटे पहले",
  },
  mr: {
    title: "ताज्या बातम्या आणि अपडेट्स",
    subtitle: "नवीनतम सरकारी घोषणांची माहिती घ्या",
    readMore: "अधिक वाचा",
    hoursAgo: "तासांपूर्वी",
  },
};

const newsData = [
  {
    id: 1,
    title: { en: "PM Modi launches new Digital India initiative", hi: "पीएम मोदी ने नई डिजिटल इंडिया पहल शुरू की", mr: "पंतप्रधान मोदींनी नवीन डिजिटल इंडिया उपक्रम सुरू केला" },
    category: { en: "Digital India", hi: "डिजिटल इंडिया", mr: "डिजिटल इंडिया" },
    time: 2,
    image: digitalIndiaImg,
  },
  {
    id: 2,
    title: { en: "Ayushman Bharat benefits extended to more citizens", hi: "आयुष्मान भारत का लाभ अधिक नागरिकों तक पहुंचाया गया", mr: "आयुष्मान भारतचे फायदे अधिक नागरिकांपर्यंत वाढवले" },
    category: { en: "Healthcare", hi: "स्वास्थ्य", mr: "आरोग्य" },
    time: 5,
    image: ayushmanBharatImg,
  },
  {
    id: 3,
    title: { en: "New employment scheme announced for youth", hi: "युवाओं के लिए नई रोजगार योजना की घोषणा", mr: "तरुणांसाठी नवीन रोजगार योजना जाहीर" },
    category: { en: "Employment", hi: "रोजगार", mr: "रोजगार" },
    time: 8,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: { en: "Farmers to receive direct benefit transfers", hi: "किसानों को सीधे लाभ हस्तांतरण मिलेगा", mr: "शेतकऱ्यांना थेट लाभ हस्तांतरण मिळणार" },
    category: { en: "Agriculture", hi: "कृषि", mr: "शेती" },
    time: 12,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
  },
];

const NewsHeadlines = ({ language }: NewsHeadlinesProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="news" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30 bg-primary/5">
            <Newspaper className="w-4 h-4 mr-2" />
            {t.title}
          </Badge>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <Card 
              key={news.id} 
              className={`group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title[language as keyof typeof news.title] || news.title.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {news.category[language as keyof typeof news.category] || news.category.en}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title[language as keyof typeof news.title] || news.title.en}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {news.time} {t.hoursAgo}
                  </span>
                  <Button variant="ghost" size="sm" className="text-xs p-0 h-auto text-primary">
                    {t.readMore} <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHeadlines;
