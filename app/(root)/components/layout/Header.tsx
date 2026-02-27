"use client";
import { PiSwordLight } from "react-icons/pi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoFootballOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import {
  FaThLarge,
  FaChess,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14bfd1] to-[#ff08fc]" />

      {/* NAVBAR CONTAINER */}
      <div className="relative mx-auto flex max-w-335 items-center gap-10  justify-between h-[110px] px-3 ">
        {/* LOGO */}
        <Link href="/" className="relative flex z-50">
          <img
            src="/gamesbeatlogo.png"
            alt="Logo"
            className="h-[130px] object-contain relative top-4"
          />
        </Link>

        {/* ✅ DESKTOP MENU (ONLY XL AND ABOVE) */}
        <nav className="hidden xl:flex gap-8 items-center z-50">
          <NavItem href="/adventures" icon={<PiSwordLight size={28} />}>
            ADVENTURES
          </NavItem>
          <NavItem href="/arcade" icon={<FaThLarge size={22} />}>
            ARCADE
          </NavItem>
          <NavItem href="/strategy" icon={<FaChess size={22} />}>
            STRATEGY
          </NavItem>
          <NavItem
            href="/braintraining"
            icon={<RiLightbulbFlashLine size={22} />}
          >
            BRAINTRAINING
          </NavItem>
          <NavItem href="/sports" icon={<IoFootballOutline size={22} />}>
            SPORTS
          </NavItem>

          <Link
            href="/login"
            className="flex items-center gap-3 bg-black rounded-full px-6 py-3 text-white"
          >
            <FaUserCircle size={25} />
            <span>My Account</span>
          </Link>

          <select
            className="
    appearance-none
    rounded-full
    border-1 border-white/30
    bg-transparent
    px-2 py-2
    text-white
    outline-none
    cursor-pointer
  "
          >
            <option className="text-black">EN</option>
            <option className="text-black">UR</option>
            <option className="text-black">FR</option>
            <option className="text-black">DE</option>
          </select>
        </nav>

        {/* ✅ MOBILE / TABLET / NEST HUB (Below XL) */}
        <div className="flex items-center gap-3 xl:hidden z-50 ml-auto">
        <select
            className="
    appearance-none
    rounded-full
    border-2 border-white/30
    bg-transparent
    px-2 py-2
    text-white
    outline-none
    cursor-pointer
  "
          >
            <option className="text-black">EN</option>
            <option className="text-black">UR</option>
            <option className="text-black">FR</option>
            <option className="text-black">DE</option>
          </select>

          <Link href="/login">
            <FaUserCircle size={24} className="text-black" />
          </Link>

          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? (
              <FaTimes size={26} className="text-black" />
            ) : (
              <FaBars size={26} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE DROPDOWN */}
      {open && (
        <div className="xl:hidden absolute top-[110px] left-0 w-full bg-pink-500 py-6 px-6 space-y-4">
          <MobileItem href="/adventures" icon={<PiSwordLight />}>
            ADVENTURES
          </MobileItem>
          <MobileItem href="/arcade" icon={<FaThLarge />}>
            ARCADE
          </MobileItem>
          <MobileItem href="/strategy" icon={<FaChess />}>
            STRATEGY
          </MobileItem>
          <MobileItem href="/braintraining" icon={<RiLightbulbFlashLine />}>
            BRAINTRAINING
          </MobileItem>
          <MobileItem href="/sports" icon={<IoFootballOutline />}>
            SPORTS
          </MobileItem>
        </div>
      )}
    </header>
  );
}

/* ------------------ NavItem ------------------ */
function NavItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-white hover:text-[#1cd7f6] transition"
    >
      <span className="text-black">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}

/* ------------------ MobileItem ------------------ */
function MobileItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 py-3 px-4 bg-pink-600 rounded-md hover:bg-pink-700 transition text-white"
    >
      <span className="text-black">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
