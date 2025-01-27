import React from "react";
import PriorityCard from "@/data/priorityCard.json";
import Image from "next/image";
import { EmergencyProps } from "./type";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { grifter } from "@/app/layout";
function Emergency({
  backgroundImage,
  image,
  textColor1,
  textColor2,
}: EmergencyProps) {
  return (
    <div>
      <div
        className={`${backgroundImage} bg-cover relative  pt-10 lg:mt-20 lg:p-24 p-5 flex lg:justify-between justify-center lg:flex-row flex-col-reverse items-center gap-10 raleway bg-no-repeat z-10 bg-center  w-full`}
      >
        <div className=" lg:w-[50%] ">
          <Image
            src={image}
            alt="circle"
            width={580}
            height={690}
            className=" lg:w-[100%] "
          />
        </div>
        <div className=" lg:w-[50%] ">
          <h1
            className={`lg:text-[22px] text-[18px] raleway ${textColor1} font-medium`}
          >
            Emergency Assistance Section:{" "}
          </h1>
          <h1
            className={`${textColor2} ${grifter.className}  lg:text-[52px] text-[27px] font-bold`}
          >
            Your Emergency is{" "}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:ml-32"
          />
          <h1
            className={`${textColor2} ${grifter.className}  lg:text-[52px] text-[27px] font-bold`}
          >
            Our Priority
          </h1>

          {PriorityCard
            ? PriorityCard.map((item, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      border: "1px solid #F6B620",
                      borderRadius: "15px",
                      padding: "15px",
                    }}
                    key={index}
                    className="flex bg-[#F6F6F6] hover:bg-white mt-5 hover:shadow-xl cursor-pointer lg:gap-5 gap-3 "
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="circle"
                      width={15}
                      height={15}
                      className="lg:mt-2 -mt-6"
                    />
                    <div>
                      <h1 className="text-[#232323] lg:text-[27px] text-[14px] font-medium">
                        {item.heading}
                      </h1>

                      <p className="text-[#666666] lg:text-[18px] text-[12px]">
                        {item.para}
                      </p>
                    </div>
                  </motion.div>
                );
              })
            : "loading"}

          <br />

          <Button
            title="Learn More"
            width="lg:w-[182px] w-[120px] "
            center="mx-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Emergency;
