import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">जन</span>
              </div>
              <span className="text-xl font-bold">JanSeva</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Empowering citizens with AI-powered tools to access government schemes, 
              file complaints, and understand their rights in their own language.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for citizens of India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#chatbot" className="hover:text-background transition-colors">AI Assistant</a></li>
              <li><a href="#complaints" className="hover:text-background transition-colors">File Complaint</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@janseva.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 JanSeva. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
