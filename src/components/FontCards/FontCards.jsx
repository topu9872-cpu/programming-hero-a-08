import AllCards from "@/app/AllCards/AllCards";
import { getBookData } from "../JsonData/data";

const FontCards = async() => {
  const bookData= await getBookData()
  return (
    <>
          <h1 className="text-5xl mt-16 font-bold text-center p-4">Take a Book </h1>
    <div className=" flex justify-center mx-auto">

         <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  rounded-2xl justify-center">
      {bookData.slice(0, 4).map((card, ind) => (
        <div key={ind}>
          <AllCards card={card} />
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default FontCards;
