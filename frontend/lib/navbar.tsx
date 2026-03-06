"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Home } from "lucide-react";
import { MenuItem } from "@/type/type";

const menuItems: MenuItem[] = [
  { label: "PROFIL SEKOLAH", href: "/profil" },
  { label: "AKADEMIK", href: "/akademik" },
  { label: "KESISWAAN DAN HUMAS", href: "/kesiswaan" },
  { label: "SARANA PRASARANA", href: "/sarana" },
  { label: "PPID DAN LAYANAN", href: "/ppid" },
  {
    label: "PROGRAM UNGGULAN",
    children: [
      { label: "Program 1", href: "/program/1" },
      { label: "Program 2", href: "/program/2" },
    ],
  },
  {
    label: "PUBLIKASI",
    children: [
      { label: "Berita", href: "/publikasi/berita" },
      { label: "Galeri", href: "/publikasi/galeri" },
    ],
  },
  {
    label: "DAFTAR PRODUK HUKUM",
    children: [
      { label: "Peraturan", href: "/produk/peraturan" },
      { label: "Keputusan", href: "/produk/keputusan" },
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-3 gap-6">
        
        {/* Home Icon */}
        <Link
          href="/"
          className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition"
        >
          <Home size={20} />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 hover:text-gray-300 transition">
                    {item.label}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  {openIndex === index && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden z-50">
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="hover:text-gray-300 transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}