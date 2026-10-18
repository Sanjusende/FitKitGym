import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, X, Dumbbell, Phone } from "lucide-react";

export default function FitNavbar({ onOpenJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isManualScrolling = useRef(false);

  // Ordered nav links: HOME -> ABOUT (right after HOME) -> SERVICES -> PRICING -> BMI -> CONTACT
  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SERVICES", href: "#services", id: "services" },
    { name: "TRAINERS", href: "#trainers", id: "trainers" },
    { name: "PRICING", href: "#pricing", id: "pricing" },
    { name: "BMI", href: "#bmi", id: "bmi" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  // Scroll listener for sticky navbar & scroll-spy active state tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip scroll-spy overwrite during programmatic smooth scroll
      if (isManualScrolling.current) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    isManualScrolling.current = true;

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }

    // Release lock once scroll has finished
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);

    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 px-4 sm:px-8 py-4 ${
          scrolled
            ? "bg-[#080A0E]/95 backdrop-blur-md border-b border-[#1E2533] shadow-2xl py-3"
            : "bg-[#080A0E]/85 backdrop-blur-sm border-b border-[#1E2533]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo: FITKIT */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#E63946] flex items-center justify-center shadow-[0_0_20px_rgba(230,57,70,0.5)] group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl font-black tracking-wider uppercase leading-none text-white">
                FIT<span className="text-[#E63946]">KIT</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#8F9BB3] font-extrabold uppercase leading-none mt-0.5">
                ELITE FITNESS CLUB
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Active Animated Indicator for ALL links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-xs font-black tracking-widest uppercase transition-all duration-200 py-1.5 relative group cursor-pointer ${
                    isActive
                      ? "text-[#E63946]"
                      : "text-[#8F9BB3] hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Active Animated Red Underline with Glow */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E63946] rounded-full shadow-[0_0_12px_#E63946] transition-all duration-300" />
                  )}

                  {/* Hover Underline for Inactive Links */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/40 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button 
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#0E1219] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <div className="relative cursor-pointer p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#0E1219] transition-colors">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E63946] text-white text-[9px] font-black flex items-center justify-center">
                0
              </span>
            </div>

            <button
              onClick={onOpenJoin}
              className="px-5 py-2.5 rounded-lg bg-[#E63946] hover:bg-[#D62828] text-white font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] flex items-center gap-2 cursor-pointer"
            >
              <span>JOIN NOW</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenJoin}
              className="px-3 py-1.5 rounded-md bg-[#E63946] text-white font-extrabold text-xs uppercase"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-[#0E1219] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#1E2533] bg-[#080A0E] rounded-xl p-4 flex flex-col gap-2 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#E63946] bg-[#E63946]/10 font-black border-l-2 border-[#E63946]"
                      : "text-[#8F9BB3] hover:text-white hover:bg-[#0E1219]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="w-full mt-2 py-3 rounded-lg bg-[#E63946] text-white font-black tracking-wider uppercase text-xs shadow-[0_0_20px_rgba(230,57,70,0.5)] cursor-pointer"
            >
              JOIN WITH US
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
