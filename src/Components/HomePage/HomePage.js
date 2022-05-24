import React from "react";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import DiscountSection from "./DiscountSection/DiscountSection";
import HeroSection from "./HeroSection/HeroSection";
import LatestPosts from "./LatestPosts/LatestPosts";
import Reviews from "./Reviews/Reviews";
import ToolsSideBarSection from "./ToolsSection/ToolsSideBarSection";
import TrustedInProduction from "./TrustedInProduction/TrustedInProduction";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ToolsSideBarSection />
      <Reviews />
      <DiscountSection />
      <TrustedInProduction />
      {/* <BusinessSummary /> */}
      <LatestPosts />
    </>
  );
};

export default HomePage;
