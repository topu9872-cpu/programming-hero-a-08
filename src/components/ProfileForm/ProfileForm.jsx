"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import icon from "@/assets/icons8-profile.gif";
import pencil from "@/assets/pencil.png";
import plus from "@/assets/plus.png";

const ProfileForm = ({ user }) => {
  const [img, setImg] = useState(user.image || icon),
    [ed, setEd] = useState(false);
  const save = async (e) => {
    e.preventDefault();
    await authClient.updateUser({
      name: e.target.name?.value || user.name,
      image: img,
    });
    toast.success("Updated!");
  };
  return (
    <form
      onSubmit={save}
      className="card w-full max-w-md bg-white p-8 rounded-2xl shadow-md flex flex-col items-center border-4 border-[#fa3d3b]" >
      <label className="relative cursor-pointer ">
        <Image
          src={img}
          alt="P"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-50"/>
        <input
          type="file"
          hidden
          onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}/>
        <Image
          src={plus}
          width={40}
          height={40}
          alt="plus"
          className="absolute bottom-1 right-1 bg-white rounded-full p-1" />
      </label>
      <p className="text-xs font-bold opacity-60 bg-gray-100 px-3 py-1 rounded-full">
        {user.email} </p>
      {ed ? (
        <input
          name="name"
          autoFocus
          className="text-3xl font-bold text-center border-b-2 w-full"
          defaultValue={user.name}
          onBlur={() => setEd(false)}/>
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setEd(true)}    >
          <h1 className="text-3xl font-bold">{user.name || "User"}</h1>
          <Image
            src={pencil}
            width={20}
            height={20}
            alt="pencil"
            className="opacity-60" />
        </div>
      )}
      <button
        type="submit"
        className="mt-4 w-full text-xl font-extrabold py-3 rounded-2xl bg-[#fa3d3b] text-white "  >
        Save
      </button>
    </form>
  );
};
export default ProfileForm;
