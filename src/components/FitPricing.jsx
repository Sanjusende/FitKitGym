import React, { useState } from "react";
import { Check, Zap, Sparkles } from "lucide-react";

export default function FitPricing({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "annual"

  const plans = [
    {
      id: "starter",
      name: "Standard Pass",
      subtitle: "Essential gym floor & cardio access for self-driven fitness",
      monthlyPrice: "₹1,499",
      annualPrice: "₹1,199",
      period: "/ month",
      isPopular: false,
      badge: "GENERAL FITNESS",
      features: [
        "Full gym floor & Olympic free-weight zone access",
        "Cardio theater (Treadmills, Cycles & Cross-trainers)",
        "Daily locker room, steam & hot shower amenities",
        "1 Free InBody / Biometric BMI Body Composition Scan",
        "General floor trainer assistance & safety guidance",
        "Access to FitKit workout tracking app",
        "Flexible gym timings (5:30 AM – 10:30 PM)"
      ],
      ctaText: "Choose Standard Pass"
    },
    {
      id: "pro",
      name: "Pro Athlete Pass",
      subtitle: "Most popular choice with CrossFit, steam sauna & custom diet chart",
      monthlyPrice: "₹2,499",
      annualPrice: "₹1,999",
      period: "/ month",
      isPopular: true,
      badge: "MOST POPULAR",
      features: [
        "All Standard Pass gym amenities included",
        "Unlimited CrossFit, HIIT & group strength batches",
        "Weekly steam bath & detox sauna sessions",
        "Custom Indian vegetarian / non-veg high-protein diet chart",
        "Monthly strength & body fat percentage progress review",
        "2 Free 1-on-1 Personal Training demo sessions",
        "1 Free friend/family guest workout pass each month",
        "Free membership freeze option up to 30 days"
      ],
      ctaText: "Join Pro Athlete Pass"
    },
    {
      id: "elite",
      name: "Elite VIP Pass",
      subtitle: "Dedicated 1-on-1 personal coach, unlimited steam & VIP perks",
      monthlyPrice: "₹4,999",
      annualPrice: "₹3,999",
      period: "/ month",
      isPopular: false,
      badge: "VIP COACHING",
      features: [
        "Dedicated Certified 1-on-1 Personal Trainer",
        "Unlimited 24/7 keycard gym & recovery suite access",
        "Unlimited steam bath, sauna & hydrotherapy access",
        "Bio-individual nutrition plan with weekly macro adjustments",
        "Dedicated permanent locker & fresh towel service",
        "Direct 24/7 WhatsApp consultation with Head Coach",
        "Exclusive FitKit athlete gym bag & shaker bottle kit",
        "Free freeze option up to 60 days per year"
      ],
      ctaText: "Get Elite VIP Access"
    }
  ];

  const handleChoose = (plan) => {
    if (onSelectPlan) {
      const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
      onSelectPlan({
        name: plan.name,
        price: `${price}/mo (${billingCycle === "annual" ? "Billed Yearly" : "Monthly"})`
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#080A0E] border-t border-[#1E2533] relative overflow-hidden scroll-mt-20">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E63946]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
              INDIAN GYM MEMBERSHIP PLANS
            </span>
            <span className="w-6 h-[2px] bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            CHOOSE YOUR FITKIT PLAN
          </h2>
          <p className="text-xs sm:text-sm text-[#8F9BB3] mt-2">
            Transparent Indian gym pricing with zero admission charges. Flexible monthly & yearly savings.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#0E1219] border border-[#1E2533]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.5)]"
                  : "text-[#8F9BB3] hover:text-white"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.5)]"
                  : "text-[#8F9BB3] hover:text-white"
              }`}
            >
              <span>ANNUAL</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black tracking-normal">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (3-Tiered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between p-8 sm:p-9 ${
                  plan.isPopular
                    ? "bg-gradient-to-b from-[#141A26] to-[#0E1219] border-2 border-[#E63946] shadow-[0_0_40px_rgba(230,57,70,0.25)] md:-translate-y-3"
                    : "bg-[#0E1219] border border-[#1E2533] hover:border-[#E63946]/50 shadow-xl"
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                        plan.isPopular
                          ? "bg-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.6)]"
                          : "bg-[#1E2533] text-[#8F9BB3] border border-white/10"
                      }`}
                    >
                      {plan.isPopular && <Sparkles className="w-3 h-3 fill-current" />}
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Subtitle */}
                  <div className="border-b border-[#1E2533] pb-6 mb-6 pt-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#8F9BB3] mt-1 leading-relaxed">
                      {plan.subtitle}
                    </p>

                    {/* Price in ₹ INR */}
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="font-heading text-5xl sm:text-6xl font-black text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-bold text-[#8F9BB3] uppercase">
                        {plan.period}
                      </span>
                    </div>

                    {billingCycle === "annual" && (
                      <span className="inline-block text-[11px] font-semibold text-emerald-400 mt-1">
                        Billed annually (Save up to ₹6,000/yr)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-[11px] font-black uppercase tracking-wider text-[#8F9BB3]">
                      What's Included:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.isPopular
                              ? "bg-[#E63946] text-white"
                              : "bg-[#1E2533] text-[#E63946]"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs text-slate-300 leading-snug font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call-to-Action Button */}
                <button
                  onClick={() => handleChoose(plan)}
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    plan.isPopular
                      ? "bg-[#E63946] hover:bg-[#D62828] text-white shadow-[0_0_20px_rgba(230,57,70,0.5)] hover:shadow-[0_0_30px_rgba(230,57,70,0.8)] hover:scale-[1.02]"
                      : "bg-[#151B26] hover:bg-[#1E2533] text-white border border-[#1E2533] hover:border-white/30"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8F9BB3]">
            ⚡ All memberships include free locker usage, steam access and 1-on-1 fitness assessment. Special corporate & student discounts available at the gym desk.
          </p>
        </div>

      </div>
    </section>
  );
}
