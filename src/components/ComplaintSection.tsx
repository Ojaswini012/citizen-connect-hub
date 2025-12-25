import { useState } from "react";
import { FileText, Mic, MicOff, Download, Building2, Zap, Droplets, ShieldAlert, Bus, Trash2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const translations = {
  en: {
    title: "Smart Complaint Creator",
    subtitle: "Describe your issue in any language. We'll create a professional letter for you.",
    placeholder: "Describe your complaint here... (e.g., 'मेरे मोहल्ले में पानी की समस्या है' or 'Road is damaged near my house')",
    voiceBtn: "Speak Complaint",
    stopBtn: "Stop Recording",
    generateBtn: "Generate Letter",
    downloadBtn: "Download PDF",
    departmentLabel: "Suggested Department",
    previewLabel: "Professional Letter Preview",
    originalLabel: "Your Original Text",
    departments: {
      municipal: "Municipal Corporation",
      police: "Police Department",
      electricity: "Electricity Board",
      water: "Water Supply Department",
      transport: "Transport Authority",
      sanitation: "Sanitation Department",
    },
    steps: [
      { title: "Describe Issue", desc: "In any language" },
      { title: "AI Processing", desc: "Auto-translate & format" },
      { title: "Download Letter", desc: "Ready for submission" },
    ],
  },
  hi: {
    title: "स्मार्ट शिकायत निर्माता",
    subtitle: "अपनी समस्या किसी भी भाषा में बताएं। हम आपके लिए एक पेशेवर पत्र बनाएंगे।",
    placeholder: "अपनी शिकायत यहां बताएं... (उदाहरण: 'मेरे मोहल्ले में पानी की समस्या है' या 'मेरे घर के पास सड़क खराब है')",
    voiceBtn: "शिकायत बोलें",
    stopBtn: "रिकॉर्डिंग बंद करें",
    generateBtn: "पत्र बनाएं",
    downloadBtn: "पीडीएफ डाउनलोड करें",
    departmentLabel: "सुझावित विभाग",
    previewLabel: "पेशेवर पत्र पूर्वावलोकन",
    originalLabel: "आपका मूल टेक्स्ट",
    departments: {
      municipal: "नगर निगम",
      police: "पुलिस विभाग",
      electricity: "बिजली बोर्ड",
      water: "जल आपूर्ति विभाग",
      transport: "परिवहन प्राधिकरण",
      sanitation: "स्वच्छता विभाग",
    },
    steps: [
      { title: "समस्या बताएं", desc: "किसी भी भाषा में" },
      { title: "AI प्रोसेसिंग", desc: "ऑटो-ट्रांसलेट और फॉर्मेट" },
      { title: "पत्र डाउनलोड करें", desc: "जमा करने के लिए तैयार" },
    ],
  },
  mr: {
    title: "स्मार्ट तक्रार निर्माता",
    subtitle: "तुमची समस्या कोणत्याही भाषेत वर्णन करा. आम्ही तुमच्यासाठी एक व्यावसायिक पत्र तयार करू.",
    placeholder: "तुमची तक्रार येथे वर्णन करा... (उदा: 'माझ्या भागात पाण्याची समस्या आहे' किंवा 'माझ्या घराजवळ रस्ता खराब आहे')",
    voiceBtn: "तक्रार बोला",
    stopBtn: "रेकॉर्डिंग थांबवा",
    generateBtn: "पत्र तयार करा",
    downloadBtn: "पीडीएफ डाउनलोड करा",
    departmentLabel: "सुचवलेला विभाग",
    previewLabel: "व्यावसायिक पत्र पूर्वावलोकन",
    originalLabel: "तुमचा मूळ मजकूर",
    departments: {
      municipal: "महानगरपालिका",
      police: "पोलीस विभाग",
      electricity: "वीज मंडळ",
      water: "पाणी पुरवठा विभाग",
      transport: "वाहतूक प्राधिकरण",
      sanitation: "स्वच्छता विभाग",
    },
    steps: [
      { title: "समस्या वर्णन करा", desc: "कोणत्याही भाषेत" },
      { title: "AI प्रक्रिया", desc: "ऑटो-ट्रान्सलेट आणि फॉर्मेट" },
      { title: "पत्र डाउनलोड करा", desc: "सबमिशनसाठी तयार" },
    ],
  },
};

const departmentIcons = {
  municipal: Building2,
  police: ShieldAlert,
  electricity: Zap,
  water: Droplets,
  transport: Bus,
  sanitation: Trash2,
};

interface ComplaintSectionProps {
  language: string;
}

const ComplaintSection = ({ language }: ComplaintSectionProps) => {
  const t = translations[language as keyof typeof translations] || translations.en;
  const { toast } = useToast();
  const [complaint, setComplaint] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [suggestedDepartment, setSuggestedDepartment] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const toggleRecording = () => {
    if (!isRecording) {
      toast({
        title: "Recording Started",
        description: "Speak your complaint clearly...",
      });
      setIsRecording(true);
      
      // Simulate voice recording
      setTimeout(() => {
        setComplaint("मेरे मोहल्ले की गली में पिछले 15 दिनों से पानी का पाइप लीक हो रहा है। इससे बहुत पानी बर्बाद हो रहा है और गली में कीचड़ भी जमा हो गया है। कृपया जल्द से जल्द इसकी मरम्मत करवाएं।");
        setIsRecording(false);
        toast({
          title: "Recording Complete",
          description: "Your complaint has been captured.",
        });
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const generateLetter = () => {
    if (!complaint.trim()) {
      toast({
        title: "No Complaint",
        description: "Please describe your issue first.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      setSuggestedDepartment("water");
      setSelectedDepartment("water");
      setGeneratedLetter(`Subject: Urgent Request for Water Pipeline Repair - Street Leakage Issue

Respected Sir/Madam,

I am writing to bring to your immediate attention a pressing water supply issue affecting our neighborhood.

ISSUE DETAILS:
A water pipeline in our street has been leaking continuously for the past 15 days. This persistent leak is resulting in significant water wastage and has caused the accumulation of mud and slush in the street, creating unhygienic conditions and inconvenience for residents.

LOCATION:
[Your Complete Address]
Ward No: [Ward Number]
Landmark: [Nearby Landmark]

REQUEST:
I kindly request you to dispatch a repair team at your earliest convenience to fix this leakage. Prompt action will help conserve water and restore the street to its normal condition.

I would appreciate if this matter is treated with urgency.

Thank you for your attention to this matter.

Yours faithfully,
[Your Name]
[Contact Number]
[Date]`);
      setIsGenerating(false);
      toast({
        title: "Letter Generated!",
        description: "Your professional complaint letter is ready.",
      });
    }, 2000);
  };

  const downloadPDF = () => {
    toast({
      title: "Download Started",
      description: "Your complaint letter PDF is being prepared...",
    });
    // In a real implementation, this would generate and download a PDF
  };

  const DepartmentIcon = departmentIcons[suggestedDepartment as keyof typeof departmentIcons] || Building2;

  return (
    <section id="complaints" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-civic-orange/10 rounded-full text-civic-orange text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              AI-Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            {t.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.desc}</div>
                  </div>
                </div>
                {index < t.steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-civic-md border border-border">
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t.originalLabel}
                </label>
                <Textarea
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  placeholder={t.placeholder}
                  className="min-h-[200px] text-base resize-none"
                />
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Button
                    variant={isRecording ? "destructive" : "secondary"}
                    onClick={toggleRecording}
                    className="flex-1"
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="w-4 h-4 mr-2" />
                        {t.stopBtn}
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4 mr-2" />
                        {t.voiceBtn}
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={generateLetter}
                    disabled={isGenerating || !complaint.trim()}
                    className="flex-1"
                  >
                    {isGenerating ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        {t.generateBtn}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Department Selector */}
              {suggestedDepartment && (
                <div className="bg-card rounded-2xl p-6 shadow-civic-md border border-border animate-fade-in">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t.departmentLabel}
                  </label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(t.departments).map(([key, name]) => {
                        const Icon = departmentIcons[key as keyof typeof departmentIcons];
                        return (
                          <SelectItem key={key} value={key}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              {name}
                              {key === suggestedDepartment && (
                                <span className="ml-2 text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">
                                  Suggested
                                </span>
                              )}
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-success" />
                    AI detected this as a water supply issue
                  </div>
                </div>
              )}
            </div>

            {/* Output Section */}
            <div className="bg-card rounded-2xl p-6 shadow-civic-md border border-border">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-foreground">
                  {t.previewLabel}
                </label>
                {generatedLetter && (
                  <Button variant="success" size="sm" onClick={downloadPDF}>
                    <Download className="w-4 h-4 mr-2" />
                    {t.downloadBtn}
                  </Button>
                )}
              </div>
              <div className="bg-muted/50 rounded-xl p-6 min-h-[400px] font-mono text-sm leading-relaxed">
                {generatedLetter ? (
                  <pre className="whitespace-pre-wrap text-foreground">{generatedLetter}</pre>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>Your professional letter will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintSection;
