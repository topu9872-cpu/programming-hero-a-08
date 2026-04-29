
import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div className="shadow-sm navbar px-4 flex justify-around items-center py-3">

      <div>
         <NavLink className="btn font-bold" href="/home">Book Platform </NavLink>
      </div>

     
      <div className="flex gap-3 ">
        <NavLink className="px-2 py-1 rounded-full font-bold "  href="/home">Home</NavLink>
        <NavLink className="px-2 py-1 rounded-full font-bold "  href="/all-books">All Books</NavLink>
        <NavLink className="px-2 py-1 rounded-full font-bold "  href="/my-profile">My Profile</NavLink>
      </div>

            <div>
        <button className="btn btn-active">Login</button>
      </div>

    </div>
  );
};

export default NavBar;