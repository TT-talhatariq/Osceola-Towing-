"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";

// Define the testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John D.",
      role: "Satisfied Customer",
      feedback:
        "The team at Osceola Towing saved the day when my truck broke down. Their response time and professionalism were unmatched!",
      rating: 5,
      image: "/assets/person.svg",
    },
    {
      id: 2,
      name: "Kristin Watson",
      role: "Satisfied Customer",
      feedback:
        "The team at Osceola Towing saved the day when my truck broke down. Their response time and professionalism were unmatched!",
      rating: 5,
      image: "/assets/person.svg",
    },
    {
      id: 3,
      name: "Michael R.",
      role: "Satisfied Customer",
      feedback:
        "Their services were quick and reliable. I will definitely recommend Osceola Towing to others!",
      rating: 5,
      image: "/assets/person.svg",
    },
    {
      id: 4,
      name: "John D.",
      role: "Satisfied Customer",
      feedback:
        "The team at Osceola Towing saved the day when my truck broke down. Their response time and professionalism were unmatched!",
      rating: 5,
      image: "/assets/person.svg",
    },
    {
      id: 5,
      name: "Kristin Watson",
      role: "Satisfied Customer",
      feedback:
        "The team at Osceola Towing saved the day when my truck broke down. Their response time and professionalism were unmatched!",
      rating: 5,
      image: "/assets/person.svg",
    },
    {
      id: 6,
      name: "Michael R.",
      role: "Satisfied Customer",
      feedback:
        "Their services were quick and reliable. I will definitely recommend Osceola Towing to others!",
      rating: 5,
      image: "/assets/person.svg",
    },
  ];

  return (
    <section className="bg-[#F6B620] bg-opacity-10 my-32 py-12">
      <div className="mx-auto px-6">
        <h1 className="lg:text-[22px] text-[#F6B620] text-[14px] text-center font-medium">
          Testimonials
        </h1>
        <h1 className="text-center text-black lg:text-[52px] text-[25px] font-bold">
          Our Satisfied Customers
        </h1>
        <Image
          src="/assets/yellow-vector.svg"
          alt="circle"
          width={439}
          height={7}
          className="lg:w-[439px] mb-20 mx-auto w-[200px]"
        />
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
          {testimonials.map((testimonial, index) => (
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
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-xl text-[#232323]">
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
};

export default Testimonials;
