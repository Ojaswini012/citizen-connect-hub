import { useState } from "react";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Understanding PM Kisan Yojana: Complete Guide",
    titleHi: "पीएम किसान योजना को समझें: संपूर्ण गाइड",
    titleMr: "पीएम किसान योजना समजून घ्या: संपूर्ण मार्गदर्शक",
    excerpt: "Learn about eligibility criteria, application process, and how to check your payment status for PM Kisan Samman Nidhi.",
    excerptHi: "पीएम किसान सम्मान निधि के लिए पात्रता मानदंड, आवेदन प्रक्रिया और भुगतान स्थिति कैसे जांचें।",
    excerptMr: "पीएम किसान सम्मान निधीसाठी पात्रता निकष, अर्ज प्रक्रिया आणि पेमेंट स्थिती कशी तपासायची ते जाणून घ्या.",
    category: "Schemes",
    readTime: "5 min",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "How Citizens Changed Their Ward: A Success Story",
    titleHi: "कैसे नागरिकों ने अपना वार्ड बदला: एक सफलता की कहानी",
    titleMr: "नागरिकांनी आपला वार्ड कसा बदलला: एक यशोगाथा",
    excerpt: "Read how residents of Ward 15 used collective complaints to get better roads and street lights within 3 months.",
    excerptHi: "जानें कैसे वार्ड 15 के निवासियों ने सामूहिक शिकायतों का उपयोग करके 3 महीने में बेहतर सड़कें और स्ट्रीट लाइट्स प्राप्त कीं।",
    excerptMr: "वार्ड 15 च्या रहिवाशांनी 3 महिन्यांत चांगले रस्ते आणि स्ट्रीट लाइट्स मिळवण्यासाठी सामूहिक तक्रारी कशा वापरल्या ते वाचा.",
    category: "Success Stories",
    readTime: "4 min",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Your Rights as a Citizen: Know Before You Complain",
    titleHi: "एक नागरिक के रूप में आपके अधिकार: शिकायत करने से पहले जानें",
    titleMr: "नागरिक म्हणून तुमचे हक्क: तक्रार करण्यापूर्वी जाणून घ्या",
    excerpt: "Understanding RTI, grievance redressal timelines, and your legal rights when dealing with government offices.",
    excerptHi: "आरटीआई, शिकायत निवारण समय-सीमा और सरकारी कार्यालयों से निपटने के दौरान आपके कानूनी अधिकारों को समझें।",
    excerptMr: "आरटीआय, तक्रार निवारण मुदत आणि सरकारी कार्यालयांशी व्यवहार करताना तुमचे कायदेशीर हक्क समजून घ्या.",
    category: "Rights",
    readTime: "6 min",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Using JanSeva: A Step-by-Step Tutorial",
    titleHi: "जनसेवा का उपयोग: चरण-दर-चरण ट्यूटोरियल",
    titleMr: "जनसेवा वापरणे: चरण-दर-चरण मार्गदर्शक",
    excerpt: "Complete guide on how to use all features of JanSeva platform including AI chatbot, complaint creation, and more.",
    excerptHi: "AI चैटबॉट, शिकायत निर्माण और अधिक सहित जनसेवा प्लेटफॉर्म की सभी सुविधाओं का उपयोग कैसे करें।",
    excerptMr: "AI चॅटबॉट, तक्रार निर्मिती आणि अधिक सहित जनसेवा प्लॅटफॉर्मच्या सर्व वैशिष्ट्यांचा वापर कसा करायचा.",
    category: "Tutorial",
    readTime: "8 min",
    date: "2024-01-01",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  },
];

const translations = {
  en: {
    title: "Learn & Explore",
    subtitle: "Articles, tutorials, and success stories to help you navigate public services",
    readMore: "Read More",
    viewAll: "View All Articles",
    summaryLabel: "AI Summary",
    getSummary: "Get AI Summary",
    categories: {
      Schemes: "Schemes",
      "Success Stories": "Success Stories",
      Rights: "Rights",
      Tutorial: "Tutorial",
    },
  },
  hi: {
    title: "सीखें और जानें",
    subtitle: "सार्वजनिक सेवाओं को समझने में मदद के लिए लेख, ट्यूटोरियल और सफलता की कहानियां",
    readMore: "और पढ़ें",
    viewAll: "सभी लेख देखें",
    summaryLabel: "AI सारांश",
    getSummary: "AI सारांश प्राप्त करें",
    categories: {
      Schemes: "योजनाएं",
      "Success Stories": "सफलता की कहानियां",
      Rights: "अधिकार",
      Tutorial: "ट्यूटोरियल",
    },
  },
  mr: {
    title: "शिका आणि जाणून घ्या",
    subtitle: "सार्वजनिक सेवांमध्ये मदत करण्यासाठी लेख, ट्यूटोरियल आणि यशोगाथा",
    readMore: "अधिक वाचा",
    viewAll: "सर्व लेख पहा",
    summaryLabel: "AI सारांश",
    getSummary: "AI सारांश मिळवा",
    categories: {
      Schemes: "योजना",
      "Success Stories": "यशोगाथा",
      Rights: "हक्क",
      Tutorial: "ट्यूटोरियल",
    },
  },
};

interface BlogSectionProps {
  language: string;
}

const BlogSection = ({ language }: BlogSectionProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;
  const [expandedSummary, setExpandedSummary] = useState<number | null>(null);
  const [summaries, setSummaries] = useState<Record<number, string>>({});

  const getTitle = (post: typeof blogPosts[0]) => {
    if (language === "hi") return post.titleHi;
    if (language === "mr") return post.titleMr;
    return post.title;
  };

  const getExcerpt = (post: typeof blogPosts[0]) => {
    if (language === "hi") return post.excerptHi;
    if (language === "mr") return post.excerptMr;
    return post.excerpt;
  };

  const getCategoryName = (category: string) => {
    return t.categories[category as keyof typeof t.categories] || category;
  };

  const handleGetSummary = (postId: number) => {
    if (summaries[postId]) {
      setExpandedSummary(expandedSummary === postId ? null : postId);
      return;
    }

    // Simulate AI summary generation
    setTimeout(() => {
      setSummaries({
        ...summaries,
        [postId]: "This article explains the key points about the topic, including eligibility requirements, step-by-step application process, important deadlines, and tips for successful completion. The main takeaway is that citizens should gather all required documents before starting the process.",
      });
      setExpandedSummary(postId);
    }, 1000);
  };

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-civic-sm hover:shadow-civic-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={getTitle(post)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-card/90 text-foreground backdrop-blur-sm">
                  {getCategoryName(post.category)}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {getTitle(post)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {getExcerpt(post)}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* AI Summary Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs mb-2"
                  onClick={() => handleGetSummary(post.id)}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t.getSummary}
                  <ChevronRight
                    className={`w-3 h-3 ml-auto transition-transform ${
                      expandedSummary === post.id ? "rotate-90" : ""
                    }`}
                  />
                </Button>

                {/* Summary */}
                {expandedSummary === post.id && summaries[post.id] && (
                  <div className="p-3 bg-muted rounded-lg text-xs text-muted-foreground animate-fade-in mb-3">
                    <div className="flex items-center gap-1 text-primary font-medium mb-1">
                      <Sparkles className="w-3 h-3" />
                      {t.summaryLabel}
                    </div>
                    {summaries[post.id]}
                  </div>
                )}

                {/* Read More */}
                <Button variant="ghost" size="sm" className="w-full group/btn">
                  {t.readMore}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            {t.viewAll}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
