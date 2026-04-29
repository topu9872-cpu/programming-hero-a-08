import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/heroimage.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="hero h
    h-80  relative "
    >
      <Image
        src={HeroImage}
        alt="Discover Your Next Book"
        fill
        priority
        className="object-cover"
      />

      <div className="hero-overlay  shadow-white bg-black/50 absolute inset-0"></div>

      <div className="hero-content text-neutral-content relative z-10 w-full flex justify-start px-6 md:px-16">
        <div className="max-w-xl flex flex-col items-start text-left">
          <h1 className="mb-5 text-3xl  font-bold">
            DISCOVER <br /> YOUR NEXT BOOK
          </h1>
          <p className="mb-8 ">
            Explore a wide collection of books across all genres. Find the
            stories that <br /> move you and the knowledge that empowers you.
          </p>
          <Link href={"/all-books"}>
            <button className="btn bg-[#fa3d3b] hover:text-[#d93432] hover:bg-white text-white border-none shadow-2xl rounded-full font-bold p-4 ">
              BROWSE NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
