import Sidebar from "@/components/SideBar/SideBar";

import bookData from "../../../public/bookApi.json";
import AllCards from "@/app/AllCards/AllCards";



const AllBooksPage = () => {
  

  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 container rounded-2xl mx-auto  space-y-4">
      <Sidebar />
      {bookData.map((card) => (
        <AllCards key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllBooksPage;
