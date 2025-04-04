"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import NavLink from "@/data/navLinks.json";
import { RxCross2 } from "react-icons/rx";
import Button from "@/components/Button";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = () => setIsOpen(true);
  const toogleClose = () => setIsOpen(false);
  const pathname = usePathname();

  return (
    <div className="z-20 fixed right-0 top-0 left-0">
      <div className="lg:block hidden   ">
        <div className="bg-[#232323] py-3 px-24 raleway flex  items-center  justify-between ">
          <div className=" flex  items-center gap-10">
            <div className="flex items-center gap-3 ">
              <a href="tel:+7157553281" className="cursor-pointer">
                <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                  <Image
                    src="./assets/phone-icon.svg"
                    alt="phone-icon"
                    width={16}
                    height={17}
                  />
                </div>
              </a>
              <p className="text-white text-[14px]">+715 - 755- 3281</p>
            </div>
            <div className="flex items-center gap-3 ">
              <Link href="" className="cursor-pointer">
                <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                  <Image
                    src="./assets/email-icon.svg"
                    alt="phone-icon"
                    width={16}
                    height={17}
                  />
                </div>
              </Link>
              <p className="text-white text-[15px]">
                E-Mail Osceola Towing and Transport
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://web.facebook.com/p/Osceola-Transport-and-towing-100064027475834/?_rdc=1&_rdr#"
              className="cursor-pointer"
            >
              {" "}
              <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                <FaFacebookF className="text-white" />
              </div>{" "}
            </Link>
            <Link
              href="https://www.instagram.com/osceola_transportation_towing/"
              className="cursor-pointer"
            >
              <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                <FaInstagram className="text-white" />
              </div>{" "}
            </Link>
            <Link href="/" className="cursor-pointer">
              {" "}
              <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                <FaTwitter className="text-white" />
              </div>{" "}
            </Link>
            <Link href="/" className="cursor-pointer">
              <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                <FaLinkedinIn className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden block   ">
        <div className="bg-[#232323] py-3 raleway flex  items-center ">
            <div className="flex items-center w-full justify-center">
              <a href="tel:+17157553281" className="cursor-pointer">
                <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center mx-2">
                  <Image
                    src="./assets/phone-icon.svg"
                    alt="phone-icon"
                    width={16}
                    height={17}
                  />
                </div>
              </a>
              <p className="text-white text-[14px]">Call Now : +1 715-755-3281</p>
            </div>
        
        </div>
      </div>
      <div className="flex items-center lg:px-24 px-6 lg:py-5 py-3 bg-white raleway shadow-lg justify-between">
        <Link href="/">
          <Image
            src="./assets/logo.svg"
            alt="logo"
            width={70}
            height={14}
            className="lg:w-[140px] lg:h-[68px]"
          />
        </Link>
        <ul className="flex items-center lg:gap-16 justify-between">
          {NavLink
            ? NavLink.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={`lg:block hidden font-normal text-[18px] ${
                      pathname === item.url
                        ? "text-yellow-500 font-bold!important" // Active link styling
                        : "text-[#666666]"
                    } hover:text-[#F6B620]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))
            : "loading"}
        </ul>
        <Link href="#Contactus">
          <div className="lg:block hidden">
            <Button title="Get started" width={"lg:w-[182px]"} />
          </div>
        </Link>

        <div className="lg:hidden block cursor-pointer" onClick={toogleOpen}>
          <Image
            src="./assets/menu-icon.svg"
            alt="menu"
            width={20}
            height={15}
          />
        </div>
      </div>
      {isOpen && (
        <div className="flex rounded-2xl p-5 justify-between bg-white shadow-2xl absolute top-4 w-40 right-5">
          <ul className="justify-between flex flex-col space-y-3">
            {NavLink
              ? NavLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-[#666666] hover:text-[#F6B620] font-normal text-[16px]"
                      onClick={() => toogleClose()} // Close dropdown on navigation
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              : "loading"}
          </ul>
          <div onClick={toogleClose}>
            <RxCross2 className="text-[#F6B620] text-xs mt-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
