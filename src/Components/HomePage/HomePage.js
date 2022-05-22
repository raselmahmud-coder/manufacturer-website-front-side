import React from "react";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import DiscountSection from "./DiscountSection/DiscountSection";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import ToolsSection from "./ToolsSection/ToolsSection";
import TrustedInProduction from "./TrustedInProduction/TrustedInProduction";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <Reviews />
      <DiscountSection />
      <TrustedInProduction />
      <BusinessSummary/>
    </>
  );
};

export default HomePage;
