import Sidebar from "@/components/SideBar/SideBar";

import bookData from "../../../public/bookApi.json";
import AllCards from "@/AllCards/AllCards";



const AllBooksPage = () => {
  const AllBooks = [...bookData.Story, ...bookData.Tech, ...bookData.Science];

  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 container rounded-2xl mx-auto  space-y-4">
      <Sidebar />
      {AllBooks.map((card) => (
        <AllCards key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllBooksPage;
