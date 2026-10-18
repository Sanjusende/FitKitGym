import React from "react";

/**
 * 🛡️ FitLogo - Professional Athletic Gym Logo for FITKIT
 * Includes crisp SVG icon + typography with red/black athletic styling.
 */
export default function FitLogo({ className = "", size = "default", showText = true }) {
  const dimensions = {
    sm: "w-8 h-8",
    default: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20"
  }[size] || "w-10 h-10";

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Professional Athletic Emblem */}
      <div className={`relative ${dimensions} rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,46,76,0.45)] border border-[#FF2E4C]/40 group-hover:border-[#FF2E4C] group-hover:shadow-[0_0_28px_rgba(255,46,76,0.7)] transition-all duration-300 flex-shrink-0 bg-[#0a0a0a]`}>
        <img
          src="/fitkit-logo.png"
          alt="FITKIT Gym Logo"
          className="w-full h-full object-cover object-center scale-[1.05] group-hover:scale-110 transition-transform duration-300"
        />
        {/* Ambient red border glow */}
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#FF2E4C]/30 pointer-events-none" />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-heading text-2xl sm:text-[26px] font-black tracking-wider uppercase text-white group-hover:text-neutral-100 transition-colors">
              FITKIT
            </span>
            <span className="text-[#FF2E4C] font-heading font-black text-xl red-glow">
              ™
            </span>
          </div>
          <span className="text-[8.5px] font-black uppercase tracking-[0.28em] text-[#FF2E4C] mt-0.5">
            ELITE FITNESS CLUB
          </span>
        </div>
      )}
    </div>
  );
}
