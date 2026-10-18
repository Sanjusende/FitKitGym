import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FitPromoBanner({ onOpenJoin }) {
  return (
    <section className="py-16 bg-[#0a0a0a] px-4 sm:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#111111] via-[#161616] to-[#0d0d0d] border border-[#FF2E4C]/30 overflow-hidden shadow-[0_0_50px_rgba(255,46,76,0.15)] relative">
        
        {/* Glow ambient circle */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#FF2E4C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center p-8 sm:p-14 gap-8 relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF2E4C]/10 border border-[#FF2E4C]/40 text-[#FF2E4C] text-[11px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF2E4C]" />
              <span>LIMITED INTAKE ENROLLMENT PASS</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4">
              READY TO CRUSH YOUR GOALS? <br />
              <span className="text-[#FF2E4C] red-glow">GET 1 FREE SESSION TODAY</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mb-8 leading-relaxed">
              Step into Bhopal's most elite strength hub. Test out our 120+ biomechanical machines, meet master coaches, and experience the difference firsthand.
            </p>

            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(255,46,76,0.4)] hover:shadow-[0_0_40px_rgba(255,46,76,0.7)] hover:scale-105 cursor-pointer"
            >
              <span>CLAIM FREE PASS NOW</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Image Cutout */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#FF2E4C]/30 shadow-2xl">
              <img
                src="/indian_hero_athlete.jpg"
                alt="FITKIT Athlete"
                className="w-full h-full object-cover object-top filter contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-3 right-3 text-center">
                <span className="font-heading text-2xl font-black text-[#FF2E4C] uppercase drop-shadow-md red-glow">
                  BUILT DIFFERENT
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
