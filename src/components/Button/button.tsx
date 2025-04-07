"use client";
import React from "react";
import { ButtonProps } from "./type";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

function Button({
  title,
  width,
  bgcolor = "bg-[#096656]",
  textColor = "text-white",
  iconColor = "text-[#F6B620]",
  iconbg = "bg-white",
  center = "lg:mx-auto",
}: ButtonProps) {
  return (
    <div className={`${center} ${width}`}>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
        className="w-full"
      >
        <div
          className={`flex items-center raleway lg:gap-3 gap-2 ${bgcolor} justify-center ${textColor} text-center rounded-full h-[35px] lg:h-[53px] hover:shadow-lg transition-shadow duration-300`}
        >
          <button className="lg:text-[18px] text-[14px]">{title}</button>
          <div
            className={`w-4 h-4 flex flex-col ${iconbg} justify-center items-center rounded-full`}
          >
            <IoIosArrowRoundForward className={`${iconColor}`} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Button;
