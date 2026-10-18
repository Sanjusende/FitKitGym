import React, { useMemo } from "react";
import { PAGE_SECTIONS_CONFIG } from "../config/pageSections";
import ErrorBoundary from "../components/common/ErrorBoundary";

// Modular Page Sections
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TrainersSection from "./TrainersSection";
import PricingSection from "./PricingSection";
import BmiSection from "./BmiSection";
import ContactSection from "./ContactSection";

const PAGES_REGISTRY = {
  HomeSection,
  AboutSection,
  ServicesSection,
  TrainersSection,
  PricingSection,
  BmiSection,
  ContactSection,
};

export default function HomePage({ onOpenJoin, onSelectPlan }) {
  // Dynamically sort and filter pages based on configuration
  const activePages = useMemo(() => {
    return [...PAGE_SECTIONS_CONFIG]
      .filter((page) => page.enabled)
      .sort((a, b) => a.order - b.order);
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full">
      {activePages.map((pageConfig) => {
        const SectionComponent = PAGES_REGISTRY[pageConfig.pageKey];
        if (!SectionComponent) {
          console.warn(`[HomePage] Page component not found for key: ${pageConfig.pageKey}`);
          return null;
        }

        return (
          <ErrorBoundary key={pageConfig.id}>
            <SectionComponent
              onOpenJoin={onOpenJoin}
              onSelectPlan={onSelectPlan}
            />
          </ErrorBoundary>
        );
      })}
    </div>
  );
}
