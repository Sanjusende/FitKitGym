import React from "react";
import { Dumbbell, Video, Utensils, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function FitServices({ onOpenJoin }) {
  const services = [
    {
      id: "workout-videos",
      title: "Workout Videos",
      category: "ON-DEMAND COACHING",
      description: "Access hundreds of HD workout breakdowns, lifting cues, form audits, and mobility tutorials.",
      icon: Video,
      bgImage: "/images/services/service_workout_videos.jpg"
    },
    {
      id: "personal-training",
      title: "Personal Training",
      category: "1-ON-1 SESSIONS",
      description: "Custom strength programming with progressive overload, biomechanical feedback, and accountability.",
      icon: Dumbbell,
      bgImage: "/images/services/service_personal_training.jpg"
    },
    {
      id: "nutritional-guidance",
      title: "Nutritional Guidance",
      category: "DIET & MACROS",
      description: "Bio-individual macro targets and flexible eating protocols tailored to fuel dense muscle and rapid fat loss.",
      icon: Utensils,
      bgImage: "/images/services/service_nutrition.jpg"
    },
    {
      id: "muscle-building",
      title: "Muscle Building",
      category: "HYPERTROPHY LAB",
      description: "High-volume hypertrophy mesocycles designed to sculpt dense, athletic muscle on shoulders, chest, and legs.",
      icon: Zap,
      bgImage: "/images/services/service_muscle_building.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#080A0E] relative scroll-mt-20 border-t border-[#1E2533]/60">
      
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#E63946]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#E63946]" />
              <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
                OUR SERVICES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              OUR SERVICE FOR YOU
            </h2>
            <p className="text-[#8F9BB3] text-sm mt-2 max-w-xl">
              Engineered training systems and professional guidance tailored for your personal physique transformation.
            </p>
          </div>

          <button
            onClick={onOpenJoin}
            className="self-start md:self-auto px-6 py-3 rounded-xl border border-white/20 hover:border-[#E63946] text-white hover:text-[#E63946] text-xs font-black uppercase tracking-wider transition-all duration-200 hover:scale-105 cursor-pointer bg-[#0E1219]/80 backdrop-blur-sm"
          >
            SEE ALL SERVICES
          </button>
        </div>

        {/* 4 Cards Grid with Thematic Background Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden border border-[#1E2533] hover:border-[#E63946] transition-all duration-500 group shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[360px]"
              >
                {/* 1. Service Background Image with Smooth Zoom on Hover */}
                <img
                  src={item.bgImage}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.40] contrast-[1.15] group-hover:scale-110 group-hover:brightness-[0.48] transition-all duration-700"
                />

                {/* 2. Gradient Overlays for High-Contrast Readable Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#0E1219]/80 to-[#080A0E]/60 group-hover:via-[#0E1219]/65 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080A0E]/70 to-transparent pointer-events-none" />

                {/* 3. Card Content Overlay */}
                <div className="relative z-10 p-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon Badge & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#151B26]/90 border border-white/10 group-hover:border-[#E63946] flex items-center justify-center text-white group-hover:text-[#E63946] group-hover:shadow-[0_0_25px_rgba(230,57,70,0.5)] transition-all duration-300 backdrop-blur-md">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E63946] px-2.5 py-1 rounded-full bg-black/50 border border-[#E63946]/30 backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-black uppercase text-white mb-3 tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium drop-shadow-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={onOpenJoin}
                      className="text-xs font-black uppercase tracking-wider text-[#E63946] group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>ENROLL NOW</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="w-2 h-2 rounded-full bg-[#E63946]/40 group-hover:bg-[#E63946] group-hover:shadow-[0_0_8px_#E63946] transition-all" />
                  </div>
                </div>

                {/* Subtle red bottom indicator on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E63946] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#E63946]" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
