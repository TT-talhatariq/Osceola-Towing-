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
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <div
        className={`flex items-center lg:gap-3 gap-2 ${bgcolor} ${width} ${center} justify-center ${textColor} text-center rounded-full h-[35px] lg:h-[53px]`}
      >
        <button className={`lg:text-[18px] text-[14px]`}>{title}</button>
        <div
          className={`w-4 h-4 flex flex-col ${iconbg} justify-center items-center rounded-full`}
        >
          <IoIosArrowRoundForward className={`${iconColor}`} />
        </div>
      </div>
    </motion.div>
  );
}

export default Button;
