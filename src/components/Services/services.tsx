"use client";
import React from "react";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Button from "@/components/Button";
import { ServiceProps, Item } from "./type";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Services({
  backgroundImage,
  title,
  heading,
  visible,
  data,
}: ServiceProps) {
  return (
    <div
      className={`${backgroundImage} lg:mt-0 mt-10 raleway bg-cover lg:bg-no-repeat lg:bg-center ${visible === "block" ? " lg:pt-[270px]  lg:h-[990px] lg:py-0 py-14" : "pt-20 pb-10"} w-full  `}
    >
      <div className=" lg:px-24 px-5 raleway ">
        <motion.h1
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`lg:text-[22px] ${visible === "block" ? "text-white" : "text-[#F6B620]"}  text-[14px] text-center font-medium`}
        >
          {title}
        </motion.h1>
        <motion.h1
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`text-center ${grifter.className} ${visible === "block" ? "text-white" : "text-black"} lg:text-[52px] text-[25px] font-bold`}
        >
          {heading}
        </motion.h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={439}
          height={7}
          className="lg:w-[500px]  mx-auto w-[200px]"
        />
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex flex-wrap items-center gap-5 justify-center lg:mt-20 mt-10 lg:mb-14 mb-10"
        >
          {data
            ? data.map((item: Item, index: number) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className={`w-[310px] cursor-pointer ${visible === "block" ? "shadow-none  lg:p-5 p-3 " : "shadow-xl p-3"} rounded-3xl bg-white relative`}
                  >
                    <Image
                      src={item.images}
                      alt="card"
                      width={265}
                      height={218}
                    />
                    <div
                      className={`w-[35px] ${visible === "block" ? "-mt-11" : "mt-7"} absolute right-7  h-[35px] flex flex-col justify-center items-center rounded-full bg-[#096656]`}
                    >
                      <BsArrowUpRight className="text-xl font-bold rotate-12 text-white" />
                    </div>
                    <h1 className="text-[#232323] lg:text-[20px] text-[17px] font-medium mt-4 mb-">
                      {item.heading}
                    </h1>
                    <p
                      className={` ${visible === "block" ? "text-[#666666]" : "text-[#096656]"} lg:text-[14px] text-[12px] leading-[2]`}
                    >
                      {item.para}{" "}
                    </p>
                  </motion.div>
                );
              })
            : "loading"}
        </motion.div>

        <Link href="/services" className={`${visible}`}>
          <Button
            title="Learn More About Our Services"
            width={"lg:w-[348px] w-[250px]"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Services;
