import React from "react";
import { Dumbbell, Video, Utensils, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function FitServices({ onOpenJoin }) {
  const services = [
    {
      id: "personal-training",
      title: "PERSONAL TRAINING",
      badge: "MOST POPULAR",
      badgeColor: "bg-[#FF2E4C]/20 text-[#FF2E4C] border-[#FF2E4C]/40",
      emoji: "🏋️",
      description: "One-on-one sessions with certified elite coaches tailored to your specific goals.",
      bgImage: "/images/services/service_personal_training.jpg"
    },
    {
      id: "cardio-programs",
      title: "CARDIO PROGRAMS",
      badge: "FAT BURN",
      badgeColor: "bg-[#E63946]/20 text-[#E63946] border-[#E63946]/40",
      emoji: "🔥",
      description: "High-intensity programs designed to torch fat and maximize cardiovascular endurance.",
      bgImage: "/images/services/service_workout_videos.jpg"
    },
    {
      id: "weight-training",
      title: "WEIGHT TRAINING",
      badge: "STRENGTH",
      badgeColor: "bg-[#FF2E4C]/20 text-[#FF2E4C] border-[#FF2E4C]/40",
      emoji: "💪",
      description: "Structured lifting programs from beginner to advanced with progressive overload methodology.",
      bgImage: "/images/services/service_muscle_building.jpg"
    },
    {
      id: "diet-nutrition",
      title: "DIET & NUTRITION",
      badge: "NUTRITION",
      badgeColor: "bg-[#FF2E4C]/20 text-[#FF2E4C] border-[#FF2E4C]/40",
      emoji: "🥗",
      description: "Personalized meal plans crafted by sports nutritionists to fuel your performance.",
      bgImage: "/images/services/service_nutrition.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative scroll-mt-20 border-t border-[#1f1f1f]">
      
      {/* Background glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF2E4C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            WHAT WE OFFER
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.02]">
            SERVICES BUILT <br />
            <span className="text-[#FF2E4C] red-glow">FOR CHAMPIONS</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-xl font-normal">
            Every program is crafted with precision, passion, and proven methodology.
          </p>

          <div className="w-12 h-1 bg-[#FF2E4C] rounded-full mt-6 shadow-[0_0_10px_#FF2E4C]" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden border border-[#1f1f1f] hover:border-[#FF2E4C]/60 transition-all duration-500 group shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[390px] bg-[#111111]"
            >
              {/* Background Image */}
              <img
                src={item.bgImage}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.15] group-hover:scale-110 group-hover:brightness-[0.42] transition-all duration-700"
              />

              {/* Dark Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />

              {/* Top Row: Emoji & Badge */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="text-2xl filter drop-shadow-md">{item.emoji}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md bg-[#FF2E4C]/20 text-[#FF2E4C] border-[#FF2E4C]/40">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-6 pt-0">
                <h3 className="font-heading text-2xl font-black uppercase text-white mb-2 tracking-wide group-hover:text-[#FF2E4C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                <button
                  onClick={onOpenJoin}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#FF2E4C] hover:to-[#E63946] hover:text-white text-neutral-300 hover:font-extrabold text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_transparent] hover:shadow-[0_0_20px_rgba(255,46,76,0.4)]"
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Glowing Accent Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF2E4C] to-[#E63946] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#FF2E4C]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
