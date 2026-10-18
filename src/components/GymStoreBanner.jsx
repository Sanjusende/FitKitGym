import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";
import { gymConfig } from "../data/gymData";

export default function GymStoreBanner() {
  return (
    <section className="relative w-full overflow-hidden border-t-4 border-[#09090D]">
      <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[380px]">
        {/* Left Side: Dark Background - About Armoured & Get In Touch */}
        <div className="bg-[#09090D] p-10 sm:p-14 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#272733] relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#A1A1AA] mb-2">
            QUESTIONS OR COMMENTS
          </span>

          <h3 className="font-['Teko'] text-5xl sm:text-7xl font-black uppercase tracking-wider text-white leading-none mb-6">
            About Armoured
          </h3>

          <p className="text-sm text-[#A1A1AA] max-w-sm mb-8 leading-relaxed">
            Interested in personal coaching, corporate partnerships, or visiting our gym? Reach out to our training desk directly.
          </p>

          <a
            href="#contact"
            className="px-8 py-3 bg-white hover:bg-[#FF1458] text-[#09090D] hover:text-white font-['Teko'] text-2xl uppercase tracking-widest font-bold transition-all shadow-[4px_4px_0px_#FF1458]"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Right Side: Solid Vibrant Neon-Pink Background - Follow Us */}
        <div className="bg-[#FF1458] p-10 sm:p-14 flex flex-col justify-center items-center md:items-end text-center md:text-right relative z-10 text-white">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-white/90 mb-2">
            BE A PART OF ARMOURED
          </span>

          <h3 className="font-['Teko'] text-6xl sm:text-8xl font-black uppercase tracking-wider text-white leading-none mb-6">
            FOLLOW US
          </h3>

          <p className="text-sm text-white/90 max-w-sm mb-8 leading-relaxed">
            Get daily workout inspiration, member transformation spotlights, and nutrition tips from our elite coaching roster.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white text-[#FF1458] hover:bg-[#09090D] hover:text-white flex items-center justify-center transition-all shadow-md rotate-45"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 -rotate-45" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white text-[#FF1458] hover:bg-[#09090D] hover:text-white flex items-center justify-center transition-all shadow-md rotate-45"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5 -rotate-45" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white text-[#FF1458] hover:bg-[#09090D] hover:text-white flex items-center justify-center transition-all shadow-md rotate-45"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-5 h-5 -rotate-45" />
            </a>
          </div>
        </div>

        {/* Center Overlapping Diamond directly from Reference Image */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center pointer-events-none">
          <div className="w-44 h-44 bg-white border-4 border-[#09090D] shadow-[0_15px_35px_rgba(0,0,0,0.6)] rotate-45 flex items-center justify-center p-4 text-center pointer-events-auto">
            <div className="-rotate-45 flex flex-col items-center">
              <ShoppingBag className="w-6 h-6 text-[#FF1458] mb-1" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#09090D] font-bold">
                OUR ONLINE STORE
              </span>
              <span className="font-['Teko'] text-xl font-black uppercase text-[#09090D] leading-none mt-1">
                COMING SOON...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
