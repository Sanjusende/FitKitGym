import React from "react";
import FitVideoHero from "../components/FitVideoHero";
import FitMarquee from "../components/FitMarquee";

export default function HomeSection({ onOpenJoin }) {
  return (
    <div id="home" className="w-full max-w-full overflow-x-hidden scroll-mt-20">
      {/* 1. Hero Continuous Workout Video Carousel */}
      <FitVideoHero onOpenJoin={onOpenJoin} />

      {/* 2. Motivational Running Ticker */}
      <FitMarquee />
    </div>
  );
}
