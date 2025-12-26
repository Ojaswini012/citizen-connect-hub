import { useState } from "react";
import { Helmet } from "react-helmet";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea, { Message } from "@/components/chat/ChatArea";
import ProfileModal from "@/components/chat/ProfileModal";
import { cn } from "@/lib/utils";

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  preferredLanguage: string;
}

const initialGreeting = `Hello! I'm your JanSeva AI assistant. I can help you with:

• Government schemes & eligibility
• Job opportunities in your area
• Filing complaints & applications
• Local authority information

Ask me anything in Hindi, English, Marathi, or any Indian language!`;

const ChatPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeChatId, setActiveChatId] = useState<string | null>("1");
  const [isTyping, setIsTyping] = useState(false);

  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    {
      id: "1",
      title: "Government Schemes",
      lastMessage: "What schemes are available for farmers?",
      timestamp: new Date(),
    },
    {
      id: "2",
      title: "Ayushman Bharat",
      lastMessage: "How do I apply for Ayushman Bharat?",
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      title: "Job Opportunities",
      lastMessage: "Find jobs in Mumbai",
      timestamp: new Date(Date.now() - 86400000 * 2),
    },
  ]);

  const [chatMessages, setChatMessages] = useState<Record<string, Message[]>>({
    "1": [
      {
        id: "1-1",
        role: "assistant",
        content: initialGreeting,
        timestamp: new Date(),
      },
    ],
    "2": [
      {
        id: "2-1",
        role: "assistant",
        content: initialGreeting,
        timestamp: new Date(),
      },
    ],
    "3": [
      {
        id: "3-1",
        role: "assistant",
        content: initialGreeting,
        timestamp: new Date(),
      },
    ],
  });

  const [profile, setProfile] = useState<UserProfile>({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    state: "Maharashtra",
    district: "Mumbai",
    preferredLanguage: "en",
  });

  const currentMessages = activeChatId ? chatMessages[activeChatId] || [] : [];

  const handleNewChat = () => {
    const newId = Date.now().toString();
    const newChat: ChatHistory = {
      id: newId,
      title: "New Conversation",
      lastMessage: "",
      timestamp: new Date(),
    };
    
    setChatHistory((prev) => [newChat, ...prev]);
    setChatMessages((prev) => ({
      ...prev,
      [newId]: [
        {
          id: `${newId}-1`,
          role: "assistant",
          content: initialGreeting,
          timestamp: new Date(),
        },
      ],
    }));
    setActiveChatId(newId);
  };

  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
    // Close sidebar on mobile
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleDeleteChat = (id: string) => {
    setChatHistory((prev) => prev.filter((chat) => chat.id !== id));
    setChatMessages((prev) => {
      const newMessages = { ...prev };
      delete newMessages[id];
      return newMessages;
    });
    
    if (activeChatId === id) {
      const remaining = chatHistory.filter((chat) => chat.id !== id);
      setActiveChatId(remaining.length > 0 ? remaining[0].id : null);
    }
  };

  const handleSendMessage = (content: string) => {
    if (!activeChatId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setChatMessages((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), userMessage],
    }));

    // Update chat history title if it's a new conversation
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId && chat.title === "New Conversation"
          ? { ...chat, title: content.slice(0, 30) + "...", lastMessage: content }
          : chat.id === activeChatId
          ? { ...chat, lastMessage: content }
          : chat
      )
    );

    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for your question! Based on your query, I found several relevant government schemes. The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides financial support of ₹6,000 per year to farmer families. Would you like more details about eligibility?",
        "I understand you're looking for information. Let me help you with that. Could you provide your state and district so I can give you more specific information about local schemes and services?",
        "Great question! I can help you find job opportunities. Please share your qualifications and preferred location, and I'll search for relevant openings in government departments and public sector units.",
        "Based on your profile from Maharashtra, here are some state-specific schemes you might be eligible for:\n\n• Mahatma Jyotirao Phule Jan Arogya Yojana\n• Ladki Bahin Yojana\n• Shetkari Sanman Yojana\n\nWould you like more details on any of these?",
      ];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setChatMessages((prev) => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), assistantMessage],
      }));
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>JanSeva AI Chat - Your Government Services Assistant</title>
        <meta
          name="description"
          content="Chat with JanSeva AI to get information about government schemes, eligibility, and local services in Hindi, English, and Marathi."
        />
      </Helmet>

      <div className="h-screen flex overflow-hidden">
        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={cn(
            "fixed lg:relative z-50 h-full transition-transform duration-300 lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <ChatSidebar
            chatHistory={chatHistory}
            activeChatId={activeChatId}
            onNewChat={handleNewChat}
            onSelectChat={handleSelectChat}
            onDeleteChat={handleDeleteChat}
            onOpenProfile={() => setIsProfileOpen(true)}
          />
        </div>

        {/* Chat Area */}
        <ChatArea
          messages={currentMessages}
          onSendMessage={handleSendMessage}
          isTyping={isTyping}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Profile Modal */}
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          profile={profile}
          onSave={setProfile}
        />
      </div>
    </>
  );
};

export default ChatPage;
