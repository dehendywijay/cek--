import Image from "next/image";
import NavItem from "./NavItem";
import { menu } from "@/type/menu";


export default function Navbar() {
  return (
    <div className="w-full bg-white shadow">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={45}
            height={45}
          />
          <span className="font-semibold text-lg">
            SMK Telkom Lampung
          </span>
        </div>

        {/* Menu */}
        <nav className="flex gap-8 font-medium text-gray-700">

          {menu.map((item, i) => (
            <NavItem
              key={i}
              name={item.name}
              dropdown={item.dropdown}
            />
          ))}

        </nav>

      </div>
    </div>
  );
}