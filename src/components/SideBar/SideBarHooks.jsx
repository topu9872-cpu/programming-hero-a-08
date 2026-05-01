"use client";
import { useState } from "react";
import Sidebar from "./SideBar";
import AllBooksPage from "@/app/all-books/page";

const SideBarHooks = () => {
  const [categoryId, setCategoryId] = useState("All");

  return (
    <div className="flex min-h-screen">
      <Sidebar categoryId={categoryId} setCategoryId={setCategoryId} />

      <div>
        <AllBooksPage categoryId={categoryId} />
      </div>
    </div>
  );
};

export default SideBarHooks;
