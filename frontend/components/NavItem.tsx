"use client";

import { useState } from "react";

interface Props {
  name: string;
  dropdown?: string[];
}

export default function NavItem({ name, dropdown }: Props) {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      <button className="flex items-center gap-1 hover:text-red-500">
        {name}
        {dropdown && <span>▾</span>}
      </button>

      {dropdown && open && (
        <div className="absolute top-8 left-0 w-64 bg-white shadow-lg border">

          {dropdown.map((item, i) => (
            <div
              key={i}
              className="px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}