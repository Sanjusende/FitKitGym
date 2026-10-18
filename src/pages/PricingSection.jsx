import React from "react";
import FitPricing from "../components/FitPricing";
import FuelReviews from "../components/FuelReviews";
import FitPromoBanner from "../components/FitPromoBanner";

export default function PricingSection({ onOpenJoin, onSelectPlan }) {
  return (
    <div id="pricing" className="scroll-mt-20">
      {/* 1. Indian Gym Membership Pricing Tiers */}
      <FitPricing onSelectPlan={onSelectPlan} />

      {/* 2. Client Testimonials & Social Proof */}
      <FuelReviews />

      {/* 3. Limited Intake Promotional Banner */}
      <FitPromoBanner onOpenJoin={onOpenJoin} />
    </div>
  );
}
