import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Clock, ArrowRight } from "lucide-react";
import { pricingPlans } from "../data/gymData";
import { Rhombus } from "./GeometricAccents";

export default function GymPricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF1458]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1px] w-12 bg-[#FF1458]" />
            <Rhombus size="xs" color="pink" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF1458]">
              Straightforward Membership
            </span>
            <Rhombus size="xs" color="pink" />
            <div className="h-[1px] w-12 bg-[#FF1458]" />
          </div>

          <h2 className="font-['Teko'] text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] mb-4">
            MEMBERSHIP <span className="text-[#FF1458]">PLANS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] leading-relaxed">
            Transparent pricing with zero hidden maintenance fees. Unlimited access to state-of-the-art strength and athletic zones.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className={`relative bg-[#121217] border-2 flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 ${
                plan.isPopular
                  ? "border-[#FF1458] shadow-[0_0_35px_rgba(255,20,88,0.3)] lg:-translate-y-2 bg-gradient-to-b from-[#181824] to-[#121217]"
                  : "border-[#272733] hover:border-[#FF1458]/70"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#FF1458] text-white text-[11px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,20,88,0.7)] flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {!plan.isPopular && (
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-[#1B1B26] border border-[#272733] text-[#A1A1AA] inline-block mb-3">
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-['Teko'] text-4xl font-bold uppercase tracking-wider text-white leading-none mt-1">
                  {plan.name}
                </h3>

                <div className="mt-4 mb-2 flex items-baseline gap-2">
                  <span className="font-['Teko'] text-6xl font-black text-[#FF1458] leading-none">
                    {plan.price}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#A1A1AA] font-semibold mb-6 pb-4 border-b border-[#22222F]">
                  {plan.billing}
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-[11px] uppercase tracking-widest font-mono text-[#E4E4E7] font-bold">
                    Membership Privileges:
                  </p>
                  {plan.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D8]">
                      <Check className="w-4 h-4 text-[#FF1458] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#22222F]">
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 px-4 font-['Teko'] text-2xl uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? "bg-[#FF1458] text-white hover:bg-[#E00C4B] shadow-[0_0_20px_rgba(255,20,88,0.4)]"
                      : "bg-[#181824] text-white border border-[#2B2B3E] hover:border-[#FF1458] hover:text-[#FF1458]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
