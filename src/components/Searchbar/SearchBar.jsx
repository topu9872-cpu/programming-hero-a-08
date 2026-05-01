"use client";
import React, { useState} from "react";
import bookData from "../../../public/bookApi.json";
import AllBooksPage from "@/app/all-books/page";

const SearchBar = () => {
  const [filteredBooks, setFilteredBooks] = useState(bookData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const filtered = bookData.filter((book) =>
      book.title.toLowerCase().includes(query),
    );

    setFilteredBooks(filtered);
  };

  return (
    <div>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          required
          placeholder="Search by title or author..."
        />
      </label>

      <AllBooksPage search={filteredBooks} />
    </div>
  );
};

export default SearchBar;
