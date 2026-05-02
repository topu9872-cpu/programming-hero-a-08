import DetailsBtn from "@/components/DetailsBtn/DetailsBtn";

import Image from "next/image";
import React from "react";

const AllCards = ({ card }) => {
  return (
    <>
      <div className="hover-3d m-4">
        
        <div className=" h-full text-nowrap hover:shadow-[ 20 20] hover:shadow-[#fa3d3b] w-60 pt-5 bg-base-100 shadow-2xl mt-6 rounded-2xl">
          <figure>
            <Image
              src={card?.image_url}
              width={150}
              height={120}
              alt={card.title}
              className="rounded-xl h-50 object-cover  mx-auto"
            />
          </figure>

          <div className="p-8 pt-2 pb-2">
            <h2 className="card-title text-md " title={card.title}>
              {card.title}
            </h2>

            <DetailsBtn card={card} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCards;
