"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function Strip() {
  const stripRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        xPercent: -100,

        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden w-full bg-[#F6B620]">
      <div ref={stripRef} className="flex p-3 items-center justify-between">
        <Image src="/assets/star.svg" alt="star" width={50} height={50} />
        <h1 className="text-[38px] font-bold text-white">Osceolla</h1>
        <Image src="/assets/star.svg" alt="star" width={50} height={50} />
        <h1 className="text-[38px] font-bold text-white">Towing</h1>
        <Image src="/assets/star.svg" alt="star" width={50} height={50} />
        <h1 className="text-[38px] font-bold text-white">Osceolla</h1>
        <Image src="/assets/star.svg" alt="star" width={50} height={50} />
        <h1 className="text-[38px] font-bold text-white">Towing</h1>
        <Image src="/assets/star.svg" alt="star" width={50} height={50} />
      </div>
    </div>
  );
}

export default Strip;
