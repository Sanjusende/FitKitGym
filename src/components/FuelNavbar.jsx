import React, { useState, useEffect } from "react";
import { fuelBuiltConfig } from "../data/fuelBuiltData";
import { Flame, Menu, X, ArrowRight } from "lucide-react";

export default function FuelNavbar({ onOpenBooking }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll position to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "coaching", "transformations", "blog", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#070A0F] sticky top-0 z-50 border-b border-[#1D2638]/80 backdrop-blur-md">
      {/* 1. Centered Top Pill: Fitness Website Goals 2025 (Exact match to reference) */}
      <div className="pt-3 pb-1 flex justify-center px-4">
        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FF5722] text-black font-black text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(255,87,34,0.35)] hover:scale-105 transition-transform cursor-pointer">
          <Flame className="w-4 h-4 fill-black text-black animate-pulse" />
          <span>{fuelBuiltConfig.topBadge.replace("🔥 ", "")}</span>
        </div>
      </div>

      {/* 2. Main Navigation Row */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex flex-col group cursor-pointer"
        >
          <span className="font-heading text-2xl sm:text-3xl font-black tracking-wider uppercase leading-none">
            <span className="text-[#FF5722]">FUEL</span>
            <span className="text-white">BUILT</span>
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#8F9BB3] font-bold uppercase leading-none mt-0.5 group-hover:text-[#FF5722] transition-colors">
            {fuelBuiltConfig.brandSubtitle}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {fuelBuiltConfig.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-bold tracking-widest uppercase transition-all py-1 relative ${
                  isActive
                    ? "text-[#FF5722]"
                    : "text-[#8F9BB3] hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5722] rounded-full shadow-[0_0_8px_#FF5722]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 rounded-lg border border-[#FF5722]/60 hover:border-[#FF5722] bg-[#070A0F] hover:bg-[#FF5722] text-[#FF5722] hover:text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(255,87,34,0.4)]"
          >
            BOOK A FREE CALL
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-md bg-[#FF5722] text-black font-extrabold text-xs tracking-wider uppercase sm:hidden"
          >
            CALL
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-[#1D2638] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A0F] border-t border-[#1D2638] px-4 py-4 space-y-2 shadow-2xl">
          {fuelBuiltConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-[#8F9BB3] hover:text-white hover:bg-[#0D131F] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-3 rounded-lg bg-[#FF5722] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,87,34,0.4)] flex items-center justify-center gap-2"
          >
            <span>BOOK A FREE CALL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
