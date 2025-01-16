"use client";
import React from "react";
import Image from "next/image";

function Strip() {
  return (
    <div className="overflow-hidden w-full p-3 bg-[#F6B620]">
      {/* The animated strip */}
      <div className="animate-marquee flex items-center space-x-8">
        <div className="flex items-center space-x-6">
          <Image src="/assets/star.svg" alt="star" width={50} height={50} />
          <h1 className="text-[38px] font-bold text-white">Osceolla</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Image src="/assets/star.svg" alt="star" width={50} height={50} />
          <h1 className="text-[38px] font-bold text-white">Towing</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Image src="/assets/star.svg" alt="star" width={50} height={50} />
          <h1 className="text-[38px] font-bold text-white">Osceolla</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Image src="/assets/star.svg" alt="star" width={50} height={50} />
          <h1 className="text-[38px] font-bold text-white">Towing</h1>
        </div>
        {/* Duplicate content for seamless transition */}
        <div className="flex items-center space-x-6">
          <Image src="/assets/star.svg" alt="star" width={50} height={50} />
          <h1 className="text-[38px] font-bold text-white">Osceolla</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Image src="/assets/star.svg" alt="star" width={50} height={50} />
          <h1 className="text-[38px] font-bold text-white">Towing</h1>
        </div>
      </div>
    </div>
  );
}

export default Strip;
