import { useState, useRef, useEffect } from "react";
import { Send, Mic, MicOff, Bot, User, Sparkles, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const translations = {
  en: {
    title: "AI Assistant",
    subtitle: "Ask about government schemes, eligibility, or local services",
    placeholder: "Type your question in any language...",
    voiceHint: "Click mic to speak",
    suggestions: [
      "What schemes are available for farmers?",
      "How do I apply for Ayushman Bharat?",
      "Find job opportunities in my area",
      "Check my eligibility for PM Kisan",
    ],
    greeting: "Hello! I'm your JanSeva assistant. I can help you with:\n\n• Government schemes & eligibility\n• Job opportunities\n• Filing complaints\n• Local authority information\n\nAsk me anything in Hindi, English, Marathi, or any Indian language!",
  },
  hi: {
    title: "AI सहायक",
    subtitle: "सरकारी योजनाओं, पात्रता या स्थानीय सेवाओं के बारे में पूछें",
    placeholder: "अपना सवाल किसी भी भाषा में टाइप करें...",
    voiceHint: "बोलने के लिए माइक पर क्लिक करें",
    suggestions: [
      "किसानों के लिए कौन सी योजनाएं उपलब्ध हैं?",
      "आयुष्मान भारत के लिए कैसे आवेदन करें?",
      "मेरे क्षेत्र में नौकरी के अवसर खोजें",
      "पीएम किसान के लिए मेरी पात्रता जांचें",
    ],
    greeting: "नमस्ते! मैं आपका जनसेवा सहायक हूं। मैं इनमें आपकी मदद कर सकता हूं:\n\n• सरकारी योजनाएं और पात्रता\n• नौकरी के अवसर\n• शिकायतें दर्ज करना\n• स्थानीय प्राधिकरण की जानकारी\n\nहिंदी, अंग्रेजी, मराठी या किसी भी भारतीय भाषा में मुझसे कुछ भी पूछें!",
  },
  mr: {
    title: "AI सहाय्यक",
    subtitle: "सरकारी योजना, पात्रता किंवा स्थानिक सेवांबद्दल विचारा",
    placeholder: "तुमचा प्रश्न कोणत्याही भाषेत टाइप करा...",
    voiceHint: "बोलण्यासाठी माइकवर क्लिक करा",
    suggestions: [
      "शेतकऱ्यांसाठी कोणत्या योजना उपलब्ध आहेत?",
      "आयुष्मान भारतसाठी कसे अर्ज करावे?",
      "माझ्या भागातील नोकरीच्या संधी शोधा",
      "पीएम किसानसाठी माझी पात्रता तपासा",
    ],
    greeting: "नमस्कार! मी तुमचा जनसेवा सहाय्यक आहे. मी यामध्ये मदत करू शकतो:\n\n• सरकारी योजना आणि पात्रता\n• नोकरीच्या संधी\n• तक्रारी नोंदवणे\n• स्थानिक प्राधिकरण माहिती\n\nहिंदी, इंग्रजी, मराठी किंवा कोणत्याही भारतीय भाषेत मला काहीही विचारा!",
  },
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatbotSectionProps {
  language: string;
}

const ChatbotSection = ({ language }: ChatbotSectionProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: t.greeting,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for your question! Based on your query, I found several relevant government schemes. The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides financial support of ₹6,000 per year to farmer families. Would you like more details about eligibility?",
        "I understand you're looking for information. Let me help you with that. Could you provide your state and district so I can give you more specific information about local schemes and services?",
        "Great question! I can help you find job opportunities. Please share your qualifications and preferred location, and I'll search for relevant openings in government departments and public sector units.",
      ];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleListening = () => {
    if (!isListening) {
      toast({
        title: "Voice Input",
        description: "Voice recognition started. Speak now...",
      });
    }
    setIsListening(!isListening);
    
    if (!isListening) {
      // Simulate voice input
      setTimeout(() => {
        setInput("What schemes are available for small business owners?");
        setIsListening(false);
        toast({
          title: "Voice Captured",
          description: "Your question has been transcribed.",
        });
      }, 2000);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <section id="chatbot" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-muted-foreground text-lg">{t.subtitle}</p>
          </div>

          {/* Chat Container */}
          <div className="bg-card rounded-2xl shadow-civic-lg overflow-hidden border border-border">
            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  } animate-fade-in`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "gradient-hero text-primary-foreground"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Bot className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm md:text-base">
                      {message.content}
                    </p>
                    {message.role === "assistant" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 h-8 text-xs opacity-70 hover:opacity-100"
                      >
                        <Volume2 className="w-3 h-3 mr-1" />
                        Listen
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary p-4 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-6 py-3 border-t border-border bg-muted/30">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {t.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="flex-shrink-0 px-3 py-1.5 text-xs bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <Button
                  variant={isListening ? "destructive" : "secondary"}
                  size="icon"
                  onClick={toggleListening}
                  className="flex-shrink-0"
                >
                  {isListening ? (
                    <MicOff className="w-5 h-5" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </Button>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.placeholder}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 h-11"
                />
                <Button onClick={handleSend} disabled={!input.trim()}>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {t.voiceHint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
