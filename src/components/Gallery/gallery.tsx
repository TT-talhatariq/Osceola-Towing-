"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Gallery() {
  return (
    <div>
      <div className="flex raleway justify-between lg:mt-32 mt-12 items-center lg:px-24 px-5">
        <div>
          <motion.h1
            whileInView={{ y: 0 }}
            initial={{ y: 100 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="lg:text-[22px] text-[12px] lg:text-start text-center  lg:text-[#096656] text-[#F6B620] font-medium"
          >
            Our Gallery
          </motion.h1>
          <motion.h1
            whileInView={{ y: 0 }}
            initial={{ y: 100 }}
            transition={{ duration: 0.5, delay: 0 }}
            className={`lg:text-[36px] ${grifter.className} text-[25px] lg:text-start text-center font-bold`}
          >
            Our Tow Trucks In Action.
          </motion.h1>
          <Image
            src="/assets/green-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:block hidden"
          />
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[326px] lg:mx-0 mx-auto  lg:hidden block w-[200px]"
          />
        </div>
        <Link href="/gallery" className="lg:block hidden">
          <Button title="View All Our Gallery" width={"lg:w-[251px]"} />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:flex items-center justify-center lg:mt-20 mt-10 lg:px-5 px-3"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image
            src="/assets/gallery-image-one.svg"
            alt="circle"
            width={505}
            height={351}
            className="w-auto h-auto"
          />{" "}
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image
            src="/assets/gallery-image-two.svg"
            alt="circle"
            width={400}
            height={351}
            className="w-auto h-auto"
          />{" "}
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image
            src="/assets/gallery-image-three.svg"
            alt="circle"
            width={295}
            height={351}
            className="w-auto h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:flex items-center justify-center  px-5 "
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image
            src="/assets/gallery-image-four.svg"
            alt="circle"
            width={400}
            height={351}
            className="w-auto h-auto"
          />{" "}
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image
            src="/assets/gallery-image-five.svg"
            alt="circle"
            width={295}
            height={351}
            className="w-auto h-auto"
          />{" "}
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image
            src="/assets/gallery-image-six.svg"
            alt="circle"
            width={505}
            height={351}
            className="w-auto h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Gallery;
