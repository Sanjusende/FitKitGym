import React from "react";
import { Dumbbell, Phone, Mail, MapPin, ArrowUp, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";
import FitLogo from "./FitLogo";

export default function FitFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = "https://wa.me/918815926552?text=Hi%20FitKit!%20I'd%20like%20to%20know%20more%20about%20your%20gym%20membership.";

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 pb-12 text-neutral-400 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1f1f1f]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home">
              <FitLogo size="default" />
            </a>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              Bhopal's most premium fitness hub. World-class trainers, 120+ biomechanical machines, and science-backed progressive overload methodology.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#111111] border border-[#1f1f1f] hover:border-[#FF2E4C] hover:text-[#FF2E4C] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#111111] border border-[#1f1f1f] hover:border-[#FF2E4C] hover:text-[#FF2E4C] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#111111] border border-[#1f1f1f] hover:border-[#FF2E4C] hover:text-[#FF2E4C] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-black text-white uppercase tracking-wider mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li><a href="#home" className="hover:text-[#FF2E4C] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF2E4C] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FF2E4C] transition-colors">Services</a></li>
              <li><a href="#machines" className="hover:text-[#FF2E4C] transition-colors">Machines</a></li>
              <li><a href="#trainers" className="hover:text-[#FF2E4C] transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-[#FF2E4C] transition-colors">Plans</a></li>
              <li><a href="#contact" className="hover:text-[#FF2E4C] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-heading text-base font-black text-white uppercase tracking-wider mb-4">
              SPECIALIZATIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li><a href="#services" className="hover:text-[#FF2E4C] transition-colors">Personal Training</a></li>
              <li><a href="#services" className="hover:text-[#FF2E4C] transition-colors">Cardio Programs</a></li>
              <li><a href="#services" className="hover:text-[#FF2E4C] transition-colors">Weight Training</a></li>
              <li><a href="#services" className="hover:text-[#FF2E4C] transition-colors">Hyrox Workouts</a></li>
              <li><a href="#services" className="hover:text-[#FF2E4C] transition-colors">Diet & Nutrition</a></li>
            </ul>
          </div>

          {/* Direct Contact & Newsletter */}
          <div>
            <h4 className="font-heading text-base font-black text-white uppercase tracking-wider mb-4">
              GET IN TOUCH
            </h4>
            <div className="space-y-3 text-xs mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#FF2E4C] transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-[#FF2E4C]" />
                <span>+91 8815926552 (WhatsApp)</span>
              </a>
              <p className="flex items-center gap-2 text-neutral-400">
                <Mail className="w-4 h-4 text-[#FF2E4C]" />
                <span>contact@fitkitgym.com</span>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Prabhat+Petrol+Pump+Bhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-[#FF2E4C] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#FF2E4C] shrink-0" />
                <span>Near Prabhat Petrol Pump, Bhopal (M.P.)</span>
              </a>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to FITKIT updates!"); }} className="flex items-center w-full">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                className="w-full min-w-0 bg-[#161616] border border-[#1f1f1f] rounded-l-full px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF2E4C]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white px-4 py-2.5 rounded-r-full font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_15px_rgba(255,46,76,0.3)] shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 FITKIT™. ALL RIGHTS RESERVED. FORGED IN IRON. BUILT FOR GLORY.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#FF2E4C] transition-colors font-bold uppercase tracking-wider cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
