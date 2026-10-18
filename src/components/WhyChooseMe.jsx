import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Layers, MessagesSquare, ClockCheck, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { whyChooseMeData } from "../data/whyChooseMe";
import { Rhombus } from "./GeometricAccents";

const iconMap = {
  Smartphone: Smartphone,
  Layers: Layers,
  MessagesSquare: MessagesSquare,
  ClockCheck: ClockCheck,
};

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="py-24 bg-white text-[#09090D] relative overflow-hidden">
      {/* Decorative Floating Diamonds on White Background (matching reference image) */}
      <div className="absolute top-12 left-8 hidden lg:block pointer-events-none">
        <Rhombus size="lg" color="outline-black" />
      </div>
      <div className="absolute top-20 right-12 hidden lg:block pointer-events-none">
        <Rhombus size="md" color="pink" />
      </div>
      <div className="absolute bottom-16 right-16 hidden lg:block pointer-events-none">
        <Rhombus size="xl" color="outline-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Freelance Advantage"
          title="SMALL BUSINESS."
          highlight="BIG DIGITAL IMPACT."
          subtitle="Work directly with a focused frontend specialist who treats your project like their own. No bloated agency retainers, no account manager middlemen."
          align="center"
          theme="light"
        />

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {whyChooseMeData.map((item, index) => {
            const Icon = iconMap[item.icon] || Smartphone;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#F4F4F6] border-2 border-[#09090D] p-7 transition-all duration-300 flex flex-col justify-between shadow-[6px_6px_0px_#09090D] hover:shadow-[8px_8px_0px_#FF1458] hover:border-[#FF1458]"
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#09090D] text-white flex items-center justify-center group-hover:bg-[#FF1458] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-white border border-[#09090D] font-bold text-[#09090D] group-hover:border-[#FF1458] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-[#09090D] group-hover:text-[#FF1458] transition-colors leading-none mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Metric footer tag */}
                <div className="pt-4 border-t border-[#09090D]/15 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#09090D] uppercase tracking-wider">
                    {item.metrics}
                  </span>
                  <div className="w-2.5 h-2.5 rotate-45 bg-[#FF1458]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small Bottom Assurance Banner */}
        <div className="mt-14 p-6 bg-[#09090D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-l-4 border-[#FF1458]">
          <div className="flex items-center gap-3">
            <Rhombus size="xs" color="pink" />
            <p className="text-sm sm:text-base text-[#E4E4E7]">
              Every client gets clean, maintainable code with no hidden lock-ins or proprietary hosting dependencies.
            </p>
          </div>
          <a
            href="#pricing"
            className="shrink-0 inline-flex items-center gap-2 font-['Teko'] text-xl uppercase tracking-wider text-[#FF1458] hover:text-white transition-colors"
          >
            <span>View Packages</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
