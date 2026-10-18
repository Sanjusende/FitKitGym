import React from "react";
import { clientReviews } from "../data/fuelBuiltData";
import { Star } from "lucide-react";

export default function FuelReviews() {
  const reviews = [
    {
      id: 1,
      quote: "FITKIT completely transformed my physique. Lost 18kg in 6 months with the elite personal training program. The coaches here are world-class.",
      author: "Arjun Mehta",
      role: "SOFTWARE ENGINEER",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 2,
      quote: "The 120+ biomechanical machine collection is by far the finest in the city. Clean, air-conditioned, and unmatched high-voltage atmosphere.",
      author: "Pooja Sharma",
      role: "MARATHON RUNNER",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 3,
      quote: "No gimmicks, pure heavy iron and disciplined progressive overload. Added 35kg to my deadlift in 12 weeks with coach guidance.",
      author: "Rohit Verma",
      role: "POWERLIFTER & ATHLETE",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header matching staminabuilt.com */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            MEMBER STORIES
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            REAL RESULTS. <span className="text-[#FF2E4C] red-glow">REAL PEOPLE.</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-normal">
            Join thousands of members who've transformed their lives with FITKIT.
          </p>
          <div className="w-12 h-1 bg-[#FF2E4C] rounded-full mt-5 mx-auto shadow-[0_0_10px_#FF2E4C]" />
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#111111] border border-[#1f1f1f] p-8 flex flex-col justify-between hover:border-[#FF2E4C]/50 transition-all duration-300 shadow-2xl relative group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-8 font-normal italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-[#1f1f1f]">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FF2E4C]/60 shadow-[0_0_10px_rgba(255,46,76,0.25)]"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase text-white tracking-wide">
                    {review.author}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FF2E4C]">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
