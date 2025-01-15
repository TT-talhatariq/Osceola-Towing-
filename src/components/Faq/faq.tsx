import Image from "next/image";
import React from "react";
import Accordians from "@/components/Accordian";
function Faq() {
  return (
    <>
      <div className="bg-[url('/assets/pair-circel.svg')] lg:pt-0 pt-14 raleway bg-no-repeat  bg-center  w-full">
        <div className="raleway  lg:py-32 lg:px-24 p-0">
          <h1 className="lg:text-[22px] text-[18px] text-center text-[#F6B620] font-medium">
            FAQs{" "}
          </h1>
          <h1
            style={{ fontWeight: "bold" }}
            className="raleway text-center lg:text-[43px] text-[30px] "
          >
            Frequently Asked Question{" "}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[326px] w-[250px] mx-auto"
          />
          <div>
            <Accordians />
            <br />
            <br />
            <div className="flex items-center   gap-3 bg-[#096656] justify-center mx-auto  text-white text-center rounded-full w-[182px] h-[53px]">
              <button className="text-[18px] ">View All FAQs</button>
              <Image
                src="./assets/arrow-icon.svg"
                alt="logo"
                width={15}
                height={15}
                className=""
              />
            </div>
          </div>
          {/* <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="rotate-180 right-0 absolute top-0 "
      /> */}
        </div>
      </div>
    </>
  );
}

export default Faq;
