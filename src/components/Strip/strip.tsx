"use client";
import React from "react";
import Image from "next/image";
import { grifter } from "@/app/layout";
import Stripdata from "@/data/stripData.json";

function Strip() {
  return (
    <div className={`overflow-x-hidden lg:mb-32 mb-20 ${grifter.className}`}>
      {/* Main strip */}
      <div
        className={`overflow-hidden w-full lg:h-[100px] h-[60px] relative z-10 lg:p-4 p-2 bg-[#F6B620]`}
      >
        <div className="animate-marquee flex items-center lg:space-x-10 space-x-10">
          {Stripdata
            ? Stripdata.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={item.src}
                    alt="star"
                    width={50}
                    height={50}
                    className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
                  />
                  <h1 className="lg:text-[48px] text-[30px] font-bold lg:mx-10 mx-5 text-white">
                    {item.text}
                  </h1>
                </div>
              ))
            : "loading"}
        </div>
      </div>

      {/* Overlapping black strip */}
      <div
        className={`overflow-hidden  absolute clip-right-cut left-0 w-full lg:p-4 p-2 lg:h-[100px] h-[60px]  lg:-mt-[120px] -mt-[60px] bg-black `}
      >
        <div className="animate-marquee flex items-center lg:space-x-10 space-x-10">
          {Stripdata
            ? Stripdata.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={item.src}
                    alt="star"
                    width={50}
                    height={50}
                    className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
                  />
                  <h1 className="lg:text-[48px] text-[30px] font-bold lg:mx-10 mx-5 text-white">
                    {item.text}
                  </h1>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}

export default Strip;
