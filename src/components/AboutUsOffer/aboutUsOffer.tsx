import React from "react";
import Image from "next/image";
import { OfferProps, Item } from "./type";
function AboutUsOffer({
  title,
  heading,
  background,
  titleColor,
  headingColor,
  imageStyling,
  textStyling,
  visible = "hidden",
  data,
}: OfferProps) {
  return (
    <div
      className={`${background} relative bg-cover mt-20 flex flex-col justify-center items-center bg-center
        raleway bg-no-repeat w-full lg:px-24 lg:pt-32 pt-14 lg:pb-20 pb-5 `}
    >
      <div>
        <h1 className={`text-[22px] ${titleColor} text-center  font-medium`}>
          {title}
        </h1>
        <h1
          className={`lg:text-[52px] ${headingColor} text-[32px] text-center font-bold`}
        >
          {heading}
        </h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={7}
          className="lg:w-[439px] mx-auto  w-[200px]"
        />
      </div>
      <div className="lg:flex z-10 items-center lg:mt-20 mt-5 gap-5 lg:px-24 p-5 ">
        {data
          ? data.map((item: Item, index: number) => {
              return (
                <div
                  key={index}
                  className="lg:w-[370px] lg:mt-0 mt-5 lg:rounded-3xl shade rounded-xl lg:p-5 p-3 bg-white"
                >
                  <div className={`flex justify-between items-center mb-2`}>
                    <Image
                      src={item.icon}
                      alt="circle"
                      width={15}
                      height={15}
                      className={`lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] ${imageStyling} `}
                    />
                    <h1
                      className={`text-[#F6B620] ${visible} raleway font-bold text-[50px] text-opacity-40`}
                    >
                      {item.id}
                    </h1>
                  </div>
                  <div className={`${textStyling} `}>
                    <h1 className="text-[#232323] lg:text-[20px] text-[16px] font-bold">
                      {item.heading}
                    </h1>

                    <p className="text-[#666666] lg:text-[14px]  mt-2 text-[10px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              );
            })
          : "loading"}
      </div>
      <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="absolute lg:w-[254px] lg:h-[504px] w-[60px] h-[200px] left-0 bottom-0"
      />
    </div>
  );
}

export default AboutUsOffer;
