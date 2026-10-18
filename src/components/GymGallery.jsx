import React from "react";
import { galleryImages, gymConfig } from "../data/gymData";
import { ExternalLink } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function GymGallery() {
  return (
    <section id="gallery" className="w-full bg-[#09090D] border-t-2 border-[#272733] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#FF1458] font-bold">
          Visual Arena
        </span>
        <h2 className="font-['Teko'] text-4xl sm:text-6xl font-black uppercase tracking-wider text-white">
          THE ARMOURED LIFE
        </h2>
      </div>

      {/* Multi-Photo Grid matching reference Instagram row */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 px-2">
        {/* Photo 1 */}
        <div className="relative h-60 md:h-72 overflow-hidden bg-black group">
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 font-bold bg-black/60 px-2 py-0.5">
            {galleryImages[0].label}
          </span>
        </div>

        {/* Photo 2 */}
        <div className="relative h-60 md:h-72 overflow-hidden bg-black group">
          <img
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 font-bold bg-black/60 px-2 py-0.5">
            {galleryImages[1].label}
          </span>
        </div>

        {/* Center Instagram Emblem Box directly matching reference image */}
        <div className="col-span-2 relative h-60 md:h-72 bg-white flex flex-col items-center justify-center p-6 text-center shadow-lg border-2 border-[#FF1458]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#09090D] font-bold mb-3">
            VISIT OUR INSTAGRAM
          </span>

          {/* Hexagon Logo from Reference */}
          <div className="w-16 h-16 bg-[#09090D] border-2 border-[#FF1458] flex items-center justify-center rotate-45 mb-4 shadow-[0_0_15px_rgba(255,20,88,0.4)]">
            <span className="-rotate-45 font-['Teko'] text-3xl font-black text-[#FF1458]">
              A
            </span>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Teko'] text-2xl uppercase tracking-wider text-[#09090D] hover:text-[#FF1458] transition-colors flex items-center gap-1.5 font-bold"
          >
            <span>{gymConfig.instagram}</span>
            <ExternalLink className="w-4 h-4 text-[#FF1458]" />
          </a>
        </div>

        {/* Photo 3 */}
        <div className="relative h-60 md:h-72 overflow-hidden bg-black group">
          <img
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 font-bold bg-black/60 px-2 py-0.5">
            {galleryImages[3].label}
          </span>
        </div>

        {/* Photo 4 */}
        <div className="relative h-60 md:h-72 overflow-hidden bg-black group">
          <img
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 font-bold bg-black/60 px-2 py-0.5">
            {galleryImages[4].label}
          </span>
        </div>
      </div>
    </section>
  );
}
