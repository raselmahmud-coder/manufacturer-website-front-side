import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import ToolsSection from "./ToolsSection/ToolsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
          <ToolsSection />
          <Reviews/>
    </>
  );
};

export default HomePage;
