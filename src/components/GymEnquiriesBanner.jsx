import React from "react";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { gymConfig } from "../data/gymData";

export default function GymEnquiriesBanner() {
  const whatsappUrl = `https://wa.me/${gymConfig.whatsappCleanNumber}?text=${encodeURIComponent(
    "Hi Armoured Gym! I would like to get more details about club membership and personal training."
  )}`;

  return (
    <div className="w-full bg-[#09090D] border-y-4 border-[#FF1458] py-6 sm:py-8 relative overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-[#FF1458]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Side: For More Enquiries */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-start">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A1A1AA] font-mono">
              For More
            </span>
            <span className="font-['Teko'] text-3xl sm:text-5xl font-black uppercase tracking-wider text-white leading-none">
              Enquiries
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white hover:bg-[#FF1458] text-[#09090D] hover:text-white font-['Teko'] text-xl uppercase tracking-widest font-bold transition-all shadow-[4px_4px_0px_#FF1458]"
          >
            GET MORE DETAILS
          </a>
        </div>

        {/* Center Iconic Double Chevron from Reference Image `< | >` */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#16161E] border border-[#272733] shadow-[0_0_15px_rgba(255,20,88,0.3)]">
          <div className="w-0 h-0 border-y-[12px] border-y-transparent border-r-[18px] border-r-[#FF1458]" />
          <div className="w-0.5 h-8 bg-white/60" />
          <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
        </div>

        {/* Right Side: Join Armoured */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
          <div className="flex flex-col text-right md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A1A1AA] font-mono">
              Join
            </span>
            <span className="font-['Teko'] text-3xl sm:text-5xl font-black uppercase tracking-wider text-[#FF1458] leading-none">
              Armoured
            </span>
          </div>

          <a
            href="#pricing"
            className="px-6 py-2 sm:px-7 sm:py-2.5 bg-[#FF1458] hover:bg-[#E00C4B] text-white font-['Teko'] text-xl uppercase tracking-widest font-bold transition-all shadow-[0_0_20px_rgba(255,20,88,0.6)]"
          >
            JOIN US
          </a>
        </div>
      </div>
    </div>
  );
}
