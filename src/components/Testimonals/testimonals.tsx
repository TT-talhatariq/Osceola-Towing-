"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";
import testimonials from "@/data/testimonalData.json";
import { Testimonial, testimonalProps } from "./type";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
function Testimonials({
  background,
  titleColor = "text-white",
  heading = "text-white",
  headingColor = "text-[#232323]",
}: testimonalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${background} lg:my-32 my-20 lg:px-14 py-12  `}>
      <div className="mx-auto px-6">
        <motion.h1
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`lg:text-[22px] ${titleColor} text-[14px] text-center font-medium`}
        >
          Testimonials
        </motion.h1>
        <motion.h1
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`text-center ${heading}  ${grifter.className} text-[#232323] lg:text-[52px] text-[25px] font-bold`}
        >
          Our Satisfied Customers
        </motion.h1>
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={439}
            height={7}
            className="lg:w-[439px] mb-20 mx-auto w-[200px]"
          />
        </motion.div>
        <Swiper
          id="swiper-color"
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet ${index === activeIndex ? "active" : ""}"></span>`;
            },
          }}
          navigation={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
            },

            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper"
        >
          {testimonials.map((testimonial: Testimonial, index) => {
            const isActive = index === activeIndex;
            const isAdjacent =
              index === activeIndex - 1 || index === activeIndex + 1;

            return (
              <SwiperSlide
                key={testimonial.id}
                className={`transform transition-all rounded-xl duration-300 ${
                  isActive
                    ? "opacity-70 bg-white scale-105"
                    : isAdjacent
                      ? "opacity-110 bg-gray-100 scale-95"
                      : "opacity-70 bg-gray-200 scale-90"
                }`}
              >
                <div className="shadow-md lg:w-[430px] lg:h-[251px] rounded-xl py-6 px-3">
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <TiStarFullOutline
                        key={i}
                        className="text-[#FFC107] lg:text-xl text-md"
                      />
                    ))}
                  </div>
                  <p className="text-[#666666] raleway leading-[2] lg:text-[15px] text-[10px] mb-4">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="lg:w-12 lg:h-12 w-10 h-10 rounded-full lg:mr-4 mr-2"
                      />
                      <div>
                        <p
                          className={`font-medium lg:text-xl text-md ${headingColor}`}
                        >
                          {testimonial.name}
                        </p>
                        <p className="text-[#666666] lg:text-sm text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/assets/coma.svg"
                      alt="coma"
                      width={40}
                      height={28}
                      className="lg:w-[40px] lg:h-[28px] w-[20px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <style jsx>{`
        .custom-bullet {
          width: 20px;
          height: 20px;
          background-color: #096656;
          border-radius: 50%;
          margin: 0 8px;
          transition: all 0.3s ease;
        }
        .custom-bullet.active {
          background-color: #096656;
          transform: scale(1.5);
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
