import React from "react";
import FitTrainers from "../components/FitTrainers";
import FuelTransformations from "../components/FuelTransformations";

export default function TrainersSection({ onOpenJoin }) {
  return (
    <div id="trainers" className="scroll-mt-20">
      {/* 1. Meet Our Certified Strength & Conditioning Trainers */}
      <FitTrainers onOpenJoin={onOpenJoin} />

      {/* 2. Real Client Transformation Case Studies Delivered By Our Trainers */}
      <FuelTransformations onOpenBooking={onOpenJoin} />
    </div>
  );
}
