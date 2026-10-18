import React from "react";

export default function FitMarquee() {
  const marqueeItems = [
    { white: "FOCUS ON YOUR ", red: "WORKOUTS", tail: " NOT YOUR EXCUSES" },
    { white: "UNLEASH POTENTIAL WITH ", red: "INTENSE FITNESS", tail: " WORKOUTS" },
    { white: "KEEP YOUR BODY ", red: "FIT & STRONG", tail: " EVERY SINGLE DAY" },
    { white: "NO PAIN NO GAIN • ", red: "ELITE STRENGTH", tail: " PROTOCOLS" },
  ];

  return (
    <div className="w-full bg-[#050608] border-t border-b border-[#1E2533] py-4 overflow-hidden relative select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center mx-8">
            <span className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">
              {item.white}
              <span className="text-[#E63946]">{item.red}</span>
              {item.tail}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] mx-8 shadow-[0_0_8px_#E63946]" />
          </div>
        ))}
      </div>
    </div>
  );
}
