import React from "react";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function GallerySection({ onOpenJoin }) {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      title: "FREE WEIGHT ARSENAL",
      tag: "STRENGTH ZONE"
    },
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
      title: "OLYMPIC PLATFORMS",
      tag: "POWERLIFTING"
    },
    {
      src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop",
      title: "CABLE & FUNCTIONAL LAB",
      tag: "HYPERTROPHY"
    },
    {
      src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop",
      title: "CARDIO & SPRINT TRACK",
      tag: "METABOLIC"
    },
    {
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
      title: "DUMBBELL PIT UP TO 60KG",
      tag: "HEAVY IRON"
    },
    {
      src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
      title: "AIR-CONDITIONED HIGH-VIBE",
      tag: "COMMUNITY"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
              VISUAL EXPERIENCE
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              INSIDE <span className="text-[#FF2E4C] red-glow">FITKIT™</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-gradient-to-r hover:from-[#FF2E4C] hover:to-[#E63946] hover:text-white text-neutral-300 font-extrabold text-xs uppercase tracking-wider border border-[#1f1f1f] hover:border-[#FF2E4C] transition-all duration-300 cursor-pointer self-start md:self-auto shadow-lg hover:shadow-[0_0_20px_rgba(255,46,76,0.4)]"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW @FITKITOFFICIAL</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1f1f1f] hover:border-[#FF2E4C]/50 transition-all duration-500 group shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.1] group-hover:scale-110 group-hover:brightness-[0.85] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#FF2E4C] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-lg font-black uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FF2E4C] flex items-center justify-center text-white transition-all backdrop-blur-sm shadow-[0_0_12px_transparent] group-hover:shadow-[0_0_15px_#FF2E4C]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
