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
function Testimonials({
  background,
  titleColor = "text-white",
  heading = "text-white",
  headingColor = "text-[#232323]",
}: testimonalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${background} my-32 py-12  `}>
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
          className={`text-center ${heading} lg:text-[52px] text-[25px] font-bold`}
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
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet ${index === activeIndex ? "active" : ""}"></span>`;
            },
          }}
          navigation={true}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper"
        >
          {testimonials.map((testimonial: Testimonial, index) => (
            <SwiperSlide
              key={testimonial.id}
              className={`transform transition-all rounded-xl duration-300 ${
                index === activeIndex
                  ? "scale-110 opacity-100"
                  : "scale-90 opacity-70"
              }`}
            >
              <div className="bg-white shadow-md w-[430px] h-[251px] rounded-xl py-6 px-3">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <TiStarFullOutline
                      key={i}
                      className="text-[#FFC107] text-xl"
                    />
                  ))}
                </div>
                <p className="text-[#666666] leading-[2] text-[15px] mb-4">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className={`font-medium text-xl ${headingColor}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-[#666666] text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/assets/coma.svg"
                    alt="coma"
                    width={40}
                    height={28}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
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
