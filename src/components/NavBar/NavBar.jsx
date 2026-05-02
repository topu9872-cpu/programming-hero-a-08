"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

// import icon from '@/assets/icons8-profile.gif';
// import Image from "next/image";
const NavBar = ({name}) => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
console.log(name)
  const handleSingOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  return (
    <div>
    <div className="shadow-sm navbar  px-4 flex justify-around items-center py-3">
      <div className="pl-6 md:pl-3">
        <NavLink
          className="text-nowrap text-xs md:text-2xl lg:text-2xl font-bold  font-['Nosifer'] hidden sm:flex text-[#fa3d3b]"
          href="/home"
        >
          BookBorrow
        </NavLink>
      </div>

      <div className="flex gap-1 md:gap-3 ">
        <NavLink
          className="px-2 text-nowrap py-1 text-sm md:text-lg rounded-full font-bold "
          href="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="px-2 text-nowrap py-1 text-sm md:text-lg rounded-full font-bold "
          href="/all-books"
        >
          All Books
        </NavLink>
        <NavLink
          className="px-2 text-nowrap py-1 text-sm md:text-lg rounded-full font-bold "
          href="/my-profile"
        >
          My Profile
        </NavLink>
      </div>
      {!user && (
        <div>
          {/* <span className='flex gap-2'> <Image src={icon} weidth={30} height={30} alt={'ds'} className='object-cover rounded-full'   /></span> */}
          <Link href={"/signin"}>
            <button className="btn bg-[#fa3d3b] text-white font-bold hover:text-[#fa3d3b] hover:bg-white border border-[#fa3d3b]">Login</button>
          </Link>
        </div>
      )}
      {user && (
        <div className="flex items-center gap-5">
          <h2>{`Hello, ${user.name} !`}</h2>
          {/* <Image src={user?.image && user.image.startsWith("http")
      ? user.image
      : "/default-user.png"} height={30} width={30} alt={user?.name}  referrerPolicy='no-referrer' */}
          {/* className="rounded-full border-2 border-[#fa3d3b] p-1"/> */}

         <button onClick={handleSingOut} className="btn bg-[#fa3d3b] text-white font-bold hover:text-[#fa3d3b] hover:bg-white border border-[#fa3d3b]">
            Logout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default NavBar;
