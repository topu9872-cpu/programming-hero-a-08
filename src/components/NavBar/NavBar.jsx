
import React from "react";
import NavLink from "./NavLink";
const NavBar = () => {
  
  return (
    <div className="shadow-sm navbar px-4 flex justify-around items-center py-3">

      <div>
         <NavLink className= "text-nowrap text-sm md:text-2xl lg:text-2xl font-bold font-['Nosifer'] text-[#fa3d3b]" href="/home">Book Platform </NavLink>
      </div>

     
      <div className="flex gap-3 ">
        <NavLink className="px-2 text-nowrap py-1 rounded-full font-bold "  href="/home">Home</NavLink>
        <NavLink className="px-2 text-nowrap py-1 rounded-full font-bold "  href="/all-books">All Books</NavLink>
        <NavLink className="px-2 text-nowrap py-1 rounded-full font-bold "  href="/my-profile">My Profile</NavLink>
      </div>

            <div className="flex items-center gap-5">
              <h1>user</h1>
        <button className="btn btn-active">Login</button>
      </div>

    </div>
  );
};

export default NavBar;