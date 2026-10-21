import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function FitVideoHero({ onOpenJoin }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      videoSrc: "/videos/gym_boy_barbell.mp4",
      badge: "BHOPAL'S PREMIER FITNESS HUB",
      titleLine1: "FORGED IN IRON.",
      titleLine2: "BUILT FOR GLORY.",
      subtitle: "Push limits. Break barriers. Become unstoppable. Experience FITKIT's most elite strength destination.",
      ctaPrimary: "JOIN NOW",
      ctaSecondary: "EXPLORE SERVICES"
    },
    {
      id: 2,
      videoSrc: "/videos/gym_woman_squats.mp4",
      badge: "ELITE STRENGTH & HYPERTROPHY",
      titleLine1: "BUILT DIFFERENT.",
      titleLine2: "BUILT STRONGER.",
      subtitle: "World-class biomechanical equipment, personalized programming, and results that speak for themselves.",
      ctaPrimary: "JOIN NOW",
      ctaSecondary: "VIEW MACHINES"
    },
    {
      id: 3,
      videoSrc: "/videos/gym_boy_ropes.mp4",
      badge: "CHAMPIONS TRAIN HERE",
      titleLine1: "UNLEASH YOUR",
      titleLine2: "MAX POTENTIAL.",
      subtitle: "Join 2,500+ athletes who chose discipline over excuses. Your journey begins the moment you step in.",
      ctaPrimary: "JOIN NOW",
      ctaSecondary: "VIEW PLANS"
    }
  ];

  // Auto slide advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const yOffset = -72;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0a0a] select-none">
      
      {/* 1. Background Video Slider with Atmospheric Dimming */}
      {slides.map((s, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
            }`}
          >
            <video
              src={s.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center filter brightness-100 contrast-100"
            />
          </div>
        );
      })}

      {/* 2. Soft, Light Overlays - Keeps Video Bright & Clear while Text is perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent z-10 pointer-events-none" />

      {/* 3. Left/Right Slide Arrows */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-white/10 hover:border-[#FF2E4C] bg-black/40 hover:bg-black/80 items-center justify-center text-white/70 hover:text-[#FF2E4C] transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-white/10 hover:border-[#FF2E4C] bg-black/40 hover:bg-black/80 items-center justify-center text-white/70 hover:text-[#FF2E4C] transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 4. Center-Left Hero Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 w-full relative z-20 pt-16 pb-20">
        <div className="max-w-3xl">
          
          {/* Eyebrow Badge with trailing horizontal red line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase shadow-[0_0_15px_rgba(255,46,76,0.25)]">
              {slide.badge}
            </span>
            <div className="hidden sm:block h-[1px] w-36 bg-gradient-to-r from-[#FF2E4C]/70 to-transparent" />
          </div>

          {/* Huge White & Neon Red Chiseled Typography */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-[5.5rem] font-black uppercase tracking-tight leading-[0.95] mb-6 drop-shadow-2xl break-words">
            <span className="block text-[#FF2E4C] neon-glow">
              {slide.titleLine1}
            </span>
            <span className="block text-white mt-1">
              {slide.titleLine2}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-lg text-neutral-200 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 drop-shadow-md">
            {slide.subtitle}
          </p>

          {/* Dual Action Buttons matching red & black style */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenJoin}
              className="justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,46,76,0.5)] hover:shadow-[0_0_40px_rgba(255,46,76,0.8)] hover:scale-105 flex items-center gap-2 group cursor-pointer"
            >
              <span>{slide.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToServices}
              className="text-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#111111]/80 hover:bg-[#1a1a1a] border border-white/20 hover:border-[#FF2E4C] text-white hover:text-[#FF2E4C] font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              {slide.ctaSecondary}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Right-Hand Side Vertical "SCROLL" Indicator with pulsating Red Bar */}
      <div className="hidden lg:flex absolute right-8 bottom-16 z-30 flex-col items-center gap-3">
        <span className="[writing-mode:vertical-lr] text-[10px] font-extrabold tracking-[0.3em] uppercase text-neutral-400">
          SCROLL
        </span>
        <div className="w-[2px] h-14 bg-neutral-800 rounded-full relative overflow-hidden">
          <div className="w-full h-1/2 bg-gradient-to-b from-[#FF2E4C] to-[#E63946] rounded-full animate-bounce shadow-[0_0_8px_#FF2E4C]" />
        </div>
      </div>

      {/* 6. Bottom Slide Progress Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide
                ? "w-8 h-2 bg-[#FF2E4C] shadow-[0_0_10px_#FF2E4C]"
                : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
