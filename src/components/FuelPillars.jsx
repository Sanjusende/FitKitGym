import React from "react";
import { Dumbbell, UtensilsCrossed, CalendarCheck, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function FuelPillars({ onOpenBooking }) {
  const pillars = [
    {
      id: "coaching",
      number: "01",
      title: "EXPERT COACHING",
      subtitle: "Biomechanical Precision",
      description: "Custom strength & conditioning routines built around your biomechanics, injury history, and schedule. No generic templates.",
      icon: Dumbbell,
      highlights: ["Video Form Analysis", "Progressive Overload Blueprint", "Periodized Mesocycles"]
    },
    {
      id: "nutrition",
      number: "02",
      title: "CUSTOM NUTRITION",
      subtitle: "Sustainable Metabolic Fuel",
      description: "Flexible, macro-calculated meal strategies tailored to foods you actually enjoy. Zero crash dieting or unsustainable hunger.",
      icon: UtensilsCrossed,
      highlights: ["Personalized Calorie Targets", "Dining Out & Travel Playbook", "Supplement Optimization"]
    },
    {
      id: "support",
      number: "03",
      title: "ACCOUNTABILITY & SUPPORT",
      subtitle: "Direct Coach Access",
      description: "Weekly detailed video check-ins and 24/7 direct communication so you never stall, get confused, or lose momentum.",
      icon: CalendarCheck,
      highlights: ["Weekly Progress Audits", "Daily Habit Tracking", "Direct WhatsApp Hotline"]
    },
    {
      id: "progress",
      number: "04",
      title: "TRACK & PROGRESS",
      subtitle: "Data-Driven Results",
      description: "Continuous monitoring of body composition, strength milestones, recovery scores, and energy levels with regular adjustments.",
      icon: TrendingUp,
      highlights: ["Biometric Dashboard", "Volume & Load Metrics", "Adaptive Plan Recalibration"]
    }
  ];

  return (
    <section id="coaching" className="py-20 bg-[#070A0F] border-t border-b border-[#1D2638]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D131F] border border-[#1D2638] text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
            <span>THE 4-PILLAR BLUEPRINT</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            HOW WE BUILD YOUR <span className="text-[#FF5722]">STRONGEST SELF</span>
          </h2>
          <p className="text-[#8F9BB3] text-base sm:text-lg">
            Fitness is not about working yourself to exhaustion—it's about applying the right stimulus with precision nutrition and relentless accountability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-[#0D131F] border border-[#1D2638] p-6 hover:border-[#FF5722]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,87,34,0.15)] flex flex-col justify-between"
              >
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FF5722]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-2xl font-black text-[#8F9BB3]/40 group-hover:text-[#FF5722] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#070A0F] border border-[#1D2638] group-hover:border-[#FF5722] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-inner">
                      <Icon className="w-6 h-6 text-[#FF5722]" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-black tracking-wide text-white uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FF5722] uppercase tracking-wider mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-[#8F9BB3] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-[#1D2638]/70">
                  <ul className="space-y-2">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0D131F] via-[#111A2C] to-[#0D131F] border border-[#1D2638] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
              NEED A TAILORED STRATEGY FOR YOUR BODY TYPE?
            </h4>
            <p className="text-sm text-[#8F9BB3] mt-1">
              Book a complimentary 20-minute consultation call with our head coach. No sales pressure.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-[#FF5722] text-black font-extrabold text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(255,87,34,0.5)] transition-all flex items-center gap-2"
          >
            <span>CLAIM FREE AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
