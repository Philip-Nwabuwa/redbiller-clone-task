"use client";

import Image from "next/image";

import SignInBtn from "./SignInBtn";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full h-[77px] bg-white fixed">
      <div className="flex items-center justify-between h-full max-w-[1280px] mx-auto lg:px-4 px-10">
        <div className="flex items-center text-[1.45rem] font-bold">
          <Image
            src="https://api.jochebedapps.com/1.0/storage/photos/logos/redbiller.png"
            alt="Redbiller"
            width={30}
            height={30}
          />
          edbiller™
        </div>
        <div className="lg:flex hidden items-center gap-8">
          <ul className="flex items-center space-x-2 font-bold text-[18px]">
            <li className="text-[#93110f] hover:text-black px-4">
              Why Redbiller?
            </li>
            <li className="flex group items-center gap-2 px-4">
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-black group-hover:opacity-100 rotate-180 opacity-25"
              >
                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              </svg>
            </li>
            <li className="px-4">Developer</li>
            <li className="px-4">Pricing</li>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-black group-hover:opacity-100 rotate-180 opacity-25"
                    >
                      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    </svg>
                  </li>
                  <li>Developer</li>
                  <li>Pricing</li>
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
