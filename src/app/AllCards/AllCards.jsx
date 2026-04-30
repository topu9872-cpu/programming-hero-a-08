
import DetailsBtn from '@/components/DetailsBtn/DetailsBtn';
import Image from 'next/image';
import React from 'react';

const AllCards = ({card}) => {
  return (
    <div>
       <div className=" h-76 text-nowrap w-60 p-2 bg-base-100 shadow-2xl mt-6 rounded-2xl">
            <figure>
              <Image
                src={card?.image_url}
                width={180}
                height={240}
                alt={card.title}
                className="rounded-xl h-44 object-cover mx-auto"
              />
            </figure>

            <div className="p-8 pt-2 pb-2">
              <h2 className="card-title text-md " title={card.title}>
                {card.title}
              </h2>

              
                <DetailsBtn card={card}/>
             
            </div>
          </div>
    </div>
  );
};

export default AllCards;