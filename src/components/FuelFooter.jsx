import React from "react";
import { fuelBuiltConfig } from "../data/fuelBuiltData";
import { Flame, MessageCircle, ArrowUp } from "lucide-react";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "./SocialIcons";

export default function FuelFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#04060A] border-t border-[#1D2638] pt-16 pb-12 text-[#8F9BB3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1D2638]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5722] to-[#D84315] flex items-center justify-center">
                <Flame className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider uppercase text-white">
                <span className="text-[#FF5722]">FUEL</span>BUILT
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#8F9BB3] leading-relaxed max-w-sm">
              Science-backed personal training, custom macro protocols, and aggressive 1-on-1 accountability for driven individuals who want tangible physical transformations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${fuelBuiltConfig.whatsappCleanNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D131F] border border-[#1D2638] hover:border-[#25D366] text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D131F] border border-[#1D2638] hover:border-[#FF5722] hover:text-[#FF5722] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D131F] border border-[#1D2638] hover:border-[#FF5722] hover:text-[#FF5722] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D131F] border border-[#1D2638] hover:border-[#FF5722] hover:text-[#FF5722] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li><a href="#home" className="hover:text-[#FF5722] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF5722] transition-colors">About Method</a></li>
              <li><a href="#coaching" className="hover:text-[#FF5722] transition-colors">4-Pillar Coaching</a></li>
              <li><a href="#transformations" className="hover:text-[#FF5722] transition-colors">Before & Afters</a></li>
              <li><a href="#coaching-plans" className="hover:text-[#FF5722] transition-colors">Pricing Packages</a></li>
              <li><a href="#assessment" className="hover:text-[#FF5722] transition-colors">Transformation Quiz</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li><a href="#coaching-plans" className="hover:text-[#FF5722] transition-colors">Basic Plan ($149/mo)</a></li>
              <li><a href="#coaching-plans" className="hover:text-[#FF5722] transition-colors">Performance Plan ($249/mo)</a></li>
              <li><a href="#coaching-plans" className="hover:text-[#FF5722] transition-colors">Elite VIP Plan ($399/mo)</a></li>
              <li><a href="#contact" className="hover:text-[#FF5722] transition-colors">Custom Nutrition Audit</a></li>
              <li><a href="#contact" className="hover:text-[#FF5722] transition-colors">Competition Prep</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-white font-bold">FuelBuilt Headquarters</p>
              <p className="text-[#8F9BB3]">Available Worldwide (Online Remote Coaching & Video Form Audits)</p>
              <p className="text-[#FF5722] font-bold">
                WhatsApp: {fuelBuiltConfig.whatsappNumber}
              </p>
              <p className="text-slate-300">
                Email: coaching@fuelbuilt.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} FUELBUILT COACHING. All Rights Reserved. Train Hard. Live Better.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#8F9BB3] hover:text-[#FF5722] transition-colors font-bold uppercase tracking-wider"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
