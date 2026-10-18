import React from "react";
import { motion } from "framer-motion";
import { MessageSquareCheck, Palette, CodeXml, Rocket, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/process";
import { Rhombus } from "./GeometricAccents";

const iconMap = {
  MessageSquareCheck: MessageSquareCheck,
  Palette: Palette,
  CodeXml: CodeXml,
  Rocket: Rocket,
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Execution"
          title="FROM IDEA TO"
          highlight="LIVE WEBSITE"
          subtitle="A disciplined four-step timeline to bring your digital vision to life efficiently, on schedule, and without confusion."
          align="center"
          theme="dark"
        />

        {/* 4 Steps Timeline Container */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line between cards */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF1458]/20 via-[#FF1458] to-[#FF1458]/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || MessageSquareCheck;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-[#121217] border-2 border-[#272733] hover:border-[#FF1458] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#1B1B26] border border-[#2D2D3E] group-hover:border-[#FF1458] group-hover:bg-[#FF1458] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#FF1458] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <span className="font-['Teko'] text-4xl font-black text-[#272738] group-hover:text-[#FF1458] transition-colors leading-none">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF1458] font-bold">
                      {step.subtitle}
                    </span>
                    <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-white group-hover:text-[#FF1458] transition-colors leading-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Key Tasks Checklist */}
                  <div className="pt-4 border-t border-[#22222E] space-y-2">
                    {step.details.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <Check className="w-3.5 h-3.5 text-[#FF1458] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Diamond node on card top */}
                  <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2">
                    <Rhombus size="xs" color="pink" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
