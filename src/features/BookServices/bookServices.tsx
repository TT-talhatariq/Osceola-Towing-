"use client";
import React from "react";
import Image from "next/image";
import AboutUsOffer from "@/components/AboutUsOffer";
import BookServiceCard from "@/data/bookServiceCard.json";
import Aboutus from "@/components/Aboutus";
import ContactUs from "@/components/ContactUs";
import Strip from "@/components/Strip";
import { motion } from "framer-motion";
function BookServices() {
  return (
    <div>
      {" "}
      <div
        className={`lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center  lg:h-screen h-[calc(100vh-50vh)] raleway lg:bg-no-repeat w-full lg:py-0 py-14 `}
      >
        <div>
          <h1 className="text-center lg:text-[100px] text-[32px] font-bold">
            Book A Services{" "}
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
          Book a Service with Osceola Towing
        </motion.h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={7}
          className="lg:w-[326px]  lg:block hidden  float-right mr-32  w-[200px]"
        />

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="leading-[2] text-[#666666] lg:text-[18px] text-[11px] lg:mb-0 mb-10 lg:mt-10 mt-5"
        >
          Need towing or roadside assistance? Our team at Osceola Towing is
          ready to provide quick, reliable, and professional services tailored
          to your needs. Booking a service is simple and hassle-free—just follow
          the steps below!
        </motion.p>
      </div>
      <AboutUsOffer
        data={BookServiceCard}
        visible="block"
        imageStyling="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] "
        title="How We Work"
        heading="How to Book Your Service"
        background="bg-transparent"
        titleColor="text-[#F6B620]"
        headingColor="text-black"
      />
      <Aboutus
        serviceNumber="Book A Services"
        title="Book Now"
        description="Need emergency assistance? Don’t wait! Our 24/7 service is just a few clicks away."
        ulHeading="Service Type:"
        perfectForItems={[
          "Towing",
          "Roadside Assistance",
          "Accident Recovery",
          "Long-Distance Towing",
        ]}
        buttonText="Book A Service"
        imageSrc1="/assets/book-service.svg"
        background="bg-[#F6B620] bg-opacity-10"
      />
      <ContactUs background="bg-transparent" />
    </div>
  );
}

export default BookServices;
