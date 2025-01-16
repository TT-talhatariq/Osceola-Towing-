import React from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import HelpSection from "@/components/HelpSection";
import Strip from "@/components/Strip";

function Contactus() {
  return (
    <div>
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')]  flex flex-col justify-center items-center  lg:h-screen h-[calc(100vh-50vh)] raleway lg:bg-no-repeat w-full lg:py-0 py-14 ">
        <div>
          <h1 className="text-center lg:text-[100px] text-[32px] font-bold">
            Contact Us{" "}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className=" lg:w-[511px] w-[150px] left-0 right-0 mx-auto absolute"
          />
        </div>
      </div>
      <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="absolute lg:w-[191px] lg:hidden block lg:h-[191px] w-[60px] h-[200px] left-0 top-10"
      />
      <Strip />
      <div className="text-center lg:px-24 px-3 mb-20">
        <h1 className="lg:text-[52px] lg:block hidden text-[29px] font-bold">
          Get In Touch!{" "}
        </h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={7}
          className="lg:w-[326px] mx-auto lg:block hidden    w-[200px]"
        />

        <p className="leading-[2] text-[#666666] lg:text-[18px] text-[11px] lg:mb-0 mb-10 lg:mt-10 mt-5">
          We’re here to help 24/7! Whether you need immediate roadside
          assistance, towing services, or have questions about what we offer,
          don’t hesitate to reach out. Our friendly team is ready to assist you
          anytime, anywhere.
        </p>
      </div>
      <ContactUs />
      <HelpSection
        bgImage="lg:bg-[url('/assets/help-black-bg.svg')] bg-[url('/assets/help-black-mobile-bg.svg')]"
        buttonPrimaryProps={{
          title: "Request a Tow Online",
          width: "lg:w-[267px] w-[190px]",
          bgcolor: "bg-[#096656]",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
        buttonSecondaryProps={{
          title: "Call Us:",
          width: "lg:w-[148px] w-[100px]",
          bgcolor: "bg-transparent border border-white",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
      />
    </div>
  );
}

export default Contactus;
