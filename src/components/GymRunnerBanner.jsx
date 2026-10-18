import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Dumbbell, Activity, Trophy } from "lucide-react";
import { workoutPrograms } from "../data/gymData";
import { Rhombus } from "./GeometricAccents";

const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  Activity: Activity,
  Trophy: Trophy,
};

export default function GymRunnerBanner() {
  return (
    <section id="programs" className="py-24 bg-white text-[#09090D] relative overflow-hidden">
      {/* Decorative chevron edge accent on right side like in reference */}
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="w-0 h-0 border-y-[40px] border-y-transparent border-l-[40px] border-l-[#FF1458]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Dynamic Athletic Visual from Reference */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-4 border-[#09090D] shadow-[12px_12px_0px_#FF1458] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80"
                alt="Armoured Training Runner with Bands"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-[#FF1458] text-white font-mono text-xs font-bold uppercase tracking-widest">
                  ATHLETIC CONDITIONING
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title directly matching reference "Get Ready... Get Armoured" */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-8 bg-[#09090D]" />
              <span className="font-['Teko'] text-2xl font-bold uppercase tracking-wider text-[#09090D]">
                Get Ready...
              </span>
            </div>

            <h2 className="font-['Teko'] text-6xl sm:text-8xl md:text-9xl font-black uppercase text-[#09090D] leading-[0.85] tracking-tight">
              Get <span className="text-[#FF1458]">Armoured</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl font-medium">
              Push your physiological limits with programmed progression. Whether building raw functional strength or athletic endurance, our training regimens are built to forge results.
            </p>

            <div className="pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#09090D] hover:bg-[#FF1458] text-white font-['Teko'] text-2xl uppercase tracking-widest font-bold transition-all shadow-[4px_4px_0px_#09090D]"
              >
                <span>EXPLORE MEMBERSHIP PLANS</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Workout Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {workoutPrograms.map((program, index) => {
            const Icon = iconMap[program.icon] || Dumbbell;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative bg-[#F4F4F6] border-2 border-[#09090D] p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#09090D] hover:shadow-[8px_8px_0px_#FF1458] hover:border-[#FF1458]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#09090D] text-white flex items-center justify-center group-hover:bg-[#FF1458] transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-white border border-[#09090D] font-bold text-[#09090D]">
                      {program.tag}
                    </span>
                  </div>

                  <h3 className="font-['Teko'] text-3xl font-bold uppercase text-[#09090D] group-hover:text-[#FF1458] transition-colors leading-none mb-1">
                    {program.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#6B7280] font-bold mb-3">
                    <span>{program.duration}</span>
                    <span>•</span>
                    <span className="text-[#FF1458]">{program.intensity}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#09090D]/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#09090D] uppercase">
                    Coached Class
                  </span>
                  <div className="w-2.5 h-2.5 rotate-45 bg-[#FF1458]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
