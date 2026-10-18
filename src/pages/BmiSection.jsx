import React from "react";
import FitBmiCalculator from "../components/FitBmiCalculator";

export default function BmiSection({ onOpenJoin }) {
  return (
    <div id="bmi" className="scroll-mt-20">
      {/* Interactive BMI Calculator and Fitness Target Gauge */}
      <FitBmiCalculator onOpenJoin={onOpenJoin} />
    </div>
  );
}
