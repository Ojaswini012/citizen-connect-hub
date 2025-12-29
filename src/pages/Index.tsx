import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsHeadlines from "@/components/NewsHeadlines";
import ChatbotSection from "@/components/ChatbotSection";
import ComplaintSection from "@/components/ComplaintSection";
import BlogSection from "@/components/BlogSection";
import OfficialBranding from "@/components/OfficialBranding";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Helmet>
        <title>JanSeva - Citizen Services Platform | Government Schemes & Complaints</title>
        <meta 
          name="description" 
          content="Access government schemes, file complaints, and get answers in Hindi, English, Marathi & more. AI-powered citizen services platform for India." 
        />
        <meta name="keywords" content="government schemes, citizen services, complaint portal, India, Hindi, Marathi, AI assistant" />
        <meta property="og:title" content="JanSeva - Citizen Services Platform" />
        <meta property="og:description" content="Empowering citizens with AI-powered tools to access government schemes and file complaints in their own language." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://janseva.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar currentLanguage={language} onLanguageChange={setLanguage} />
        <OfficialBranding />
        
        <main>
          <HeroSection language={language} />
          <NewsHeadlines language={language} />
          <ChatbotSection language={language} />
          <ComplaintSection language={language} />
          <BlogSection language={language} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
