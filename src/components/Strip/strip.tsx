"use client";
import React from "react";
import Image from "next/image";
import { grifter } from "@/app/layout";
function Strip() {
  return (
    <div className={`mb-32 ${grifter.className} `}>
      <div
        className={`overflow-hidden w-full h-[100px]  relative z-10 p-4 bg-[#F6B620]`}
      >
        <div className=" flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Towing</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Osceolla</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Towing</h1>
          </div>
          {/* Duplicate content for seamless transition */}
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Osceolla</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Towing</h1>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden w-full  -ml-3 p-4  h-[100px] absolute -mt-[90px] bg-black -rotate-6`}
      >
        <div className=" flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Osceolla</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Towing</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Osceolla</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Towing</h1>
          </div>
          {/* Duplicate content for seamless transition */}
          <div className="flex items-center space-x-6">
            <Image src="/assets/star.svg" alt="star" width={50} height={50} />
            <h1 className="text-[48px] font-bold text-white">Osceolla</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strip;
