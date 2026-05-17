"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import AllCards from "@/app/AllCards/AllCards";
import SearchBar from "@/components/Searchbar/SearchBar";
import { getBookData } from "../JsonData/data";

const AllBooksHooks = () => {
  const [bookData, setBookData] = useState([]);
  const [categoryId, setCategoryId] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBookData();
        setBookData(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = bookData.filter((book) => {
    const matchesCategory =
      categoryId === "All" || book.category === categoryId;
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading)
    return (
      <p>
        <span className="loading loading-spinner loading-xl mx-auto items-center flex justify-center"></span>
      </p>
    );

  return (
    <>
    
      <SearchBar search={search} setSearch={setSearch} />
<div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  rounded-2xl justify-center">
        {filteredBooks.map((card) => (
          <AllCards key={card.id} card={card} />
        ))}
      </div>

      <Sidebar setCategoryId={setCategoryId} categoryId={categoryId} />
      </div>
    </>
  );
};

export default AllBooksHooks;
