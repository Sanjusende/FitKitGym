import React from "react";
import { transformationsData } from "../data/fuelBuiltData";
import { Trophy } from "lucide-react";

export default function FuelTransformations({ onOpenBooking }) {
  return (
    <section id="transformations" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 relative">
          <span className="absolute -top-6 left-12 sm:left-48 font-heading text-6xl sm:text-7xl font-black text-white/[0.03] select-none pointer-events-none tracking-wider uppercase">
            #FITKIT
          </span>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase">
                PROVEN RESULTS
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              ATHLETE <span className="text-[#FF2E4C] red-glow">TRANSFORMATIONS</span>
            </h2>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-auto px-6 py-2.5 rounded-full border border-[#FF2E4C]/50 hover:border-[#FF2E4C] text-[#FF2E4C] hover:text-white hover:bg-[#FF2E4C] text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,46,76,0.25)] cursor-pointer"
          >
            VIEW MORE RESULTS
          </button>
        </div>

        {/* 4 Cards Grid - EXACT Side-by-Side Before & After */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformationsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#111111] border border-[#1f1f1f] p-4 flex flex-col justify-between hover:border-[#FF2E4C]/50 transition-all duration-300 shadow-2xl group"
            >
              {/* Card Header: Name and Metric Badge */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-heading text-lg font-black text-white uppercase tracking-wider">
                  {item.name}
                </span>
                <span className="text-xs font-black text-[#FF2E4C] uppercase tracking-wider bg-[#FF2E4C]/10 px-2 py-0.5 rounded border border-[#FF2E4C]/20">
                  {item.badge}
                </span>
              </div>

              {/* Side-by-Side Photos (Left: BEFORE, Right: AFTER) */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {/* Before Photo */}
                <div className="relative rounded-xl overflow-hidden bg-black aspect-[3/4] flex flex-col justify-end">
                  <img
                    src={item.beforeImg}
                    alt={`${item.name} Before`}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/40 to-transparent pt-4 pb-1.5 text-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After Photo */}
                <div className="relative rounded-xl overflow-hidden bg-black aspect-[3/4] flex flex-col justify-end">
                  <img
                    src={item.afterImg}
                    alt={`${item.name} After`}
                    className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/40 to-transparent pt-4 pb-1.5 text-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#FF2E4C]">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Timeframe with Trophy Icon */}
              <div className="pt-3 border-t border-[#1f1f1f] flex items-center justify-center gap-2 text-slate-400">
                <Trophy className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {item.timeframe}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
