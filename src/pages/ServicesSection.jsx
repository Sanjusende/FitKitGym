import React from "react";
import FitServices from "../components/FitServices";

export default function ServicesSection({ onOpenJoin }) {
  return (
    <div id="services" className="scroll-mt-20">
      {/* Our Services with Dedicated Thematic Background Images */}
      <FitServices onOpenJoin={onOpenJoin} />
    </div>
  );
}
