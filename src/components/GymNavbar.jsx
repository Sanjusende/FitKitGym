import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield, Dumbbell } from "lucide-react";
import { gymConfig } from "../data/gymData";
import { Rhombus } from "./GeometricAccents";

export default function GymNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090D]/95 backdrop-blur-md border-b border-[#272733]/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="ARMOURED Fitness Home"
            >
              {/* Armoured Hex Shield Icon from Reference */}
              <div className="w-10 h-10 bg-[#16161E] border-2 border-[#FF1458] flex items-center justify-center rotate-45 group-hover:shadow-[0_0_20px_rgba(255,20,88,0.7)] transition-all">
                <span className="-rotate-45 font-['Teko'] text-2xl font-black text-white group-hover:text-[#FF1458] transition-colors">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center tracking-wider">
                  <span className="font-['Teko'] text-3xl sm:text-4xl font-black text-white tracking-widest leading-none">
                    ARMOURED
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#FF1458] font-bold font-mono -mt-1">
                  Fitness Club
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#121217]/90 px-5 py-2 border border-[#272733]/60">
              {gymConfig.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1 text-xs xl:text-sm font-bold tracking-widest uppercase text-[#A1A1AA] hover:text-white hover:bg-[#1C1C26] transition-all relative group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF1458] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#consult"
                className="relative inline-flex items-center justify-center px-6 py-2.5 bg-[#FF1458] text-white font-['Teko'] text-2xl tracking-wider uppercase font-bold hover:bg-[#E00C4B] hover:shadow-[0_0_25px_rgba(255,20,88,0.7)] transition-all group border border-[#FF1458]"
              >
                <span>Free 1-Day Pass</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-white bg-[#16161E] border border-[#272733] hover:border-[#FF1458] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FF1458]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[74px] z-40 bg-[#09090D]/98 border-b-2 border-[#FF1458] p-6 shadow-2xl lg:hidden backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-3">
              {gymConfig.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-2.5 px-3 text-xl font-['Teko'] uppercase tracking-widest text-[#E4E4E7] hover:text-white hover:bg-[#16161E] border-b border-[#272733]/40"
                >
                  <span>{link.name}</span>
                  <Rhombus size="xs" color="pink" />
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#consult"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center py-3.5 bg-[#FF1458] text-white font-['Teko'] text-2xl uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(255,20,88,0.5)]"
                >
                  <span>Claim Free 1-Day Pass</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
