import AllCards from "@/app/AllCards/AllCards";
import { getBookData } from "../JsonData/data";

const FontCards = async() => {
  const bookData= await getBookData()
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 container rounded-2xl mx-auto space-y-4">
      {bookData.slice(0, 4).map((card, ind) => (
        <div key={ind}>
          <AllCards card={card} />
        </div>
      ))}
    </div>
  );
};

export default FontCards;
