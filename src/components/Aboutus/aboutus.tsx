"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { AboutusProps } from "./type";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Aboutus({
  serviceNumber,
  title,
  description,
  perfectForItems = [],
  buttonText,
  imageSrc1,
  textColor = "text-[#F6B620]",
  ulHeading = "Perfect For:",
  background,
  listColor = "text-[#232323]",
}: AboutusProps) {
  return (
    <div
      className={`flex ${background} items-center bg-cover bg-center bg-no-repeat lg:flex-row flex-col-reverse justify-between  gap-5  lg:px-24 lg:pt-24 pt-12 p-4 `}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className={`lg:w-[45%]`}
      >
        <div className="relative">
          <Image
            src={imageSrc1}
            alt="Main visual"
            width={567}
            height={474}
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className={`raleway  lg:w-[50%]
        text-start `}
      >
        <h1 className={`${textColor} lg:text-[22px]  text-[18px] font-medium`}>
          {serviceNumber}
        </h1>
        <h1
          className={`lg:text-[42px] ${grifter.className}  lg:w-96 ${listColor} text-[28px] font-bold`}
        >
          {title}
        </h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={511}
          height={12}
          className=" lg:w-[311px] w-[200px]   "
        />
        <p
          className={`text-[#666666]
           lg:text-[17px] text-[12px] leading-[2]  lg:my-10 my-3`}
        >
          {description}
        </p>

        {perfectForItems.length > 0 && (
          <div className="mb-5">
            <h2 className={`text-xl lg:mb-5 mb-3 ${textColor} font-bold`}>
              {ulHeading}
            </h2>
            <ul className="list-disc pl-5 space-y-2 ">
              {perfectForItems.map((item, index) => (
                <li key={index} className={`${listColor}  opacity-80`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link href="/about-us">
          <Button
            title={buttonText}
            center=""
            width={"lg:w-[182px] mx-0 w-[135px]"}
          />
        </Link>
      </motion.div>
    </div>
  );
}

export default Aboutus;
