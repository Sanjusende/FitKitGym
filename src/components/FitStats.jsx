import React, { useState, useEffect, useRef } from "react";

export default function FitStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { target: 2500, unit: "", plus: "+", label: "Active Champions" },
    { target: 120, unit: "", plus: "+", label: "World-Class Machines" },
    { target: 15, unit: "", plus: "+", label: "Certified Master Coaches" },
    { target: 99, unit: "%", plus: "", label: "Transformation Rate" },
  ];

  const [currentValues, setCurrentValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrameId;
    const duration = 2000; // 2 seconds smooth count-up

    // Smooth ease-out exponential easing function
    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCurrentValues(
        stats.map((s) => Math.round(s.target * easedProgress))
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Ensure final exact numbers
        setCurrentValues(stats.map((s) => s.target));
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-[#0a0a0a] border-t border-b border-[#1f1f1f] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#1f1f1f]">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center pt-4 md:pt-0 group cursor-default"
            >
              <div className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight flex items-baseline justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="tabular-nums">
                  {currentValues[idx]}
                  {s.unit}
                </span>
                <span className="text-[#FF2E4C] ml-0.5 red-glow">{s.plus}</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-neutral-400 group-hover:text-white uppercase tracking-wider mt-2 transition-colors">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
