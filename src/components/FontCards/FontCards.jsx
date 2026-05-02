import AllCards from "@/app/AllCards/AllCards";
import { getBookData } from "../JsonData/data";

const FontCards = async() => {
  const bookData= await getBookData()
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold text-center p-4">Take a Book </h1>
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 container rounded-2xl mx-auto space-y-4">
      {bookData.slice(0, 4).map((card, ind) => (
        <div key={ind}>
          <AllCards card={card} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default FontCards;
