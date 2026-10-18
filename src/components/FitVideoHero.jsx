import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function FitVideoHero({ onOpenJoin }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      videoSrc: "/videos/gym_boy_barbell.mp4",
      tag: "BOY ATHLETE • BARBELL STRENGTH",
      eyebrow: "READY TO CHANGE YOUR PHYSIQUE",
      titleLine1: "KEEP BODY",
      titleLine2: "FIT & STRONG",
      subtitle: "Unleash explosive power with Olympic barbells, personalized heavy lifts, and dedicated coaching.",
      ctaPrimary: "JOIN WITH US",
      ctaSecondary: "OUR SERVICES"
    },
    {
      id: 2,
      videoSrc: "/videos/gym_woman_squats.mp4",
      tag: "WOMAN FITNESS • DUMBBELL SCULPT",
      eyebrow: "SCULPT & EMPOWER YOURSELF",
      titleLine1: "BUILD LEAN",
      titleLine2: "MUSCLE & TONE",
      subtitle: "Dynamic dumbbell hypertrophy and lower body sculpting designed for high athletic tone.",
      ctaPrimary: "JOIN WITH US",
      ctaSecondary: "OUR SERVICES"
    },
    {
      id: 3,
      videoSrc: "/videos/gym_boy_ropes.mp4",
      tag: "BOY ATHLETE • BATTLE ROPES",
      eyebrow: "EXPLODE PAST YOUR LIMITS",
      titleLine1: "UNLEASH YOUR",
      titleLine2: "RAW POWER",
      subtitle: "High-intensity metabolic battle rope intervals that incinerate fat while building endurance.",
      ctaPrimary: "CLAIM FREE PASS",
      ctaSecondary: "MEET COACHES"
    },
    {
      id: 4,
      videoSrc: "/videos/gym_woman_crossfit.mp4",
      tag: "WOMAN ATHLETE • CROSSFIT & BURPEES",
      eyebrow: "INTENSE ATHLETIC CONDITIONING",
      titleLine1: "ELEVATE YOUR",
      titleLine2: "PERFORMANCE",
      subtitle: "High-octane CrossFit conditioning and functional mobility to keep you sharp and injury-free.",
      ctaPrimary: "START TODAY",
      ctaSecondary: "SEE PRICING"
    },
    {
      id: 5,
      videoSrc: "/videos/gym_girl_kettlebell.mp4",
      tag: "GIRL FITNESS • KETTLEBELL TRAINING",
      eyebrow: "TOTAL BODY FUNCTIONAL MOVEMENT",
      titleLine1: "DISCIPLINE &",
      titleLine2: "ENDURANCE",
      subtitle: "Master kettlebell squats, posterior chain activation, and full body cardiovascular stamina.",
      ctaPrimary: "BOOK A TRIAL",
      ctaSecondary: "OUR SERVICES"
    }
  ];

  // Auto slide advance every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
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
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#080A0E] select-none">
      
      {/* 1. Background Video Slider with Crossfade */}
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
              className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.10]"
            />
          </div>
        );
      })}

      {/* 2. Gradient Overlays for High-Contrast Polish with Clear Video Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0E]/90 via-[#080A0E]/50 to-transparent/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/85 via-transparent to-[#080A0E]/30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080A0E]/30 via-transparent to-[#080A0E]/85 z-10 pointer-events-none" />

      {/* 3. Left Vertical Navigation: < P R E V */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer text-[#8F9BB3] hover:text-[#E63946] transition-colors py-4 px-2"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#E63946] group-hover:-translate-x-1 transition-all" />
        <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] text-white/70 group-hover:text-[#E63946]">
          PREV
        </span>
      </button>

      {/* 4. Right Vertical Navigation: N E X T > */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer text-[#8F9BB3] hover:text-[#E63946] transition-colors py-4 px-2"
        aria-label="Next Slide"
      >
        <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.4em] text-white/70 group-hover:text-[#E63946]">
          NEXT
        </span>
        <ChevronRight className="w-5 h-5 text-white group-hover:text-[#E63946] group-hover:translate-x-1 transition-all" />
      </button>

      {/* 5. Center-Left Hero Content Overlay */}
      <div className="max-w-7xl mx-auto px-12 sm:px-20 w-full relative z-20 pt-12 pb-16">
        <div className="max-w-2xl">
          
          {/* Eyebrow and Tag Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="w-8 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs sm:text-sm font-black uppercase tracking-widest">
              {slide.eyebrow}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-wider backdrop-blur-sm border border-white/10">
              {slide.tag}
            </span>
          </div>

          {/* Huge White Chiseled Typography */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] mb-5 text-white drop-shadow-2xl">
            <span className="block">{slide.titleLine1}</span>
            <span className="block text-white">{slide.titleLine2}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-lg mb-8">
            {slide.subtitle}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-lg bg-[#E63946] hover:bg-[#D62828] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(230,57,70,0.5)] hover:shadow-[0_0_35px_rgba(230,57,70,0.8)] hover:scale-105 flex items-center gap-2 group cursor-pointer"
            >
              <span>{slide.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 rounded-lg bg-black/40 hover:bg-[#1E2533] border border-white/20 hover:border-[#E63946] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              {slide.ctaSecondary}
            </button>
          </div>

        </div>
      </div>

      {/* 6. Bottom Slide Progress Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide
                ? "w-8 h-2 bg-[#E63946] shadow-[0_0_10px_#E63946]"
                : "w-2 h-2 bg-white/40 hover:bg-white"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
