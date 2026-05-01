"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import icon from "@/assets/icons8-profile.gif";
import pencil from "@/assets/pencil.png";

const ProfileForm = ({ user }) => {
  const [u, setU] = useState({ name: user.name || "", img: user.image }),
    [ed, setEd] = useState(false),
    ref = useRef();
  const ch = u.name !== user.name || u.img !== user.image,
    save = async () => {
      await authClient.updateUser({ name: u.name, image: u.img });
      toast.success("Updated!");
    };
  return (
    <div>
      <div className="card w-screen max-w-md bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center border-4 border-[#fa3d3b]">
        <div
          className="relative cursor-pointer mb-6 active:scale-95"
          onClick={() => ref.current.click()}
        >
          <Image
            src={u.img || icon}
            alt="P"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-50"
          />
          <input
            type="file"
            ref={ref}
            hidden
            onChange={(e) =>
              setU({ ...u, img: URL.createObjectURL(e.target.files[0]) })
            }
          />
          <div className="absolute bottom-1 right-1 bg-black text-white p-2 rounded-full border-2 border-white">
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
        </div>
        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase mb-4">
          {user.email}
        </span>
        {ed ? (
          <input
            autoFocus
            className="text-3xl font-bold text-center border-b-2 outline-none w-full"
            value={u.name}
            onBlur={() => setEd(false)}
            onChange={(e) => setU({ ...u, name: e.target.value })}
            onKeyDown={(k) => k.key === "Enter" && setEd(false)}
          />
        ) : (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setEd(true)}
          >
            <h1 className="text-3xl font-bold">{u.name || "User"}</h1>
            <Image
              src={pencil}
              width={18}
              height={18}
              alt="E"
              className="opacity-30"
            />
          </div>
        )}
        <button
          onClick={save}
          disabled={!ch}
          className={`mt-10 w-full font-bold py-4 rounded-2xl transition active:scale-95 ${ch ? "bg-black text-white shadow-lg" : "bg-gray-200 text-gray-400"}`}
        >
          {ch ? "Save & Update" : "Up to date"}
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
