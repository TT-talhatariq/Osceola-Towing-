import React from "react";
import PriorityCard from "@/data/priorityCard.json";
import Image from "next/image";
import { EmergencyProps } from "./type";
function Emergency({
  backgroundImage,
  image,
  textColor1,
  textColor2,
}: EmergencyProps) {
  return (
    <div>
      <div
        className={`${backgroundImage} bg-cover relative mt-20 lg:p-24 p-5 flex justify-between lg:flex-row flex-col-reverse items-center gap-10 raleway bg-no-repeat z-10 bg-center  w-full`}
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
            className={`${textColor2} raleway lg:text-[52px] text-[30px] font-bold`}
          >
            Your Emergency is{" "}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
          />
          <h1
            className={`${textColor2} raleway lg:text-[52px] text-[30px] font-bold`}
          >
            Our Priority
          </h1>

          {PriorityCard
            ? PriorityCard.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundColor: "#F6F6F6",
                      border: "1px solid #F6B620",
                      borderRadius: "15px",
                      padding: "15px",
                    }}
                    key={index}
                    className="flex mt-5 shadow-xl lg:gap-5 gap-3 "
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

                      <p className="text-[#666666] lg:text-[18px] text-[14px]">
                        {item.para}
                      </p>
                    </div>
                  </div>
                );
              })
            : "loading"}
          <div className="flex items-center mt-10 gap-3 bg-[#096656] justify-center  text-white text-center rounded-full w-[182px] h-[53px]">
            <button className="text-[18px] ">Learn More</button>
            <Image
              src="./assets/arrow-icon.svg"
              alt="logo"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
