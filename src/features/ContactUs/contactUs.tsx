"use client";
import React from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import HelpSection from "@/components/HelpSection";
import Strip from "@/components/Strip";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";

function Contactus() {
  return (
    <div id="#contactUs">
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center lg:h-[75vh] h-[calc(100vh-40vh)] raleway lg:bg-no-repeat w-full">
        <div className="lg:mt-20">
          <h1
            className={`text-center ${grifter.className} lg:text-[150px] text-[32px] font-bold mb-6`}
          >
            Contact Us
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className="lg:w-[600px] w-[150px] left-0 right-0 mx-auto"
          />
          <p className="text-center text-[#666666] raleway lg:text-[20px] text-[14px] mt-10 max-w-[700px] mx-auto">
            Call Now: (715) 755-3281 • Address: 688 Simmon Drive, Osceola WI 54020 • Hours: 24/7 Service
          </p>
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
      <Wrapper>
        <div className="text-center lg:px-24 px-3 mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[52px] ${grifter.className} text-[29px] font-bold`}
          >
            Get In Touch!
          </motion.h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[426px] mx-auto w-[200px]"
          />

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[2] text-[#666666] raleway lg:text-[18px] text-[14px] lg:mb-0 mb-10 lg:mt-10 mt-5"
          >
            We&apos;re here to help 24/7! Whether you need immediate roadside
            assistance, towing services, or have questions about what we offer,
            don&apos;t hesitate to reach out. Our friendly team is ready to
            assist you anytime, anywhere.
          </motion.p>
        </div>
      </Wrapper>

      <ContactUs background="bg-[#F6B620] bg-opacity-10" />

      <HelpSection
        bgImage="lg:bg-[url('/assets/help-black-bg.svg')] bg-[url('/assets/help-black-mobile-bg.svg')]"
        buttonPrimaryProps={{
          title: "Contact Us",
          width: "lg:w-[267px] w-[190px]",
          bgcolor: "bg-[#096656]",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
        buttonSecondaryProps={{
          title: "Call Us",
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
