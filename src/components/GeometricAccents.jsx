import React from "react";

export function Rhombus({
  size = "md", // sm, md, lg, xl
  color = "pink", // pink, white, outline-pink, outline-white
  className = "",
  style = {},
}) {
  const sizeMap = {
    xs: "w-3 h-3",
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    xxl: "w-24 h-24",
  };

  const colorMap = {
    pink: "bg-[#FF1458] shadow-[0_0_15px_rgba(255,20,88,0.5)]",
    white: "bg-white",
    black: "bg-[#09090D] border-2 border-[#FF1458]",
    "outline-pink": "border-2 sm:border-3 border-[#FF1458] bg-transparent shadow-[0_0_15px_rgba(255,20,88,0.3)]",
    "outline-white": "border-2 sm:border-3 border-white bg-transparent",
    "outline-black": "border-2 sm:border-4 border-[#09090D] bg-transparent",
  };

  return (
    <div
      className={`rotate-45 shrink-0 transition-transform duration-500 ${sizeMap[size] || "w-8 h-8"} ${colorMap[color] || colorMap.pink} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export function AngularDivider({ labelLeft = "ENQUIRIES", labelRight = "SANJAY.DEV", hrefLeft = "#contact", hrefRight = "#projects" }) {
  return (
    <div className="w-full bg-[#09090D] border-y border-[#272733] py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href={hrefLeft}
          className="group flex items-center gap-3 text-white hover:text-[#FF1458] transition-colors"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#A1A1AA] group-hover:text-[#FF1458] transition-colors">
            For More
          </span>
          <span className="font-['Teko'] text-xl sm:text-2xl tracking-wider uppercase font-bold text-white group-hover:text-[#FF1458]">
            {labelLeft}
          </span>
        </a>

        {/* Center double chevron from reference */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#16161E] border border-[#272733]">
          <div className="w-0 h-0 border-y-[10px] border-y-transparent border-r-[14px] border-r-[#FF1458]" />
          <div className="w-0.5 h-6 bg-white/40" />
          <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-white" />
        </div>

        <a
          href={hrefRight}
          className="group flex items-center gap-3 text-white hover:text-[#FF1458] transition-colors"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#A1A1AA] group-hover:text-[#FF1458] transition-colors">
            Explore
          </span>
          <span className="font-['Teko'] text-xl sm:text-2xl tracking-wider uppercase font-bold text-white group-hover:text-[#FF1458]">
            {labelRight}
          </span>
        </a>
      </div>
    </div>
  );
}
