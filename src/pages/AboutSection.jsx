import React from "react";
import FitAbout from "../components/FitAbout";
import FitStats from "../components/FitStats";

export default function AboutSection({ onOpenJoin }) {
  return (
    <div id="about" className="scroll-mt-20">
      {/* 1. About Us: Unleashing Potential With Intense Fitness Workouts */}
      <FitAbout onOpenJoin={onOpenJoin} />

      {/* 2. Key Stats Animated Counter (0 to 10+, 500+, 50+, 15k+) */}
      <FitStats />
    </div>
  );
}
