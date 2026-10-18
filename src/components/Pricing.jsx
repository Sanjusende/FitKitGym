import React from "react";
import { motion } from "framer-motion";
import { Check, Info, ArrowRight, Sparkles, Clock, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { pricingData } from "../data/pricing";
import { Rhombus } from "./GeometricAccents";

export default function Pricing({ onSelectPackage }) {
  return (
    <section id="pricing" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF1458]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Transparent Rates in INR"
          title="STRAIGHTFORWARD"
          highlight="PRICING"
          subtitle="Clear, upfront pricing with no surprise charges. Perfect for early-stage ventures and established local businesses alike."
          align="center"
          theme="dark"
        />

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-6">
          {pricingData.packages.map((pkg, index) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className={`relative bg-[#121217] border-2 flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 ${
                  pkg.isPopular
                    ? "border-[#FF1458] shadow-[0_0_35px_rgba(255,20,88,0.25)] lg:-translate-y-2 bg-gradient-to-b from-[#191924] to-[#121217]"
                    : "border-[#272733] hover:border-[#FF1458]/70"
                }`}
              >
                {/* Popular Highlight Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#FF1458] text-white text-[11px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,20,88,0.7)] flex items-center gap-1.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Badge (for non-popular cards) */}
                  {!pkg.isPopular && (
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-[#1B1B26] border border-[#272733] text-[#A1A1AA]">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Package Title */}
                  <h3 className="font-['Teko'] text-4xl font-bold uppercase tracking-wider text-white mt-2 leading-none">
                    {pkg.name}
                  </h3>

                  {/* Starting Price & Currency */}
                  <div className="mt-4 mb-3 flex items-baseline gap-2">
                    <span className="font-['Teko'] text-5xl sm:text-6xl font-black text-[#FF1458] leading-none">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-xs uppercase font-mono text-[#A1A1AA]">
                      / starting at
                    </span>
                  </div>

                  {/* Delivery Turnaround Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-[#E4E4E7] font-semibold mb-4 pb-4 border-b border-[#22222F]">
                    <Clock className="w-3.5 h-3.5 text-[#FF1458]" />
                    <span>{pkg.turnaround}</span>
                  </div>

                  {/* Short Tagline */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Included Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] uppercase tracking-widest font-mono text-[#E4E4E7] font-bold">
                      Included in this plan:
                    </p>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D8]">
                        <Check className="w-4 h-4 text-[#FF1458] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-[#22222F]">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-4 font-['Teko'] text-xl uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.isPopular
                        ? "bg-[#FF1458] text-white hover:bg-[#E00C4B] shadow-[0_0_20px_rgba(255,20,88,0.4)]"
                        : "bg-[#181824] text-white border border-[#2B2B3E] hover:border-[#FF1458] hover:text-[#FF1458]"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#A1A1AA] mt-2 font-mono">
                    Prefills enquiry form with this tier
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Scope & Pricing Disclaimers (Required by Section F) */}
        <div className="mt-14 p-6 bg-[#121217] border border-[#272733] max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#FF1458] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold">
                Pricing Disclaimers & Scope Transparency
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A1A1AA] leading-relaxed list-disc list-inside">
                {pricingData.disclaimers.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
