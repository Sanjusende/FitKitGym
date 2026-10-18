import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import { Rhombus } from "./GeometricAccents";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090D]"
    >
      {/* Background Graphic Elements & Diagonal Pink Wings inspired by reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle dark grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />

        {/* Dramatic Diagonal Neon Pink Wings / Chevron Banner behind hero */}
        <div className="absolute -left-20 top-1/4 w-[140%] h-32 md:h-48 bg-gradient-to-r from-[#FF1458]/20 via-[#FF1458]/10 to-transparent -rotate-6 transform -translate-y-12 blur-xl" />
        <div className="absolute -right-20 top-1/3 w-[140%] h-32 md:h-48 bg-gradient-to-l from-[#FF1458]/25 via-[#FF1458]/15 to-transparent rotate-6 transform translate-y-8 blur-xl" />

        {/* High-impact angular neon pink geometric ribbon */}
        <div
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-24 md:h-36 bg-gradient-to-r from-[#FF1458]/30 via-[#FF1458]/15 to-[#FF1458]/30 opacity-70"
          style={{
            clipPath: "polygon(0% 20%, 50% 85%, 100% 20%, 100% 45%, 50% 100%, 0% 45%)",
          }}
        />

        {/* Floating Rhombus Diamond Accents (matching reference image) */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [45, 50, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[8%] hidden md:block"
        >
          <Rhombus size="lg" color="outline-pink" />
        </motion.div>

        <motion.div
          animate={{ y: [12, -12, 12], rotate: [45, 40, 45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-44 right-[10%] hidden md:block"
        >
          <Rhombus size="md" color="pink" />
        </motion.div>

        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[12%] hidden lg:block"
        >
          <Rhombus size="sm" color="outline-white" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-[14%] hidden md:block"
        >
          <Rhombus size="lg" color="outline-pink" />
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#16161E] border border-[#272733] mb-6 sm:mb-8 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1458] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1458]"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E4E4E7]">
            {siteConfig.statusText}
          </span>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#FF1458]" />
        </motion.div>

        {/* Small Intro Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="h-[2px] w-6 sm:w-12 bg-[#FF1458]" />
          <span className="font-['Teko'] text-lg sm:text-2xl tracking-[0.2em] uppercase text-[#A1A1AA]">
            High-Performance Freelance Web Studio
          </span>
          <div className="h-[2px] w-6 sm:w-12 bg-[#FF1458]" />
        </motion.div>

        {/* Main Dramatic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-['Teko'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.88] text-white max-w-5xl mb-6"
        >
          PROFESSIONAL WEBSITES{" "}
          <span className="text-[#FF1458] relative inline-block drop-shadow-[0_0_35px_rgba(255,20,88,0.4)]">
            FOR GROWING
          </span>{" "}
          BUSINESSES
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal"
        >
          I design and develop modern, responsive websites that help businesses
          build trust, showcase their services and generate more enquiries.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Start Your Project
          </Button>
          <Button
            href="#projects"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore My Work
          </Button>
        </motion.div>

        {/* Key Quick Value Props / Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-[#272733]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center text-center p-3 bg-[#111116]/60 border border-[#272733]/40">
            <span className="font-['Teko'] text-2xl sm:text-3xl font-bold text-[#FF1458]">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
              Mobile-First
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-3 bg-[#111116]/60 border border-[#272733]/40">
            <span className="font-['Teko'] text-2xl sm:text-3xl font-bold text-white">
              ₹3,000
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
              Plans Starting At
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-3 bg-[#111116]/60 border border-[#272733]/40">
            <span className="font-['Teko'] text-2xl sm:text-3xl font-bold text-[#FF1458]">
              FAST
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
              3-10 Days Delivery
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-3 bg-[#111116]/60 border border-[#272733]/40">
            <span className="font-['Teko'] text-2xl sm:text-3xl font-bold text-white">
              DIRECT
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
              WhatsApp Access
            </span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#A1A1AA] group-hover:text-[#FF1458] transition-colors mb-1 font-mono">
            Scroll to Explore
          </span>
          <div className="w-8 h-8 rounded-full border border-[#272733] flex items-center justify-center group-hover:border-[#FF1458] group-hover:shadow-[0_0_12px_rgba(255,20,88,0.5)] transition-all bg-[#121217]">
            <ArrowDown className="w-4 h-4 text-[#FF1458]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
