import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display text-automotive-gold mb-6">
              Classic Auto Revival
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specializing in the restoration and preservation of classic automobiles with over 25 years of experience in bringing automotive history back to life.
            </p>
            <Button variant="outline" className="border-automotive-gold text-automotive-gold hover:bg-automotive-gold hover:text-automotive-dark">
              Schedule Consultation
            </Button>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display text-automotive-gold mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-automotive-gold" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-automotive-gold" />
                <span className="text-gray-300">info@classicautorevival.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-automotive-gold" />
                <span className="text-gray-300">123 Restoration Way<br />Classic City, CA 90210</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-display text-automotive-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-automotive-gold transition-colors cursor-pointer">Complete Restoration</li>
              <li className="hover:text-automotive-gold transition-colors cursor-pointer">Engine Rebuilds</li>
              <li className="hover:text-automotive-gold transition-colors cursor-pointer">Custom Paint & Bodywork</li>
              <li className="hover:text-automotive-gold transition-colors cursor-pointer">Interior Restoration</li>
              <li className="hover:text-automotive-gold transition-colors cursor-pointer">Maintenance & Storage</li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-lg font-display text-automotive-gold mb-6">
              Business Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-automotive-gold" />
                <span className="text-gray-300">Workshop Hours</span>
              </div>
              <div className="text-gray-300 space-y-2">
                <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 4:00 PM</div>
                <div>Sunday: By Appointment</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="border-t border-automotive-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Classic Auto Revival. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-automotive-gold transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-automotive-gold transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-automotive-gold transition-colors cursor-pointer">Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;