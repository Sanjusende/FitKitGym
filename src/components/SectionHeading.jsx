import React from "react";
import { Rhombus } from "./GeometricAccents";

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center", // center, left
  theme = "dark",   // dark, light
  className = "",
}) {
  const isLight = theme === "light";

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {/* Badge with flanking lines and diamond */}
      {badge && (
        <div
          className={`flex items-center gap-3 mb-3 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className={`h-[1px] w-8 sm:w-12 ${
              isLight ? "bg-[#09090D]/40" : "bg-[#FF1458]"
            }`}
          />
          <Rhombus size="xs" color="pink" />
          <span
            className={`text-xs sm:text-sm font-bold tracking-[0.25em] uppercase ${
              isLight ? "text-[#09090D]/80" : "text-[#FF1458]"
            }`}
          >
            {badge}
          </span>
          <Rhombus size="xs" color="pink" />
          <div
            className={`h-[1px] w-8 sm:w-12 ${
              isLight ? "bg-[#09090D]/40" : "bg-[#FF1458]"
            }`}
          />
        </div>
      )}

      {/* Main oversized condensed title */}
      <h2
        className={`font-['Teko'] text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wider leading-[0.95] mb-4 ${
          isLight ? "text-[#09090D]" : "text-white"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-[#FF1458] relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle / description */}
      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed ${
            isLight ? "text-[#4B5563]" : "text-[#A1A1AA]"
          } max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
