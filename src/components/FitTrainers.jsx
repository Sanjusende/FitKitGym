import React from "react";
import { InstagramIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";

export default function FitTrainers({ onOpenJoin }) {
  const trainers = [
    {
      id: "trainer-1",
      name: "Marcus Vance",
      role: "Head Strength & Biomechanics",
      img: "/indian_hero_athlete.jpg"
    },
    {
      id: "trainer-2",
      name: "Priya Sharma",
      role: "Metabolic Conditioning & Nutrition",
      img: "/indian_priya_after.jpg"
    },
    {
      id: "trainer-3",
      name: "Rahul Verma",
      role: "Bodybuilding & Hypertrophy",
      img: "/indian_rahul_after.jpg"
    },
    {
      id: "trainer-4",
      name: "Rohan Kapoor",
      role: "Olympic Lifting & Power Coach",
      img: "/indian_rohan_after.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#050608] border-t border-[#1E2533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
              EXPERT COACHES
            </span>
            <span className="w-6 h-[2px] bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Meet Our Skilled Trainers
          </h2>
          <p className="text-xs sm:text-sm text-[#8F9BB3] mt-2">
            Certified elite trainers dedicated to perfecting your technique, mindset, and results.
          </p>
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#0E1219] border border-[#1E2533] overflow-hidden flex flex-col justify-between hover:border-[#E63946]/50 transition-all duration-300 group shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1219] via-transparent to-transparent opacity-90" />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide">
                  {t.name}
                </h3>
                <p className="text-xs text-[#E63946] font-bold uppercase tracking-wider mt-1 mb-4">
                  {t.role}
                </p>

                <div className="pt-3 border-t border-[#1E2533] flex items-center justify-center gap-3">
                  <button
                    onClick={onOpenJoin}
                    className="w-full py-2.5 rounded-lg bg-[#151B26] hover:bg-[#E63946] text-white text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    Book 1-on-1 Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
