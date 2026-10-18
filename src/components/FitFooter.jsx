import React from "react";
import { Dumbbell, Phone, Mail, MapPin, ArrowUp, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";

export default function FitFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = "https://wa.me/918815926552?text=Hi%20FitKit!%20I'd%20like%20to%20know%20more%20about%20your%20gym%20membership.";

  return (
    <footer className="bg-[#050608] border-t border-[#1E2533] pt-16 pb-12 text-[#8F9BB3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E2533]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#E63946] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider uppercase text-white">
                FIT<span className="text-[#E63946]">KIT</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#8F9BB3] leading-relaxed max-w-sm">
              World-class strength & conditioning facility equipped with Olympic barbells, periodized group fitness, and personalized nutrition protocols.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0E1219] border border-[#1E2533] hover:border-[#E63946] hover:text-[#E63946] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0E1219] border border-[#1E2533] hover:border-[#E63946] hover:text-[#E63946] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0E1219] border border-[#1E2533] hover:border-[#E63946] hover:text-[#E63946] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li><a href="#home" className="hover:text-[#E63946] transition-colors">Home Slider</a></li>
              <li><a href="#about" className="hover:text-[#E63946] transition-colors">About FitKit</a></li>
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Our Services</a></li>
              <li><a href="#trainers" className="hover:text-[#E63946] transition-colors">Coaches & Results</a></li>
              <li><a href="#pricing" className="hover:text-[#E63946] transition-colors">Membership Pricing</a></li>
              <li><a href="#bmi" className="hover:text-[#E63946] transition-colors">BMI Calculator</a></li>
              <li><a href="#contact" className="hover:text-[#E63946] transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4">
              Training Focus
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Heavy Deadlifts</a></li>
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Crossfit & Conditioning</a></li>
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Hypertrophy Mesocycles</a></li>
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Powerlifting Lab</a></li>
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Custom Nutrition Audit</a></li>
            </ul>
          </div>

          {/* Direct Contact & Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#E63946] transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-[#E63946]" />
                <span>+91 8815926552 (WhatsApp)</span>
              </a>
              <p className="flex items-center gap-2 text-[#8F9BB3]">
                <Mail className="w-4 h-4 text-[#E63946]" />
                <span>support@fitkitgym.com</span>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Prabhat+Petrol+Pump+Bhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8F9BB3] hover:text-[#E63946] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Near Prabhat Petrol Pump, Bhopal (M.P.)</span>
              </a>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="flex items-center">
              <input
                type="email"
                required
                placeholder="Your Email..."
                className="w-full bg-[#0E1219] border border-[#1E2533] rounded-l-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E63946]"
              />
              <button
                type="submit"
                className="bg-[#E63946] text-white px-3 py-2 rounded-r-lg hover:bg-[#D62828] transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 FITKIT ELITE FITNESS. All Rights Reserved. Keep Body Fit & Strong.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#8F9BB3] hover:text-[#E63946] transition-colors font-bold uppercase tracking-wider"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
