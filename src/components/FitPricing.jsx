import React, { useState } from "react";
import { Check, Zap, Sparkles } from "lucide-react";

export default function FitPricing({ onSelectPlan }) {
  const plans = [
    {
      id: "ignite",
      categoryBadge: "STRENGTH + CARDIO + HYROX",
      name: "IGNITE PASS (STRENGTH + CARDIO + HYROX PLANS)",
      price: "1,300",
      originalPrice: "1,600",
      period: "MONTH",
      isPopular: false,
      topAccentColor: "border-t-2 border-t-[#FF2E4C] hover:border-[#FF2E4C]/60",
      priceColor: "text-white",
      features: [
        "Unlimited Gym Access",
        "Strength Training",
        "Cardio Zone Access",
        "Basic Fitness Assessment"
      ],
      ctaText: "GET STARTED",
      buttonStyle: "bg-transparent hover:bg-white/5 border border-white/20 text-white hover:border-[#FF2E4C] hover:text-[#FF2E4C]"
    },
    {
      id: "momentum",
      categoryBadge: "STRENGTH + CARDIO + HYROX",
      name: "MOMENTUM PACK (STRENGTH + CARDIO + HYROX PLANS)",
      price: "4,000",
      originalPrice: "4,500",
      period: "3 MONTHS",
      isPopular: true,
      badgeText: "Most Popular",
      topAccentColor: "border-2 border-[#FF2E4C] shadow-[0_0_30px_rgba(255,46,76,0.3)] md:-translate-y-2",
      priceColor: "text-[#FF2E4C]",
      features: [
        "Everything in Ignite Pass",
        "Personalized Workout Plan",
        "Monthly Progress Tracking",
        "General Trainer Supervision"
      ],
      ctaText: "START PRO PLAN",
      buttonStyle: "bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold shadow-[0_0_20px_rgba(255,46,76,0.5)] hover:shadow-[0_0_35px_rgba(255,46,76,0.8)] hover:scale-[1.02]"
    },
    {
      id: "transformation",
      categoryBadge: "STRENGTH + CARDIO + HYROX",
      name: "TRANSFORMATION PACK (STRENGTH + CARDIO + HYROX PLANS)",
      price: "7,000",
      originalPrice: "8,000",
      period: "6 MONTHS",
      isPopular: false,
      topAccentColor: "border-t-2 border-t-[#E63946] hover:border-[#E63946]/60",
      priceColor: "text-white",
      features: [
        "Everything in Momentum Pack",
        "Customized Diet Consultation",
        "Body Composition Analysis",
        "General Trainer Supervision"
      ],
      ctaText: "GET STARTED",
      buttonStyle: "bg-transparent hover:bg-white/5 border border-white/20 text-white hover:border-[#E63946] hover:text-[#E63946]"
    }
  ];

  const handleChoose = (plan) => {
    if (onSelectPlan) {
      onSelectPlan({
        name: plan.name,
        price: `₹${plan.price} / ${plan.period}`
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden scroll-mt-20">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF2E4C]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            MEMBERSHIP PLANS
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            INVEST IN YOUR <span className="text-[#FF2E4C] red-glow">TRANSFORMATION</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-normal max-w-lg mx-auto">
            Choose the package tailored to push your physical limits. Zero hidden fees. Instant activation.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between p-8 sm:p-9 bg-[#111111] border border-[#1f1f1f] shadow-2xl ${plan.topAccentColor}`}
            >
              {/* Most Popular Floating Pill Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 right-6">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white shadow-[0_0_15px_rgba(255,46,76,0.6)]">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>{plan.badgeText}</span>
                  </span>
                </div>
              )}

              <div>
                {/* Category Pill Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF2E4C]">
                    {plan.categoryBadge}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-white tracking-wide leading-tight mb-6">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="border-b border-[#1f1f1f] pb-6 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl text-neutral-400 font-bold">₹</span>
                    <span className={`font-heading text-5xl sm:text-6xl font-black tracking-tight ${plan.priceColor}`}>
                      {plan.price}
                    </span>
                    <span className="text-neutral-500 text-lg font-light">/</span>
                  </div>

                  {/* Strike-Through Original Price */}
                  <p className="text-xs font-bold text-[#FF2E4C] tracking-wider uppercase mt-1">
                    ORIGINAL: <span className="line-through text-neutral-500">₹{plan.originalPrice}</span>
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[#FF2E4C]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs text-neutral-300 font-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call-to-Action Button */}
              <button
                onClick={() => handleChoose(plan)}
                className={`w-full py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${plan.buttonStyle}`}
              >
                <span>{plan.ctaText}</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 font-medium">
            ⚡ All memberships grant full access to cardio floor, strength racks, steam showers, and mobile workout tracking.
          </p>
        </div>

      </div>
    </section>
  );
}
