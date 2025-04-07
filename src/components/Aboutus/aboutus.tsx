"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { AboutusProps } from "./type";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";
import { IoIosArrowRoundForward } from "react-icons/io";
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
  descText = "text-[#666666]",
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: AboutusProps) {
  return (
    <div
      className={`${background} items-center bg-cover bg-center bg-no-repeat lg:pt-24 pt-12 p-4`}
    >
      <Wrapper>
        <div className="flex lg:flex-row flex-col-reverse justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`raleway  lg:w-[50%]
            text-start `}
          >
            <h1
              className={`${textColor} lg:text-[22px]  text-[18px] font-medium`}
            >
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
              className=" lg:w-[311px] mx-auto w-[200px]   "
            />
            <p
              className={`${descText}
               lg:text-[17px] text-[13px] leading-[2]  lg:my-10 my-3`}
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
            <div className="flex gap-5 lg:flex-row flex-col">
              <Link href={buttonLink || "/about-us"}>
                <div
                  className={`flex items-center raleway lg:gap-3 gap-2 bg-[#096656] lg:w-[182px] mx-0 w-[135px] justify-center text-white text-center rounded-full h-[35px] lg:h-[53px] hover:scale-105 transition-all duration-300 w-full lg:w-[182px]`}
                >
                  <button className={`lg:text-[18px] text-[14px]`}>
                    {buttonText}
                  </button>
                  <div
                    className={`w-4 h-4 flex flex-col bg-white justify-center items-center rounded-full`}
                  >
                    <IoIosArrowRoundForward className={`text-[#F6B620]`} />
                  </div>
                </div>
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link href={secondaryButtonLink}>
                  <Button
                    title={secondaryButtonText}
                    width="lg:w-[160px] w-full lg:mb-0 mb-5"
                    bgcolor="bg-[#F6B620]"
                    textColor="text-black"
                    iconColor="text-black"
                  />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Aboutus;
