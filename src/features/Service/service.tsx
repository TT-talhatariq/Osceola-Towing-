"use client";
import React from "react";
import Image from "next/image";
import Aboutus from "@/components/Aboutus";
import Button from "@/components/Button";
import Chooseus from "@/components/Chooseus";
import HelpSection from "@/components/HelpSection";
import Strip from "@/components/Strip";
import Link from "next/link";
import Testimonals from "@/components/Testimonals";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Service() {
  return (
    <div>
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover  flex flex-col justify-center items-center  lg:h-screen h-[calc(100vh-50vh)] raleway lg:bg-no-repeat w-full lg:py-0 py-14 ">
        <div>
          <h1
            className={`text-center ${grifter.className} lg:text-[100px] text-[32px] font-bold`}
          >
            Our Services{" "}
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
      <div className="text-center mb-20 lg:px-24 px-3 mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`lg:text-[52px]  ${grifter.className} text-[29px] font-bold`}
        >
          Reliable Towing & Roadside{" "}
        </motion.h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={7}
          className={`lg:w-[426px] lg:ml-56  ${grifter.className}  w-[200px]`}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`lg:text-[52px]   ${grifter.className}  text-[29px] font-bold`}
        >
          Assistance You Can Count On{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="leading-[2] text-[#666666] lg:text-[18px] text-[11px] lg:mb-0 mb-10 "
        >
          At Osceola Towing, we provide a full range of towing and roadside
          assistance services designed to get you back on the road quickly and
          safely. Whether youre dealing with a breakdown, an accident, or a
          long-distance towing need, our team is here to help 24/7.
        </motion.p>
      </div>
      <Aboutus
        serviceNumber="Service: 01"
        title="Heavy-Duty Towing"
        description="We specialize in towing large vehicles such as trucks, buses, RVs, and commercial vehicles. Our heavy-duty equipment ensures a safe and efficient towing process, no matter the size or weight."
        perfectForItems={["Semi-trucks", "Buses", "Construction equipment"]}
        buttonText="Book A Service"
        imageSrc1="/assets/service-about-image.svg"
        imageSrc2="/assets/towing2.jpg"
        textColor="text-white"
        listColor="text-white"
        background="lg:bg-[url('/assets/service-bg.svg')] bg-[url('/assets/services-bg-mobile.svg')] xl:h-[1000px] lg:h-[900px]  pt-[270px] -mt-60 xl:pt-[330px] lg:pt-[330px]"
      />

      <div className=" relative flex lg:flex-row flex-col py-28 lg:gap-10 lg:px-24  p-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[22px]  text-[14px]  lg:w-[50%] text-[#F6B620] font-medium`}
          >
            Service: 02{" "}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[43px] ${grifter.className} text-[25px] font-bold`}
          >
            Emergency Roadside{" "}
          </motion.h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={300}
            height={7}
          />
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[43px] ${grifter.className} mb-2 text-[25px] font-bold`}
          >
            Assistance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`text-[#666666]
        lg:text-[17px] text-[14px] leading-[2] raleway  mb-3`}
          >
            Stranded on the road? We’ve got you covered with fast and reliable
            roadside assistance.{" "}
          </motion.p>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:text-[22px] text-[14px]  raleway mb-3 text-[#F6B620] "
            >
              Perfect For:
            </motion.h2>
            <ul className="list-disc pl-5 text-[#232323] raleway space-y-2 ">
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="opacity-80"
              >
                Battery jump-starts
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="opacity-80"
              >
                Flat tire changes
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="opacity-80"
              >
                Fuel delivery
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="opacity-80"
              >
                Lockout services
              </motion.li>
            </ul>
          </div>
          <Link href="/book-services">
            <Button
              title="Book A Service"
              center="mx-0"
              width={"lg:w-[182px] mb-10  mt-7  w-[153px]"}
            />
          </Link>
        </div>
        <div className={`lg:w-[50%]`}>
          <Image
            src="/assets/services-2.svg"
            alt="Main visual"
            width={567}
            height={474}
            className="w-full h-auto"
          />
        </div>
        <Image
          src="/assets/circle.svg"
          alt="circle"
          width={191}
          height={191}
          className="absolute lg:w-[154px] lg:h-[504px] w-[60px] h-[200px] left-0 top-6"
        />
      </div>

      <Aboutus
        serviceNumber="Service: 03"
        title="Long-Distance Towing"
        description="Need your vehicle transported across cities or states? Our long-distance towing service provides secure and affordable solutions for transporting vehicles over extended distances."
        buttonText="Book A Service"
        perfectForItems={["Relocation", "Repairs", "Classics"]}
        imageSrc1="/assets/services-3.svg"
        background="bg-[#F6B620] bg-opacity-10"
      />
      <Chooseus
        title="Service : 04"
        heading="Accident Recovery "
        image="/assets/about-choose-image.svg"
        description="Accidents can be stressful. Let us handle the recovery process, safely removing your vehicle from the scene and transporting it to your preferred location."
        perfectForItems={["Relocation", "Repairs", "Classics"]}
        ulHeading="Perfect For:"
        visible="block"
      />
      <Testimonals
        background="lg:bg-[url('/assets/testiomonals-bg.svg')] bg-cover bg-center bg-no-repeat"
        headingColor="text-[#096656]"
      />

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

export default Service;
