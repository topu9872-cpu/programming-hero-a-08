// src/app/my-profile/page.jsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers"; 
import ProfileForm from "@/components/ProfileForm/ProfileForm";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return <div className="p-20 text-center">Denied</div>;
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col items-center py-20 px-4">
        <ProfileForm user={session.user} />
      </main>
    </div>
  );
};

export default MyProfilePage;
