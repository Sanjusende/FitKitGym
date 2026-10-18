import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Zap,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { servicesData } from "../data/services";
import { Rhombus } from "./GeometricAccents";

const iconMap = {
  LayoutDashboard: LayoutDashboard,
  Zap: Zap,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF1458]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF1458]/5 blur-3xl pointer-events-none" />

      {/* Top Border Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF1458] to-transparent opacity-60 mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Tailored Web Solutions"
          title="WHAT I CAN BUILD"
          highlight="FOR YOU"
          subtitle="Every website is tailored to your business goals. No generic templates—only bespoke, fast, and high-impact digital experiences."
          align="center"
          theme="dark"
        />

        {/* 4 Services Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || LayoutDashboard;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#121217] border border-[#272733] hover:border-[#FF1458] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-lg hover:shadow-[0_10px_30px_rgba(255,20,88,0.18)]"
              >
                {/* Top Corner Angled Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-r-[28px] border-t-transparent border-r-[#272733] group-hover:border-r-[#FF1458] transition-colors duration-300" />

                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 bg-[#1A1A24] border border-[#2B2B3B] group-hover:border-[#FF1458] group-hover:bg-[#FF1458] flex items-center justify-center transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#FF1458] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-[#191922] border border-[#272733] text-[#A1A1AA] group-hover:text-white group-hover:border-[#FF1458]/40 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-['Teko'] text-3xl font-bold tracking-wider uppercase text-white group-hover:text-[#FF1458] transition-colors leading-none mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#FF1458] font-semibold mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#22222E]">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF1458] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-[#22222E] flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#A1A1AA]">
                    {service.startingPrice}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF1458] hover:text-white group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Animated Bottom Pink Border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#FF1458] group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
