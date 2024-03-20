"use client";

import Image from "next/image";

import SignInBtn from "./SignInBtn";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Icons from "./Icons";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);

  const handleClickOutside = (e: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropDownOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-[77px] bg-white fixed z-10">
      <div className="flex items-center justify-between h-full container">
        <Link className="flex items-center text-[1.45rem] font-bold" href={"/"}>
          <Image
            src="https://api.jochebedapps.com/1.0/storage/photos/logos/redbiller.png"
            alt="Redbiller"
            width={30}
            height={30}
          />
          edbiller™
        </Link>
        <div className="lg:flex hidden items-center gap-8">
          <ul className="flex items-center space-x-2 font-bold text-[18px]">
            <li className="text-[#93110f] hover:text-black px-4">
              <Link href={"/why-redbiller"}>Why Redbiller?</Link>
            </li>
            <li ref={dropdownRef} className="flex group px-4 cursor-pointer">
              <button
                className="flex  items-center gap-2"
                onClick={() => setDropDownOpen(!dropDownOpen)}
              >
                Products
                <Icons.dropdownArrow className="fill-black group-hover:opacity-100 rotate-180 opacity-25" />
              </button>
              <div
                className={`absolute top-[60px] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
                  dropDownOpen ? "visible" : "invisible"
                }`}
              >
                <Icons.dropdownArrow className="absolute -top-[9.1px] left-[50px] fill-white stroke-[#999ca3] w-3 h-3" />
                <div className="absolute -top-[2px] left-[53px] bg-white border-none w-[6px] h-[6px]"></div>
                <ul className="py-1 text-sm text-[#999ca3] rounded-md border border-solid border-[#999ca3]">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Check Out
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      KYC
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Airtime Pin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      POS
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-4">Developer</li>
            <Link href={"/pricing"}>
              <li className="px-4">Pricing</li>
            </Link>

            <li className="px-4">Blog</li>
          </ul>
          <div>
            <SignInBtn />
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-8">
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="px-2 py-2 focus:outline-none focus:border-gray-300 focus:border rounded-full"
            >
              {isOpen ? <X /> : <AlignJustify />}
            </button>
            {isOpen && (
              <div className="absolute -right-[42px] mt-4 w-screen bg-white border shadow-lg">
                <ul className="px-10 py-4 space-y-2 font-bold text-[18px]">
                  <li className="text-[#93110f] hover:text-black">
                    Why Redbiller?
                  </li>
                  <li className="flex group items-center gap-2">
                    Products
                    <Icons.dropdownArrow />
                  </li>
                  <li>Developer</li>
                  <Link href={"/pricing"}>
                    <li>Pricing</li>
                  </Link>
                  <li>Blog</li>
                  <div>
                    <SignInBtn />
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
