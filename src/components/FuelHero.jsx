import React, { useState } from "react";
import { fuelBuiltConfig, heroPillars } from "../data/fuelBuiltData";
import { ArrowRight, Play, Dumbbell, UtensilsCrossed, CalendarCheck, TrendingUp, X } from "lucide-react";

export default function FuelHero({ onOpenBooking }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case "Dumbbell":
        return <Dumbbell className="w-5 h-5 text-[#FF5722]" />;
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-5 h-5 text-[#FF5722]" />;
      case "CalendarCheck":
        return <CalendarCheck className="w-5 h-5 text-[#FF5722]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#FF5722]" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#FF5722]" />;
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-2 pb-16 overflow-hidden bg-[#070A0F]">
      {/* Background ambient gym lighting & atmospheric haze */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-[#FF5722]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute -top-20 left-1/3 w-[400px] h-[400px] bg-[#FF5722]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">
          
          {/* Left Column: Exact Match Typography, Subtitle, CTAs & 4 Horizontal Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 pt-4 lg:pt-0">
            {/* Eyebrow */}
            <p className="text-[#FF5722] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3">
              {fuelBuiltConfig.eyebrow}
            </p>

            {/* Giant Condensed Chiseled Title */}
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-black italic uppercase tracking-tight leading-[0.88] mb-5">
              <span className="text-white block">
                {fuelBuiltConfig.heroTitleWhite}
              </span>
              <span className="text-[#FF5722] block drop-shadow-[0_4px_30px_rgba(255,87,34,0.5)]">
                {fuelBuiltConfig.heroTitleOrange}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-lg font-medium leading-relaxed mb-8">
              {fuelBuiltConfig.heroDescription}
            </p>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-lg bg-[#FF5722] hover:bg-[#F4511E] text-black font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                <span>START YOUR TRANSFORMATION</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#070A0F] border border-[#1D2638] hover:border-[#FF5722] text-white hover:text-[#FF5722] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#1D2638]/40"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#FF5722]" />
                <span>WATCH VIDEO</span>
              </button>
            </div>

            {/* 4 Horizontal Icon Pillars (EXACT MATCH to reference image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#1D2638]/70 w-full max-w-xl">
              {heroPillars.map((pillar) => (
                <div key={pillar.id} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5 group">
                  <div className="w-10 h-10 rounded-lg bg-[#0D131F]/90 border border-[#1D2638] flex items-center justify-center group-hover:border-[#FF5722] transition-colors shadow-sm">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300 leading-tight">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Seamless Professional Athlete (NO BOX, NO BORDERS - Blends Seamlessly into Page) */}
          <div className="lg:col-span-5 relative flex justify-center items-end lg:justify-end self-end">
            {/* Dramatic backglow behind athlete torso */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-t from-[#FF5722]/30 via-[#FF5722]/10 to-transparent blur-3xl -z-10" />

            {/* Athlete Image with seamless edge blending */}
            <div className="relative w-full max-w-[440px] lg:max-w-[500px]">
              <img
                src="/indian_hero_athlete.jpg"
                alt="FuelBuilt Athletic Coach"
                className="w-full h-auto object-cover object-top filter contrast-[1.08] brightness-[0.98]"
                style={{
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in"
                }}
              />

              {/* Edge Gradient Blends to guarantee 100% invisible borders */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#070A0F] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#0D131F] border border-[#FF5722]/40 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-[#070A0F] hover:bg-[#1D2638] transition-colors z-10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-2xl font-black text-white uppercase mb-3 flex items-center gap-2">
              <span className="text-[#FF5722]">FUELBUILT</span> COACHING INTRO & TRANSFORMATION PROOF
            </h3>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#1D2638] relative flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="FuelBuilt Coaching Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
