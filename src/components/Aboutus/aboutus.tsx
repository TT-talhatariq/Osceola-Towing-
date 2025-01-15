import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { AboutusProps } from "./type";
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
      className={`flex ${background}  bg-cover bg-center bg-no-repeat lg:flex-row flex-col-reverse justify-between  lg:gap-10 lg:p-24  p-4 `}
    >
      <div className={`lg:w-[50%]`}>
        <div className="relative">
          <Image
            src={imageSrc1}
            alt="Main visual"
            width={567}
            height={474}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className={`raleway mt-5 lg:w-[50%]
        text-start `}
      >
        <h1 className={`${textColor} lg:text-[22px]  text-[18px] font-medium`}>
          {serviceNumber}
        </h1>
        <h1 className={`lg:text-[42px] ${listColor} text-[28px] font-bold`}>
          {title}
        </h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={511}
          height={12}
          className=" lg:w-[211px] w-[200px]  lg:mx-auto "
        />
        <p
          className={`text-[#666666]
           lg:text-[17px] text-[14px] leading-[2]  lg:mb-5 mb-3`}
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

        <Button title={buttonText} width={"lg:w-[182px] mx-0 w-[153px]"} />
      </div>
    </div>
  );
}

export default Aboutus;
