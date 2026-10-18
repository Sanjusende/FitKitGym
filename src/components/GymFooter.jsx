import React from "react";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";
import { gymConfig, divisionsData } from "../data/gymData";
import { Rhombus } from "./GeometricAccents";

export default function GymFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090D] border-t-2 border-[#272733] relative overflow-hidden text-white">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF1458]/20 via-[#FF1458] to-[#FF1458]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#22222F]">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-[#16161E] border-2 border-[#FF1458] flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(255,20,88,0.4)]">
                <span className="-rotate-45 font-['Teko'] text-2xl font-black text-white">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Teko'] text-4xl font-black text-white tracking-widest leading-none">
                  ARMOURED
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF1458] font-mono -mt-1 font-bold">
                  Fitness Club & Athletic Lab
                </span>
              </div>
            </a>

            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
              Equipping athletes and dedicated fitness seekers with the tools to armour their mind and body. World-class facilities, Olympic platforms, and high-intensity conditioning.
            </p>

            <div className="pt-2 text-xs text-[#71717A] space-y-1 font-mono">
              <p>📍 {gymConfig.address}</p>
              <p>⏱ {gymConfig.hours}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Teko'] text-2xl uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              {gymConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-[#FF1458] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#FF1458]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Divisions Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-['Teko'] text-2xl uppercase tracking-wider text-white">
              Training Divisions
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              {divisionsData.map((div) => (
                <li key={div.id}>
                  <a
                    href="#divisions"
                    className="text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Rhombus size="xs" color="pink" />
                    <span>{div.title} {div.highlight}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <span className="inline-block px-3 py-1 bg-[#16161E] border border-[#272733] text-[10px] font-mono text-[#FF1458]">
                Open 24/7 For All Pro Members
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71717A] text-center sm:text-left">
            © {currentYear} <span className="text-white font-bold">ARMOURED FITNESS</span>. All rights reserved. Built for champions.
          </p>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#16161E] border border-[#272733] hover:border-[#FF1458] text-white hover:text-[#FF1458] text-xs uppercase font-mono tracking-wider transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF1458] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
