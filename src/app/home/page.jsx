import FontCards from "@/components/FontCards/FontCards";
import HeroSection from "@/components/HeroSection/HeroSection";
import MarqueeBar from "@/components/Marquee/Marquee";
import PriceingCards from "@/components/PriceingCards/PriceingCards";
import Text from "@/components/WhatWeDo/Text";

import React from "react";

const HomePage = () => {
  return (
    <div >
      <HeroSection />
      <MarqueeBar />
      <FontCards/>
      <Text/>
      <PriceingCards/>
    </div>
  );
};

export default HomePage;
