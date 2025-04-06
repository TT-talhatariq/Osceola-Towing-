"use client";
import React from "react";
import Image from "next/image";
import Aboutus from "@/components/Aboutus";
import Services from "@/components/Services";
import ChooseCard from "@/data/chooseCard.json";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contactus from "@/components/ContactUs";
import Chooseus from "@/components/Chooseus";
import Button from "@/components/Button";
import Emergency from "@/components/Emergency";
import ServiceData from "@/data/serviceCards.json";
import Strip from "@/components/Strip";
import Testimonals from "@/components/Testimonals";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Homepage() {
  return (
    <>
      <div className="overflow-x-hidden relative lg:mt-[200px] mt-[100px]">
        <div className="lg:px-24 px-2 mb-32">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`text-center text-[#232323] lg:text-[86px] ${grifter.className} leading-tight text-[30px] font-bold`}
          >
            Reliable & Trusted Towing Services in Osceola County
          </motion.h1>

          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className="lg:right-[130px] lg:w-[711px] w-[250px]  right-0 mx-auto absolute"
          />
          <br />
          <Image
            src="/assets/homepage-car.svg"
            alt="circle"
            width={1240}
            height={585}
            className="lg:block hidden"
            style={{ width: "100%" }}
          />
          <Image
            src="/assets/homepage-car-mobile.svg"
            alt="circle"
            width={398}
            height={342}
            className="lg:hidden block"
            style={{ width: "100%" }}
          />
          <p className="text-[#F6B620] raleway lg:text-[28px] px-6 text-[14px] lg:mb-[40px]  mb-[20px]   lg:-mt-5 mt-5 text-center ">
            Available 24/7 to Get You Back on the Road Safely and Quickly.
          </p>
          <Link href="#Contactus">
            <Button
              title="Request a Tow Now"
              width="lg:w-[251px] lg:mx-0 mx-auto w-[164px]"
            />
          </Link>
        </div>
      </div>
      <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="absolute lg:w-[291px] lg:h-[591px] w-[60px] h-[200px] left-0 top-10"
      />
      <Strip />
      <Aboutus
        serviceNumber="About Us"
        title="Welcome to Osceola Towing"
        description="At Osceola Towing, we provide fast, reliable, and affordable towing services for all your needs. Whether it’s a roadside breakdown, accident recovery, or heavy-duty towing, our experienced team is here to help. With a commitment to customer satisfaction and safety, we’re your trusted towing partner in Osceola County and beyond."
        buttonText="Read More"
        imageSrc1="/assets/welcome-image.svg"
        background="bg-white"
      />

      <Services
        data={ServiceData}
        backgroundImage="lg:bg-[url('/assets/services-image.svg')]  lg:bg-transparent  bg-[#232323] bg-opacity-90 "
        title="Our Services"
        heading="Our Towing Services Include:"
        visible="block"
      />
      <Chooseus
        title="Why Choose Us"
        heading="Why Osceola Towing?"
        image="/assets/choose-image.svg"
        data={ChooseCard}
      />
      <Testimonals
        background="bg-[#F6B620] bg-opacity-10"
        titleColor="text-[#FFC107]"
        heading="text-black"
      />
      <Gallery />
      <Emergency
        image="/assets/priority-image.svg"
        backgroundImage="lg:bg-[url('/assets/emergency-bg.svg')] lg:h-full h-[1140px] bg-[url('/assets/emergency-mobile.svg')]"
        textColor1="text-white"
        textColor2="text-white"
      />
      <Faq />
      <Contactus />
    </>
  );
}

export default Homepage;
