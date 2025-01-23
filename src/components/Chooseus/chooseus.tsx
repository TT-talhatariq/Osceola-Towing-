import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { ChooseProps } from "./type";
import { Item } from "./type";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Chooseus({
  title,
  image,
  heading,
  subHeading,
  data,
  description,
  perfectForItems = [],
  ulHeading,
  visible = "hidden",
}: ChooseProps) {
  return (
    <div>
      {" "}
      <div className="raleway lg:flex items-center justify-between lg:pl-24  gap-10 mt-20">
        <div className="lg:px-0 px-5 lg:w-[50%]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:text-[22px] text-[14px]  lg:w-[50%] text-[#F6B620] font-medium"
          >
            {title}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[43px] ${grifter.className} text-[23px] font-bold `}
          >
            {heading}
          </motion.h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[300px] w-[200px] lg:ml-32 "
          />
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:text-[43px] text-[25px] font-bold"
          >
            {subHeading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[17px]  text-[#666666] lg:w-[600px] text-[14px] leading-[2]  lg:mb-10  mb-3`}
          >
            {description}
          </motion.p>
          {perfectForItems.length > 0 && (
            <div className="mb-5 ">
              <h2 className="text-lg lg:mb-5 mb-3 text-[#F6B620] font-bold">
                {ulHeading}
              </h2>
              <ul className="list-disc pl-5 space-y-2 ">
                {perfectForItems.map((item, index) => (
                  <li key={index} className="text-[#232323]  opacity-80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            href="/book-services"
            className={`cursor-pointer ${visible === "block" ? "block " : "hidden"}`}
          >
            <Button
              title="Book A Service"
              center="mx-0"
              width={"lg:w-[182px] mx-0 w-[153px]"}
            />
          </Link>

          {data
            ? data.map((item: Item, index: number) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 2, x: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      backgroundColor: "#F6F6F6",
                      border: "1px solid #F6B620",
                    }}
                    key={index}
                    className="flex mt-5 w-[100%] shade lg:gap-5 gap-3 lg:p-[15px] p-[10px] rounded-lg lg:rounded-2xl"
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="circle"
                      width={15}
                      height={15}
                      className="lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]  mt-2"
                    />
                    <div>
                      <h1 className="text-[#232323] lg:text-[27px] text-[16px] font-medium">
                        {item.heading}
                      </h1>

                      <p className="text-[#666666] lg:text-[18px] text-[10px]">
                        {item.para}
                      </p>
                    </div>
                  </motion.div>
                );
              })
            : ""}
        </div>
        <div className="lg:mt-0 mt-10">
          <Image src={image} alt="circle" width={699} height={465} />
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
