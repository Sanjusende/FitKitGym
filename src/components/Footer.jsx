import React from "react";
import { ArrowUp, Globe, MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { siteConfig } from "../data/siteConfig";
import { servicesData } from "../data/services";
import { Rhombus } from "./GeometricAccents";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090D] border-t-2 border-[#272733] relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF1458]/20 via-[#FF1458] to-[#FF1458]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#22222F]">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#16161E] border border-[#FF1458] flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(255,20,88,0.4)]">
                <span className="-rotate-45 font-['Teko'] text-xl font-bold text-[#FF1458]">
                  S
                </span>
              </div>
              <div className="flex items-center tracking-wider">
                <span className="font-['Teko'] text-3xl font-black text-white">
                  SANJAY
                </span>
                <span className="font-['Teko'] text-3xl font-black text-[#FF1458]">
                  .DEV
                </span>
              </div>
            </a>

            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
              {siteConfig.shortBio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#16161E] border border-[#272733] hover:border-[#FF1458] text-white hover:text-[#FF1458] flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#16161E] border border-[#272733] hover:border-[#FF1458] text-white hover:text-[#FF1458] flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#16161E] border border-[#272733] hover:border-[#FF1458] text-white hover:text-[#FF1458] flex items-center justify-center transition-colors"
                aria-label="Live Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappCleanNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#16161E] border border-[#272733] hover:border-[#25D366] text-white hover:text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Teko'] text-2xl uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-[#FF1458] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-[#FF1458]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-['Teko'] text-2xl uppercase tracking-wider text-white">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Rhombus size="xs" color="pink" />
                    <span>{svc.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#16161E] border border-[#272733] text-[10px] font-mono text-[#A1A1AA]">
                Introductory Pricing from ₹3,000 INR
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71717A] text-center sm:text-left">
            © {currentYear} <span className="text-white font-bold">SANJAY.DEV</span>. All rights reserved. Designed & built for ambitious businesses.
          </p>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#16161E] border border-[#272733] hover:border-[#FF1458] text-white hover:text-[#FF1458] text-xs uppercase font-mono tracking-wider transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF1458] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
