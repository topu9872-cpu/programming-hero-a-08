"use client";
import { useState } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import AllCards from "@/app/AllCards/AllCards";
import SearchBar from "@/components/Searchbar/SearchBar";
import bookData from "../../../public/bookApi.json";
const AllBooksHooks = () => {
  const [categoryId, setCategoryId] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBooks = bookData.filter((book) => {
    const matchesCategory =
      categoryId === "All" || book.category === categoryId;
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SearchBar  search={search} setSearch={setSearch} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container rounded-2xl mx-auto space-y-4">
        {filteredBooks.map((card) => (
          <AllCards key={card.id} card={card} />
        ))}
      </div>
      <Sidebar setCategoryId={setCategoryId} categoryId={categoryId} />
    </>
  );
};

export default AllBooksHooks;
