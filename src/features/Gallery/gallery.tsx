"use client";
import React from "react";
import Image from "next/image";
import imageData from "@/data/galleryImages.json";
import Strip from "@/components/Strip";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Gallery() {
  return (
    <div>
      {" "}
      <div
        className={`lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center  lg:h-screen h-[calc(100vh-50vh)] raleway lg:bg-no-repeat w-full lg:py-0 py-14 `}
      >
        <div>
          <h1
            className={`text-center lg:text-[100px] ${grifter.className} text-[32px] font-bold`}
          >
            Our Gallery{" "}
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
          className={`lg:text-[52px] lg:block hidden ${grifter.className} text-[29px] font-bold`}
        >
          Our Work in Action
        </motion.h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={326}
          height={7}
          className="lg:w-[326px]  lg:block hidden mx-auto w-[200px]"
        />

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="leading-[2] raleway text-[#666666] lg:text-[18px] text-[11px] lg:mb-0 mb-10 lg:mt-10 mt-5"
        >
          At Osceola Towing, we take pride in the work we do and the service we
          provide. Browse through our gallery to see our fleet in action,
          including successful towing jobs, roadside assistance services, and
          behind-the-scenes moments. From emergency tows to long-distance
          transportation, we’ve got you covered.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-10 lg:px-20 justify-center ">
        {imageData.map((image, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden hover:scale-105 transition transform"
          >
            <Image
              src={image.images}
              alt="images"
              width={100}
              height={100}
              className=" rounded-lg w-[100%] h-[100%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
