import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary", // primary, secondary, outline, white, whatsapp
  size = "md",        // sm, md, lg
  href,
  onClick,
  icon = true,
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer select-none relative group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#FF1458] text-white hover:bg-[#E00C4B] hover:shadow-[0_0_25px_rgba(255,20,88,0.5)] border border-[#FF1458]",
    secondary:
      "bg-[#16161E] text-white hover:bg-[#20202C] border border-[#2B2B38] hover:border-[#FF1458]/60 hover:text-[#FF1458]",
    outline:
      "bg-transparent text-white border-2 border-[#FF1458] hover:bg-[#FF1458] hover:text-white hover:shadow-[0_0_20px_rgba(255,20,88,0.4)]",
    white:
      "bg-white text-[#09090D] border-2 border-white hover:bg-[#09090D] hover:text-white hover:border-[#FF1458]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba59] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] border border-[#25D366]",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 font-['Teko'] tracking-widest text-lg sm:text-xl leading-none pt-0.5">
        {children}
      </span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
