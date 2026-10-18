import React, { useState, useEffect, useRef } from "react";

export default function FitStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { target: 10, unit: "", plus: "+", label: "Years Of Experience" },
    { target: 500, unit: "", plus: "+", label: "Happy Clients" },
    { target: 50, unit: "", plus: "+", label: "Expert Trainers" },
    { target: 15, unit: "k", plus: "+", label: "Instagram Followers" },
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
      className="py-14 bg-[#080A0E] border-t border-b border-[#1E2533] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#1E2533]">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center pt-4 md:pt-0 group cursor-default"
            >
              <div className="font-heading text-5xl sm:text-6xl font-black text-white tracking-tight flex items-baseline justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="tabular-nums">
                  {currentValues[idx]}
                  {s.unit}
                </span>
                <span className="text-[#E63946] ml-0.5">{s.plus}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#8F9BB3] group-hover:text-white uppercase tracking-wider mt-2 transition-colors">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
