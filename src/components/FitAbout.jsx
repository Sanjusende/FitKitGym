import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function FitAbout({ onOpenJoin }) {
  const highlights = [
    "120+ World-Class Biomechanical Machines",
    "Certified Trainers & Sports Biomechanics Experts",
    "Individualized Nutrition & Progressive Overload Protocols",
    "Unmatched High-Energy Athletic Community"
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Athletic Visual */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-2xl max-w-lg w-full group">
              <img
                src="/indian_hero_athlete.jpg"
                alt="FITKIT Training"
                className="w-full h-[480px] object-cover object-top filter contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-85" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111111]/90 backdrop-blur-md border border-[#1f1f1f] rounded-2xl p-4 flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-[11px] text-[#FF2E4C] uppercase font-extrabold tracking-widest">STRENGTH STANDARD</p>
                  <p className="font-heading text-lg font-black text-white uppercase">Built Different. Built Stronger.</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF2E4C] to-[#E63946] flex items-center justify-center text-white font-heading font-black text-xl shadow-[0_0_15px_rgba(255,46,76,0.5)]">
                  120+
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow Pill Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase shadow-[0_0_12px_rgba(255,46,76,0.25)]">
                ABOUT FITKIT
              </span>
              <div className="h-[1px] w-20 bg-gradient-to-r from-[#FF2E4C]/70 to-transparent" />
            </div>

            {/* Title */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-5">
              WHERE DEDICATION MEETS <span className="text-[#FF2E4C] red-glow">REAL RESULTS</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 font-normal">
              FITKIT is Bhopal's most premium fitness destination. Engineered for those who refuse average, our facility unites world-class biomechanical machinery, science-backed coaches, and a relentless culture of excellence.
            </p>

            {/* Checklist with Red Checkmarks */}
            <div className="space-y-3.5 mb-10 w-full">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF2E4C]/15 border border-[#FF2E4C] flex items-center justify-center flex-shrink-0 text-[#FF2E4C] shadow-[0_0_10px_rgba(255,46,76,0.3)]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-neutral-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenJoin}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,46,76,0.4)] hover:shadow-[0_0_35px_rgba(255,46,76,0.7)] hover:scale-105 flex items-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE FACILITY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
