import AllBooksHooks from "@/components/AllBooksHooks/AllBooksHooks";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";


const AllBooksPage = () => {
  return (
    <div className="p-10">
      <Link href={"/"}>
        <h1 className="text-[#fa3d3b] font-bold flex items-center cursor-pointer">
          <BiLeftArrowAlt /> Back
        </h1>
      </Link>
      <AllBooksHooks />
    </div>
  );
};

export default AllBooksPage;
