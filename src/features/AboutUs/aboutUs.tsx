"use client";
import React from "react";
import AboutData from "@/data/aboutusData.json";
import Chooseus from "@/components/Chooseus";
import ChooseCard from "@/data/aboutChooseData.json";
import Offerdata from "@/data/offerCardData.json";
import Image from "next/image";
import Emergency from "@/components/Emergency";
import Faq from "@/components/Faq";
import Contactus from "@/components/ContactUs";
import TeamData from "@/data/teamData.json";
import Services from "@/components/Services";
import HelpSection from "@/components/HelpSection";
import AboutUsOffer from "@/components/AboutUsOffer";
import Strip from "@/components/Strip";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div>
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center  lg:h-screen h-[calc(100vh-50vh)] raleway lg:bg-no-repeat w-full lg:py-0 py-14 ">
        <div>
          <h1 className="text-center lg:text-[100px] text-[32px] font-bold">
            About Us{" "}
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
      <div className="text-center lg:px-24 px-3 ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:text-[52px] lg:block hidden text-[29px] font-bold"
        >
          Your Trusted Towing Partner in
        </motion.h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={7}
          className="lg:w-[326px] mx-auto lg:block hidden    w-[200px]"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:text-[52px]  lg:block hidden text-[29px] font-bold"
        >
          Osceola County{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:text-[52px] lg:hidden block text-[29px] font-bold"
        >
          Your Trusted Towing
        </motion.h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={12}
          className="lg:w-[326px]  lg:hidden block w-[200px]"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:text-[52px] text-[29px] lg:hidden block  font-bold"
        >
          Partner in Osceola County{" "}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="leading-[2] text-[#666666] lg:text-[18px] text-[11px] lg:mb-0 mb-10 lg:mt-10 mt-5"
        >
          At Osceola Towing, we are more than just a towing company – we are a
          team of dedicated professionals committed to providing top-notch
          roadside assistance and towing services. With years of experience and
          a passion for helping others, we pride ourselves on being the trusted
          choice for drivers in Osceola County and beyond.
        </motion.p>
      </div>

      <div className="flex lg:flex-row mt-20 flex-col-reverse items-center justify-between  lg:gap-10 gap-5 bg-[#F6B620] bg-opacity-10 lg:px-24 px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-[50%]"
        >
          <Image
            src="/assets/mission-image.svg"
            alt="circle"
            width={570}
            height={548}
            className="lg:w-[570px] lg:h-[548px]"
          />
        </motion.div>
        <div className="lg:w-[50%]">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:text-[52px] text-[32px] font-bold"
          >
            Our Mission{" "}
          </motion.h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[326px]  lg:block hidden w-[200px]"
          />
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:leading-[2] text-[#666666] lg:text-[18px] text-[12px] mt-2 "
          >
            To deliver reliable, fast, and safe towing and roadside assistance
            services with unmatched customer care, ensuring every driver feels
            supported during their time of need.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className=" lg:text-[32px] text-[20px] font-bold mt-5"
          >
            Our Values{" "}
          </motion.h1>
          {AboutData
            ? AboutData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex   gap-3  lg:py-[10px] py-[5px] rounded-lg lg:rounded-2xl"
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="circle"
                      width={15}
                      height={15}
                      className="lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]  mt-2"
                    />
                    <div>
                      <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-[#F6B620] lg:text-[22px] text-[16px] font-bold"
                      >
                        {item.heading}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-[#666666] lg:text-[18px] mt-2 text-[10px]"
                      >
                        {item.para}
                      </motion.p>
                    </div>
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
      <Chooseus
        title="Why Choose Us"
        heading="Why Choose Osceola"
        image="/assets/about-choose-image.svg"
        subHeading="Towing"
        data={ChooseCard}
      />
      <AboutUsOffer
        data={Offerdata}
        title="About us"
        heading="What We Offer"
        background="lg:bg-[url('/assets/about-bg.svg')]  bg-[url('/assets/about-mobile-bg.svg')]"
        titleColor="text-white"
        headingColor="text-white"
        imageStyling="mx-auto lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] "
        textStyling="text-center"
      />
      <Emergency
        backgroundImage="bg-transparent"
        image="/assets/about-emergency-image.svg"
        textColor1="text-[#F6B620]"
        textColor2="text-black"
      />
      <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="absolute lg:w-[254px] lg:block hidden -mt-[510px] lg:h-[504px] w-[60px] h-[200px]  rotate-180 right-0 "
      />
      <Services
        data={TeamData}
        backgroundImage="bg-[#F6B620] bg-opacity-10"
        title="Our Key Team Members"
        heading="Meet Our Expert Team"
        visible="hidden"
      />

      <Faq />

      <HelpSection
        bgImage="lg:bg-[url('/assets/help-image.svg')] bg-[url('/assets/help-mobile-bg.svg')]"
        buttonPrimaryProps={{
          title: "Request a Tow Online",
          width: "lg:w-[267px] w-[190px]",
          bgcolor: "bg-white",
          iconColor: "text-white",
          iconbg: "bg-[#096656]",
          textColor: "text-[#096656]",
        }}
        buttonSecondaryProps={{
          title: "Call Us:",
          width: "lg:w-[148px] w-[100px]",
          bgcolor: "bg-transparent border border-white",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
      />
      <Contactus />
    </div>
  );
}

export default AboutUs;
