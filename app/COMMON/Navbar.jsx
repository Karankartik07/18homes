"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoMdClose } from "react-icons/io"; // cross icon

export default function Navbar({color}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1186) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showServices, setShowServices] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`
            
        w-full fixed top-0 left-0 z-50 
        transition-all duration-300  
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1720px] mx-auto flex items-center justify-between lg:px-14 px-4 py-2">
        {/* LEFT SIDE — Logo + Menu */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/">
            <Image
              src={"https://res.cloudinary.com/dxlykgx6w/image/upload/v1764947537/5771-removebg-preview_vczs6r.png"}
              alt="Logo"
              width={70}
              height={70}
              className="object-contain max-w-[70px] max-h-[70px] "
            />
          </Link>

          <ul
            className={`desktop-menu hidden lg:flex items-center gap-8 ${isScrolled ? "text-black" : `text-${color}`} text-[18px]`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>

            {/* SERVICES DROPDOWN FIXED */}
            <li className="relative group cursor-pointer">
                  <Link href="/service">Serivce</Link>

         
             
            </li>

            
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="desktop-actions items-center gap-4">
          <Link
            href={"/contact"}
            className="px-7 py-2 font-bold border border-[#4dd2ff] text-[#4dd2ff] rounded-full text-[18px] hover:bg-[#4dd2ff]/20 transition"
          >
            Book Now
          </Link>

          <a
            href="tel:+919876543210"
            className="px-7 py-2 font-bold bg-[#3FFAFF] text-[#101010] rounded-full text-[18px] hover:bg-[#3be8f3] transition"
          >
            Call Now
          </a>
        </div>

        <button
          className="hamburger-icon lg:hidden text-black text-4xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu className={`${!isScrolled && !open ? "block":"hidden"}`} />}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0   z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`border-t border-t-neutral-300 mt-2 fixed top-20 left-0 h-full w-full bg-white shadow-xl z-50 p-8 pt-5
    transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col space-y-7 text-black text-[18px] ">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>

          {/* SERVICES ACCORDION */}
          <div className="flex flex-col">
            <button
              onClick={() => setShowServices(!showServices)}
              className="flex justify-between items-center w-full"
            >
              Services{" "}
              <IoIosArrowDown
                className={`transition-transform ${
                  showServices ? "rotate-180" : ""
                }`}
              />
            </button>

            {showServices && (
              <div className="pl-4 mt-3 flex flex-col space-y-3 text-[16px] text-gray-700">
                <Link
                  href="/service/dj-for-school"
                  onClick={() => setOpen(false)}
                >
                  DJ Services
                </Link>
                <Link href="/" onClick={() => setOpen(false)}>
                  Wedding
                </Link>
                <Link href="/" onClick={() => setOpen(false)}>
                  Party
                </Link>
                <Link href="/" onClick={() => setOpen(false)}>
                  Corporate Events
                </Link>
              </div>
            )}
          </div>

          <Link href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>

          <Link
            href={"/contact"}
            className="w-[200px] px-7 mt-4 py-2 border border-[#4dd2ff] text-[#4dd2ff] rounded-full"
          >
            Book Now
          </Link>

          <a
            href="tel:+919876543210"
            className="w-[200px] px-7 py-2 bg-[#4df5ff] text-black rounded-full"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
