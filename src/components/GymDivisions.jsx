import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { divisionsData } from "../data/gymData";
import { Rhombus } from "./GeometricAccents";

export default function GymDivisions({ onSelectDivision }) {
  return (
    <section id="divisions" className="py-20 bg-white text-[#09090D] relative overflow-hidden border-t-2 border-[#09090D]/10">
      {/* Floating Diamonds like in reference image */}
      <div className="absolute top-10 right-8 hidden xl:block pointer-events-none">
        <Rhombus size="xl" color="outline-black" />
      </div>
      <div className="absolute bottom-10 left-8 hidden xl:block pointer-events-none">
        <Rhombus size="lg" color="pink" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The 3 Iconic Framed Cards directly from Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {divisionsData.map((division, index) => {
            const isPinkBorder = division.borderTheme === "pink";

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative bg-white flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                  isPinkBorder
                    ? "border-[6px] border-[#FF1458] shadow-[12px_12px_0px_#FF1458]"
                    : "border-[6px] border-[#09090D] shadow-[12px_12px_0px_#09090D]"
                }`}
              >
                {/* Horizontal Card Composition matching Reference: Big Bold Text on Left, Body Showcase Photo on Right */}
                <div className="flex flex-row items-center justify-between p-6 h-64 sm:h-72 bg-white relative overflow-hidden">
                  {/* Left Column: Bold Typography */}
                  <div className="z-10 flex flex-col justify-center max-w-[50%]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF1458] mb-1">
                      {division.badge}
                    </span>
                    <h3
                      className={`font-['Teko'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.82] tracking-tight ${
                        isPinkBorder ? "text-[#FF1458]" : "text-[#09090D]"
                      }`}
                    >
                      {division.title}
                    </h3>
                    {division.subtitle && (
                      <span className="font-['Teko'] text-3xl sm:text-4xl font-bold uppercase tracking-wider text-[#6B7280] -mt-1">
                        {division.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Right Column: Muscular Body Showcase Photo */}
                  <div className="w-[52%] h-full relative overflow-hidden shrink-0">
                    <img
                      src={division.image}
                      alt={`${division.title} ${division.subtitle} Muscular Body Showcase`}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out filter contrast-105"
                    />
                    {/* Subtle fade left to blend with card */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
                  </div>
                </div>

                {/* Features & Action Footer */}
                <div className="p-6 pt-4 border-t-2 border-[#09090D]/10 bg-[#FAFAFA]">
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-4 font-medium">
                    {division.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {division.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#1F2937]">
                        <Check className="w-3.5 h-3.5 text-[#FF1458] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectDivision(division)}
                    className={`w-full py-3 px-4 font-['Teko'] text-2xl uppercase tracking-widest font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPinkBorder
                        ? "bg-[#FF1458] text-white hover:bg-[#E00C4B] shadow-[0_0_15px_rgba(255,20,88,0.5)]"
                        : "bg-[#09090D] text-white hover:bg-[#FF1458]"
                    }`}
                  >
                    <span>JOIN {division.title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
