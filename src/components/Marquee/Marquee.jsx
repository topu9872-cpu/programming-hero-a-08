import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
  const marqueeData = [
    "New Arrivals: 'The Silent Patient' is now available!",
    "Special Discount: 20% off on all Yearly Memberships!",
    "Coming Soon: Exclusive Q&A with best-selling authors.",
    "Flash Sale: Buy 2 Get 1 Free on all Sci-Fi novels this weekend!",
    "Join our Book Club and get a free tote bag on your first visit."
  ];

  return (
    <div className="bg-[#fa3d3b] py-3 border-y border-red-700 shadow-sm">
      <Marquee speed={60} pauseOnHover={true} gradient={false}>
        {marqueeData.map((data, ind) => (
          <div key={ind} className="flex items-center">
            <span className="text-white font-semibold mx-10 text-sm md:text-base uppercase tracking-wide">
              {data}
            </span>
         
            <span className="text-white/50">|</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBar;