import React from "react";
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
      <h1>Hello</h1>
      <TrustedInProduction />
    </>
  );
};

export default HomePage;
