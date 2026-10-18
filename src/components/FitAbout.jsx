import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function FitAbout({ onOpenJoin }) {
  const highlights = [
    "Over 15 years of experience",
    "Certified Trainers & Biomechanics Experts",
    "Exceptional work quality & custom nutrition protocols"
  ];

  return (
    <section id="about" className="py-24 bg-[#050608] border-t border-[#1E2533] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bodybuilder / Heavy Barbell Deadlift Visual (Exact match to reference) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#1E2533] shadow-2xl max-w-lg w-full group">
              <img
                src="/indian_hero_athlete.jpg"
                alt="Intense Fitness Workout"
                className="w-full h-[480px] object-cover object-top filter contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0E1219]/90 backdrop-blur-md border border-[#1E2533] rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#8F9BB3] uppercase font-bold tracking-wider">Lifting Focus</p>
                  <p className="font-heading text-lg font-black text-white uppercase">High-Intensity Barbell Athletics</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#E63946] flex items-center justify-center text-white font-black">
                  15+
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#E63946]" />
              <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
                ABOUT US
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-5">
              Unleashing Potential With Intense Fitness Workouts
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#8F9BB3] leading-relaxed mb-8">
              Body fitness encompasses various aspects of physical health and well-being, involving a combination of structured exercises, nutrition, and lifestyle choices. Achieving and maintaining optimal body fitness contributes to overall health, mental clarity, and athletic vitality.
            </p>

            {/* Checklist with Red Checkmarks */}
            <div className="space-y-3.5 mb-10 w-full">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E63946] flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_10px_rgba(230,57,70,0.4)]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-lg bg-[#E63946] hover:bg-[#D62828] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(230,57,70,0.5)] hover:shadow-[0_0_35px_rgba(230,57,70,0.8)] flex items-center gap-2 group"
            >
              <span>MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
