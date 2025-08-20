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
import HelpSection from "@/components/HelpSection";
import AboutUsOffer from "@/components/AboutUsOffer";
import Strip from "@/components/Strip";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";

function AboutUs() {
  return (
    <div className="pt-6">
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center lg:h-[75vh] h-[calc(100vh-40vh)] raleway lg:bg-no-repeat w-full">
        <div className="lg:mt-20">
          <h1
            className={`text-center ${grifter.className} lg:text-[150px] text-[32px] font-bold mb-6`}
          >
            About Us
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className="lg:w-[600px] w-[150px] left-0 right-0 mx-auto"
          />
          <p className="text-center text-[#666666] raleway lg:text-[20px] text-[14px] mt-10 max-w-[700px] mx-auto">
            Your trusted partner for reliable towing and roadside assistance
            services in Osceola County
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
        <div className="text-center">
          {/* Desktop Version */}
          <div className="lg:block hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <motion.h1
                className={`lg:text-[52px] ${grifter.className} text-[29px] font-bold`}
              >
                Your Trusted Towing Partner in
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/assets/yellow-vector.svg"
                alt="circle"
                width={326}
                height={7}
                className="lg:w-[326px] mx-auto w-[200px] my-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden"
            >
              <motion.h1
                className={`lg:text-[52px] ${grifter.className} text-[29px] font-bold`}
              >
                Osceola County
              </motion.h1>
            </motion.div>
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <motion.h1
                className={`lg:text-[52px] ${grifter.className} text-[25px] font-bold`}
              >
                Your Trusted Towing
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/assets/yellow-vector.svg"
                alt="circle"
                width={326}
                height={12}
                className="lg:w-[326px] w-[200px] mx-auto my-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden"
            >
              <motion.h1
                className={`lg:text-[52px] ${grifter.className} text-[25px] font-bold`}
              >
                Partner in Osceola County
              </motion.h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="leading-[2] text-[#666666] raleway lg:text-[18px] text-[14px] lg:mb-0 mb-5 lg:mt-10 mt-5 max-w-[1000px] mx-auto"
          >
            At Osceola Towing, we are more than just a towing company – we are a
            team of dedicated professionals committed to providing top-notch
            roadside assistance and towing services. With years of experience
            and a passion for helping others, we pride ourselves on being the
            trusted choice for drivers in Osceola County and beyond.
          </motion.p>
        </div>
      </Wrapper>

      <div className="bg-[#F6B620] bg-opacity-10 py-10 px-5">
        <Wrapper>
          <div className="flex lg:flex-row lg:mt-20 mt-14 flex-col-reverse items-center justify-between lg:gap-10 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[50%]"
            >
              <Image
                src="/assets/mission-image.svg"
                alt="circle"
                width={670}
                height={548}
                className="lg:w-auto lg:h-[548px]"
              />
            </motion.div>
            <div className="lg:w-[60%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <motion.h1
                  className={`lg:text-[52px] ${grifter.className} text-[32px] font-bold`}
                >
                  Our Mission
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/assets/yellow-vector.svg"
                  alt="circle"
                  width={326}
                  height={7}
                  className="lg:w-[326px] lg:block hidden w-[200px] my-2"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:leading-[2] leading-normal raleway text-[#666666] lg:text-[18px] text-[14px] mt-2"
              >
                To deliver reliable, fast, and safe towing and roadside
                assistance services with unmatched customer care, ensuring every
                driver feels supported during their time of need.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="overflow-hidden"
              >
                <motion.h1
                  className={`lg:text-[32px] ${grifter.className} text-[20px] font-bold mt-5`}
                >
                  Our Values
                </motion.h1>
              </motion.div>

              {AboutData
                ? AboutData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex gap-3 lg:py-[10px] py-[5px] rounded-lg lg:rounded-2xl"
                    >
                      <Image
                        src="/assets/small-circle.svg"
                        alt="circle"
                        width={15}
                        height={15}
                        className="lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] mt-2"
                      />
                      <div>
                        <h1 className="text-[#F6B620] raleway lg:text-[22px] text-[16px] font-bold">
                          {item.heading}
                        </h1>
                        <p className="text-[#666666] raleway lg:text-[18px] mt-2 text-[13px]">
                          {item.para}
                        </p>
                      </div>
                    </motion.div>
                  ))
                : "loading"}
            </div>
          </div>
        </Wrapper>
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
        background="lg:bg-[url('/assets/about-bg.svg')] bg-[url('/assets/about-mobile-bg.svg')] h-[1200px]"
        titleColor="text-white"
        headingColor="text-white"
        imageStyling="mx-auto lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]"
        textStyling="text-center"
      />
      <Emergency
        backgroundImage="bg-transparent lg:my-0 my-12"
        image="/assets/about-emergency-image.svg"
        textColor1="text-[#F6B620]"
        textColor2="text-white"
      />
      <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="absolute lg:w-[254px] lg:block hidden -mt-[510px] lg:h-[504px] w-[60px] h-[200px] rotate-180 right-0"
      />
      {/* <Services
        data={TeamData}
        backgroundImage="bg-[#F6B620] bg-opacity-10"
        title="Our Key Team Members"
        heading="Meet Our Expert Team"
        visible="hidden"
      /> */}

      <Faq />

      <HelpSection
        bgImage="lg:bg-[url('/assets/help-image.svg')] bg-[url('/assets/help-mobile-bg.svg')]"
        buttonPrimaryProps={{
          title: "Contact Us",
          width: "lg:w-[267px] w-[190px]",
          bgcolor: "bg-white",
          iconColor: "text-white",
          iconbg: "bg-[#096656]",
          textColor: "text-[#096656]",
        }}
        buttonSecondaryProps={{
          title: "Call Us",
          width: "lg:w-[148px] w-[100px]",
          bgcolor: "bg-transparent border border-white",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
      />
      <Contactus background="bg-[#F6B620] bg-opacity-10" />
    </div>
  );
}

export default AboutUs;
