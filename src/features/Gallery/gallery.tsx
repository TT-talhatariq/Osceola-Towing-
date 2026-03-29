"use client";
import React from "react";
import Image from "next/image";
import imageData from "@/data/galleryImages.json";
import Strip from "@/components/Strip";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";
import Contactus from "@/components/ContactUs";

function Gallery() {
  return (
    <div className="pt-6">
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center lg:h-[75vh] h-[calc(100vh-40vh)] raleway lg:bg-no-repeat w-full">
        <div className="lg:mt-20">
          <h1
            className={`text-center ${grifter.className} lg:text-[150px] text-[32px] font-bold mb-6`}
          >
            Our Gallery
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className="lg:w-[600px] w-[150px] left-0 right-0 mx-auto"
          />
          <p className="text-center text-[#666666] raleway lg:text-[20px] text-[14px] mt-10 max-w-[700px] mx-auto">
            Explore our portfolio of successful towing operations and roadside
            assistance services
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
        <div className="text-center lg:px-24 px-3">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[52px] ${grifter.className} text-[29px] font-bold`}
          >
            Our Work in Action
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
            className="leading-[2] raleway text-[#666666] lg:text-[18px] text-[14px] lg:mb-0 mb-10 lg:mt-10 mt-5"
          >
            At Osceola Towing, we take pride in the work we do and the service
            we provide. Browse through our gallery to see our fleet in action,
            including successful towing jobs, roadside assistance services, and
            behind-the-scenes moments. From emergency tows to long-distance
            transportation, we&apos;ve got you covered.
          </motion.p>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10 px-4 lg:px-0 mb-20">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden hover:scale-105 transition transform aspect-video"
            >
              <Image
                src={image.images}
                alt="gallery image"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Wrapper>
      <Contactus background="bg-[#F6B620] bg-opacity-10" />
    </div>
  );
}

export default Gallery;
