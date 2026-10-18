import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Flame, Shield, ArrowRight } from "lucide-react";
import { Rhombus } from "./GeometricAccents";

export default function GymHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start pt-24 md:pt-28 pb-16 overflow-hidden bg-[#09090D]"
    >
      {/* Background Graphic Elements & Diagonal Pink Wings directly from Reference Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />

        {/* Dramatic Diagonal Neon Pink V-Wings behind athlete (matching reference) */}
        <div
          className="absolute left-0 top-[32%] w-full h-44 sm:h-64 lg:h-72 bg-gradient-to-r from-[#FF1458] via-[#FF1458] to-[#FF1458] opacity-85 z-0"
          style={{
            clipPath: "polygon(0% 12%, 50% 88%, 100% 12%, 100% 45%, 50% 100%, 0% 45%)",
          }}
        />

        {/* Neon Pink Ambient Glow */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF1458]/25 blur-[140px] pointer-events-none" />

        {/* Floating Rhombus Diamonds like reference */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [45, 48, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[6%] hidden md:block z-10"
        >
          <Rhombus size="lg" color="outline-pink" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 right-[8%] hidden md:block z-10"
        >
          <Rhombus size="md" color="pink" />
        </motion.div>

        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-28 left-[10%] hidden lg:block z-10"
        >
          <Rhombus size="sm" color="outline-white" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Intro Subtitle from Reference */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-1"
        >
          <span className="font-['Teko'] text-3xl sm:text-4xl tracking-[0.15em] uppercase text-white font-medium">
            Get Ready...
          </span>
        </motion.div>

        {/* Main Headline from Reference: "Get Armoured" in oversized neon pink */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-['Teko'] text-7xl sm:text-9xl md:text-[130px] lg:text-[160px] font-black uppercase tracking-tight leading-[0.8] text-[#FF1458] drop-shadow-[0_0_35px_rgba(255,20,88,0.5)] mb-4"
        >
          Get Armoured
        </motion.h1>

        {/* Mission Statement text directly from Reference Image */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs sm:text-sm md:text-base text-[#D4D4D8] max-w-2xl leading-relaxed mb-6 font-normal"
        >
          Our mission is simple: we will provide you with the tools to "Armour" yourself, both mind and body, to overcome your fears, break down barriers, develop a passion for exercise and to become the best version of yourself, mentally and physically.
        </motion.p>

        {/* Small "LEARN MORE" Button from Reference */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <a
            href="#consult"
            className="px-7 py-2 bg-[#09090D] hover:bg-[#FF1458] text-white border-2 border-white/80 hover:border-[#FF1458] font-['Teko'] text-xl uppercase tracking-widest font-bold transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] inline-flex items-center gap-2"
          >
            <span>LEARN MORE</span>
          </a>
        </motion.div>

        {/* Pushup Athlete Muscular Body Showcase directly breaking through the Pink Wings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full max-w-3xl -mt-2 z-10"
        >
          <div className="relative mx-auto rounded-none overflow-hidden border-2 border-[#FF1458]/40 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
              alt="Armoured Muscular Athlete Pushup Body Showcase"
              className="w-full h-72 sm:h-96 md:h-[420px] object-cover object-top filter brightness-105 contrast-110"
            />
            {/* Seamless dark fade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-transparent to-transparent opacity-70" />

            {/* Quick floating CTA badge over the athlete */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <a
                href="#consult"
                className="px-8 py-3 bg-[#FF1458] hover:bg-[#E00C4B] text-white font-['Teko'] text-2xl uppercase tracking-widest font-black shadow-[0_0_30px_rgba(255,20,88,0.8)] transition-all flex items-center gap-2 border border-[#FF1458]"
              >
                <span>CLAIM FREE 1-DAY PASS</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
