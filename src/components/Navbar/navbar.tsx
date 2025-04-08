"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLink from "@/data/navLinks.json";
import { RxCross2 } from "react-icons/rx";
import Button from "@/components/Button";
import { usePathname } from "next/navigation";
import Wrapper from "@/components/Wrapper/wrapper";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from "@react-hook/media-query";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toogleOpen = () => setIsOpen(true);
  const toogleClose = () => setIsOpen(false);
  const pathname = usePathname();

  const servicesLinks = [
    { name: "All Services", url: "/services" },
    { name: "Heavy Duty Towing", url: "/services/heavy-duty-towing" },
    { name: "Emergency Assistance", url: "/services/emergency-assistance" },
    { name: "Long Distance Towing", url: "/services/long-distance-towing" },
    { name: "Accident Recovery", url: "/services/accident-recovery" },
  ];

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="z-20 fixed right-0 top-0 left-0">
      {/* Mobile Call Banner */}
      <div className="lg:hidden bg-[#096656] text-white py-2 px-4">
        <a
          href="tel:+17157553281"
          className="flex items-center justify-center gap-2"
        >
          <FaPhone className="text-sm" />
          <span className="text-sm font-medium">Call Now: (715) 755-3281</span>
        </a>
      </div>

      <div className="lg:block hidden">
        <div className="bg-[#232323] py-3">
          <Wrapper>
            <div className="flex items-center">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <a href="tel:+17157553281" className="cursor-pointer">
                    <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                      <Image
                        src="./assets/phone-icon.svg"
                        alt="phone-icon"
                        width={16}
                        height={17}
                      />
                    </div>
                  </a>
                  <p className="text-white text-[14px]">(715) 755-3281</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="mailto:dispatch@jttr.net"
                    className="cursor-pointer"
                  >
                    <div className="bg-[#096656] rounded-full w-[33px] h-[33px] flex items-center flex-col justify-center">
                      <Image
                        src="./assets/email-icon.svg"
                        alt="email-icon"
                        width={16}
                        height={17}
                      />
                    </div>
                  </Link>
                  <p className="text-white text-[15px]">dispatch@jttr.net</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>

      <div className="bg-white shadow-lg">
        <Wrapper>
          <div className="flex items-center justify-between py-3 px-4 lg:px-0">
            <Link href="/">
              <Image
                src="./assets/logo.svg"
                alt="logo"
                width={70}
                height={14}
                className="lg:w-[140px] lg:h-[68px] w-[100px] h-[48px]"
              />
            </Link>
            <ul className="flex items-center lg:gap-16 justify-between">
              {NavLink
                ? NavLink.map((item, index) => (
                    <li key={index} className="relative">
                      {item.name === "Services" ? (
                        <div ref={dropdownRef} className="relative">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                          >
                            <span
                              className={`lg:block hidden font-normal text-[18px] ${
                                pathname.includes("/services")
                                  ? "text-yellow-500 font-bold"
                                  : "text-[#666666]"
                              } hover:text-[#F6B620]`}
                            >
                              {item.name}
                            </span>
                            <IoIosArrowDown
                              className={`lg:block hidden text-[#666666] transition-transform ${
                                isServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          {isServicesOpen && isDesktop && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                              {servicesLinks.map((service, idx) => (
                                <Link
                                  key={idx}
                                  href={service.url}
                                  className="block px-4 py-2 text-[#666666] hover:bg-[#F6B620] hover:text-white transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.url}
                          className={`lg:block hidden font-normal text-[18px] ${
                            pathname === item.url
                              ? "text-yellow-500 font-bold!important"
                              : "text-[#666666]"
                          } hover:text-[#F6B620]`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))
                : "loading"}
            </ul>
            <a href="tel:+17157553281" className="lg:block hidden">
              <Button title="Call Now" width={"lg:w-[182px]"} />
            </a>

            <div
              className="lg:hidden block cursor-pointer"
              onClick={toogleOpen}
            >
              <Image
                src="./assets/menu-icon.svg"
                alt="menu"
                width={24}
                height={24}
              />
            </div>
          </div>
        </Wrapper>
      </div>

      {isOpen && (
        <div className="flex rounded-2xl p-5 justify-between bg-white shadow-2xl absolute top-[72px] w-[90%] mx-5 right-0 left-0">
          <ul className="justify-between flex flex-col space-y-3 w-full">
            <Link
              href="/"
              className="text-[#666666] hover:text-[#F6B620] font-normal text-[16px]"
              onClick={toogleClose}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[#666666] hover:text-[#F6B620] font-normal text-[16px]"
              onClick={toogleClose}
            >
              About Us
            </Link>
            <div className="relative">
              <span
                className={`text-[#666666] block font-normal text-[16px] ${
                  pathname.includes("/services") ? "text-[#F6B620]" : ""
                }`}
              >
                Services
              </span>
              <div className="mt-2 ml-4 space-y-2">
                {servicesLinks.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.url}
                    className={`block text-[#666666] hover:text-[#F6B620] text-sm py-1 ${
                      pathname === service.url ? "text-[#F6B620]" : ""
                    }`}
                    onClick={toogleClose}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/gallery"
              className="text-[#666666] hover:text-[#F6B620] font-normal text-[16px]"
              onClick={toogleClose}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-[#666666] hover:text-[#F6B620] font-normal text-[16px]"
              onClick={toogleClose}
            >
              Contact Us
            </Link>
          </ul>
          <button onClick={toogleClose} className="absolute top-5 right-5">
            <RxCross2 className="text-[#F6B620] text-lg" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
