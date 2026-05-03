"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import icon from "@/assets/icons8-profile.gif";

const ProfileForm = ({ user }) => {
  const [u, setU] = useState({ name: user.name || "", img: user.image });
  const [edit, setEdit] = useState(false);

  const changed = u.name !== user.name || u.img !== user.image;

  const handleSave = async () => {
    await authClient.updateUser({ name: u.name, image: u.img });
    toast.success("Updated!");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center border">
    
      <label className="relative cursor-pointer mb-6 active:scale-95 group">
        <Image
          src={u.img || icon}
          alt="P"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-50"
        />
        <input
          type="file"
          hidden
          onChange={(e) =>
            setU({ ...u, img: URL.createObjectURL(e.target.files[0]) })
          }
        />
        <div className="absolute bottom-1 right-1 bg-[#fa3d3b] text-white p-2 rounded-full border-2 border-white ">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </label>

      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase mb-4">
        {user.email}
      </span>

      {/* Name Toggle Logic */}
      {edit ? (
        <input
          autoFocus
          className="text-3xl font-bold text-center border-b-2 outline-none w-full"
          value={u.name}
          onBlur={() => setEdit(false)}
          onChange={(e) => setU({ ...u, name: e.target.value })}
          onKeyDown={(k) => k.key === "Enter" && setEdit(false)}
        />
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setEdit(true)}
        >
          <h1 className="text-3xl font-bold">{u.name || "User"}</h1>
          <span className="opacity-30 group-hover:opacity-100 transition-opacity">
            ✎
          </span>
        </div>
      )}

      {/* Action Button */}
      <button
        onClick={handleSave}
        disabled={!changed}
        className="mt-10 w-full font-bold py-4 rounded-2xl transition active:scale-95 bg-[#fa3d3b] text-white shadow-lg"
      >
         Save 
      </button>
    </div>
  );
};

export default ProfileForm;
