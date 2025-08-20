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
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Wrapper from "@/components/Wrapper/wrapper";

function Testimonials({
  background,
  titleColor = "text-white",
  heading = "text-white",
  headingColor = "text-[#232323]",
  iconColor = "text-black",
}: testimonalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${background} lg:py-32 py-20`}>
      <Wrapper>
        <div className="mx-auto">
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
            className={`text-center ${heading} ${grifter.className} text-[#232323] lg:text-[52px] text-[25px] font-bold`}
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
          <div className="relative px-4 lg:px-16">
            <button
              className="absolute cursor-pointer lg:-left-4 -left-2 top-1/2 transform -translate-y-1/2 z-10 p-3"
              id="prevButton"
            >
              <FaLessThan className={`lg:text-2xl text-lg ${iconColor}`} />
            </button>
            <Swiper
              id="swiper-color"
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet ${
                    index === activeIndex ? "active" : ""
                  }"></span>`;
                },
              }}
              navigation={{
                prevEl: "#prevButton",
                nextEl: "#nextButton",
              }}
              spaceBetween={24}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial: Testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white shadow-lg rounded-xl p-6 h-[350px] flex flex-col justify-between border border-gray-100">
                    <div>
                      <div className="mb-4 flex items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <TiStarFullOutline
                              key={i}
                              className="text-[#FFC107] lg:text-xl text-md"
                            />
                          )
                        )}
                      </div>
                      <p className="text-[#666666] raleway leading-[1.8] lg:text-[16px] text-[13px]">
                        {testimonial.feedback}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                      <div>
                        <p
                          className={`font-medium lg:text-lg text-md ${headingColor}`}
                        >
                          {testimonial.name}
                        </p>
                        <p className="text-[#666666] lg:text-sm text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                      <Image
                        src="/assets/coma.svg"
                        alt="coma"
                        width={40}
                        height={28}
                        className="lg:w-[32px] w-[20px]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-custom mt-8 flex justify-center"></div>
            <button
              className="absolute lg:-right-4 -right-2 top-1/2 transform -translate-y-1/2 z-10 p-3"
              id="nextButton"
            >
              <FaGreaterThan className={`lg:text-2xl text-lg ${iconColor}`} />
            </button>
          </div>
        </div>
      </Wrapper>
      <style jsx>{`
        .custom-bullet {
          width: 8px;
          height: 8px;
          background-color: #d9d9d9;
          border-radius: 50%;
          margin: 0 4px;
          transition: all 0.3s ease;
          opacity: 0.5;
          display: inline-block;
        }
        .custom-bullet.active {
          background-color: #096656;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
