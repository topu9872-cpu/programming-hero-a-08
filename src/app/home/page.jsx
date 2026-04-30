import FontCards from "@/components/FontCards/FontCards";
import HeroSection from "@/components/HeroSection/HeroSection";
import MarqueeBar from "@/components/Marquee/Marquee";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MarqueeBar />
      <FontCards/>
    </div>
  );
};

export default HomePage;
