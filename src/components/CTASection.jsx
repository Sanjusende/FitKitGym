import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";
import { Rhombus } from "./GeometricAccents";
import { siteConfig } from "../data/siteConfig";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappCleanNumber}?text=${encodeURIComponent(
    "Hi Sanjay! I am interested in building a modern website for my business."
  )}`;

  return (
    <section className="relative py-24 bg-[#09090D] overflow-hidden border-y-2 border-[#272733]">
      {/* Background Neon Pink Geometric Chevrons / Angled Ribbons (matching reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Pink Glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF1458]/10 blur-[130px]" />

        {/* Diagonal pink geometric stripe */}
        <div
          className="absolute inset-0 bg-[#FF1458]/10"
          style={{
            clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0% 100%)",
          }}
        />

        {/* Floating diamonds */}
        <div className="absolute top-10 left-[10%] hidden md:block">
          <Rhombus size="lg" color="outline-pink" />
        </div>
        <div className="absolute bottom-12 right-[12%] hidden md:block">
          <Rhombus size="md" color="pink" />
        </div>
        <div className="absolute top-16 right-[15%] hidden lg:block">
          <Rhombus size="sm" color="outline-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top small badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16161E] border border-[#272733] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF1458]" />
          <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
            Fast Execution • Zero Lock-In
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-['Teko'] text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] max-w-4xl mb-6">
          YOUR BUSINESS DESERVES{" "}
          <span className="text-[#FF1458] drop-shadow-[0_0_30px_rgba(255,20,88,0.5)]">
            A BETTER WEBSITE.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-10">
          Have an idea? Let’s discuss a website that fits your business and budget.
          Direct communication, fast delivery, and premium design quality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Discuss Your Project
          </Button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-['Teko'] text-xl uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all gap-2.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
