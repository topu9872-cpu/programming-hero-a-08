import Sidebar from "@/components/SideBar/SideBar";
import bookData from "../../../public/bookApi.json";
import AllCards from "@/app/AllCards/AllCards";
import SearchBar from "@/components/Searchbar/SearchBar";


const AllBooksPage = ({ categoryId }) => {
  const filteredBooks =
     categoryId === "All"
      ? bookData
      : bookData.filter((item) => item.category == categoryId);

  return (
    <div className="p-10">
     
    
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 container rounded-2xl mx-auto space-y-4">
        {bookData.map((card) => (
          <AllCards key={card.id} card={card} />
          
        ))}
      </div>
       <Sidebar/>
    </div>
  );
};

export default AllBooksPage;
