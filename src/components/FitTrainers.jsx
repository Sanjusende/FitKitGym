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
    <section className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            WORLD-CLASS COACHING
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            MEET THE <span className="text-[#FF2E4C] red-glow">MASTER COACHES</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-normal">
            Certified elite trainers dedicated to perfecting your technique, mindset, and results.
          </p>
          <div className="w-12 h-1 bg-[#FF2E4C] rounded-full mt-5 mx-auto shadow-[0_0_10px_#FF2E4C]" />
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#111111] border border-[#1f1f1f] overflow-hidden flex flex-col justify-between hover:border-[#FF2E4C]/50 transition-all duration-300 group shadow-2xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide">
                  {t.name}
                </h3>
                <p className="text-[11px] text-[#FF2E4C] font-extrabold uppercase tracking-wider mt-1 mb-4">
                  {t.role}
                </p>

                <div className="pt-3 border-t border-[#1f1f1f] flex items-center justify-center gap-3">
                  <button
                    onClick={onOpenJoin}
                    className="w-full py-2.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#FF2E4C] hover:to-[#E63946] hover:text-white text-neutral-300 hover:font-extrabold text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(255,46,76,0.4)]"
                  >
                    BOOK 1-ON-1 TRIAL
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
