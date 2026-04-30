"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((item) => setData(item));
  }, []);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-5  text-xs z-50 left-2  text-black px-3 py-1 rounded"
        >
          ☰
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-50 bg-black text-white p-5
        transform transition-transform duration-500 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button onClick={() => setOpen(false)} className="text-sm mb-6">
          ✕
        </button>

        <nav className="flex flex-col gap-4">
          {data.map((i) => (
            <div key={i.id}>
            <Link href={''}>
              
              <span >{i.name}</span>
            </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
