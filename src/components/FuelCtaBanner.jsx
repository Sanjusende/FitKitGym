import React from "react";
import { Rocket, ArrowRight } from "lucide-react";

export default function FuelCtaBanner({ onOpenBooking }) {
  return (
    <section className="bg-gradient-to-r from-[#FF6B2B] via-[#FF5722] to-[#F4511E] py-8 px-4 sm:px-8 shadow-[0_0_40px_rgba(255,87,34,0.3)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Rocket Icon & Title */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <Rocket className="w-8 h-8 text-white stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-none">
              READY TO BECOME <br className="hidden sm:inline" /> YOUR BEST SELF?
            </h3>
          </div>
        </div>

        {/* Middle: Subtext */}
        <div className="text-center md:text-left text-white/90 font-bold text-xs sm:text-sm">
          <p>Spots are limited.</p>
          <p>Take the first step today!</p>
        </div>

        {/* Right: Black Button with Arrow */}
        <button
          onClick={onOpenBooking}
          className="px-7 py-3.5 rounded-lg bg-black hover:bg-neutral-900 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:scale-105 shadow-2xl flex-shrink-0"
        >
          <span>BOOK A FREE CALL</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>

      </div>
    </section>
  );
}
