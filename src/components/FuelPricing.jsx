import React from "react";
import { coachingPackages } from "../data/fuelBuiltData";
import { Check } from "lucide-react";

export default function FuelPricing({ onSelectPlan }) {
  return (
    <section id="coaching" className="py-20 bg-[#070A0F] border-t border-[#1D2638] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header: CHOOSE YOUR PLAN / COACHING PACKAGES */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#FF5722] text-xs font-extrabold uppercase tracking-widest mb-1.5">
            CHOOSE YOUR PLAN
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            COACHING PACKAGES
          </h2>
        </div>

        {/* 3 Pricing Cards Grid (Exact match to reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {coachingPackages.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between p-7 transition-all duration-300 ${
                  isPopular
                    ? "bg-[#0D131F] border-2 border-[#FF5722] shadow-[0_0_35px_rgba(255,87,34,0.3)]"
                    : "bg-[#0D131F]/90 border border-[#1D2638]"
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5722] text-black font-black text-[11px] uppercase px-4 py-0.5 rounded-full shadow-md tracking-wider">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-wide text-center">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#8F9BB3] mt-1 text-center">
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-5 mb-6 flex items-baseline justify-center gap-1">
                    <span className={`font-heading text-5xl font-black tracking-tight ${
                      isPopular ? "text-[#FF5722]" : "text-white"
                    }`}>
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#FF5722] flex-shrink-0 stroke-[3]" />
                        <span className="text-xs sm:text-sm text-slate-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectPlan(pkg)}
                  className={`w-full py-3.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all duration-200 ${
                    isPopular
                      ? "bg-[#FF5722] hover:bg-[#F4511E] text-black shadow-[0_0_20px_rgba(255,87,34,0.4)]"
                      : "bg-[#070A0F] hover:bg-[#1D2638] text-white border border-[#1D2638] hover:border-[#FF5722]"
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
