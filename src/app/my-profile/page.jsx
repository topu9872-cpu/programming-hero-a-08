// src/app/my-profile/page.jsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers"; 
import ProfileForm from "@/components/ProfileForm/ProfileForm";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { toast } from "react-toastify";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session){
toast.error('Lognin')
  } 
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="flex flex-col items-center py-20 px-4">
       <div className="flex justify-start mr-80 sm:mr-130 md:mr-170 top-28 sm:top-20 absolute ">
         <Link href={"/"}>
        <h1 className="text-[#fa3d3b] font-bold flex items-center cursor-pointer">
          <BiLeftArrowAlt /> Back
        </h1>
      </Link>
       </div>
        <ProfileForm user={session.user} />
      </main>
    </div>
  );
};

export default MyProfilePage;
