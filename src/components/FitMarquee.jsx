import React from "react";

export default function FitMarquee() {
  const marqueeItems = [
    { white: "FORGED IN IRON • ", neon: "BUILT FOR GLORY", tail: "" },
    { white: "BHOPAL'S PREMIER ", neon: "FITNESS HUB", tail: " • 120+ MACHINES" },
    { white: "BUILT DIFFERENT • ", neon: "BUILT STRONGER", tail: "" },
    { white: "JOIN 2,500+ ", neon: "CHAMPIONS", tail: " • WORLD-CLASS COACHING" },
    { white: "PUSH LIMITS • ", neon: "BREAK BARRIERS", tail: " • BECOME UNSTOPPABLE" },
  ];

  return (
    <div className="w-full max-w-full bg-[#0a0a0a] border-t border-b border-[#1f1f1f] py-3.5 overflow-hidden relative select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              {item.white}
              <span className="text-[#FF2E4C] red-glow">{item.neon}</span>
              {item.tail}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FF2E4C] mx-6 shadow-[0_0_8px_#FF2E4C]" />
          </div>
        ))}
      </div>
    </div>
  );
}
