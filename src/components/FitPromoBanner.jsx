import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FitPromoBanner({ onOpenJoin }) {
  return (
    <section className="py-16 bg-[#080A0E] px-4 sm:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#E63946] via-[#D62828] to-[#9B111E] overflow-hidden shadow-[0_0_50px_rgba(230,57,70,0.35)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center p-8 sm:p-14 gap-8">
          
          {/* Left Text */}
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>LIMITED TIME ENROLLMENT SPECIAL</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4">
              Get 25% Discount For All Fitness Classes
            </h2>

            <p className="text-white/85 text-sm sm:text-base font-semibold max-w-xl mb-8 leading-relaxed">
              Unlock unlimited access to Olympic lifting platforms, personalized nutrition templates, and live coach-led training sessions.
            </p>

            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-2xl hover:scale-105"
            >
              <span>CLAIM 25% OFF NOW</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Right Image Cutout */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                src="/indian_hero_athlete.jpg"
                alt="Promo Athlete"
                className="w-full h-full object-cover object-top filter contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="font-heading text-3xl font-black text-white uppercase drop-shadow-md">
                  SAVE 25% TODAY
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
