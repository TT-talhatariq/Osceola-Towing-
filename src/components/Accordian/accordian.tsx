"use client";
import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Accordions() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What types of vehicles do you tow?",
      answer:
        "We tow a wide range of vehicles including cars, SUVs, motorcycles, trucks, and even heavy-duty commercial vehicles. Our fleet is equipped to handle vehicles of all sizes and conditions.",
    },
    {
      question: "Are your services available 24/7?",
      answer:
        "We're proud to offer comprehensive 24/7 towing and roadside assistance services, available every day of the year including holidays and weekends.",
    },
    {
      question: "How quickly can you reach me?",
      answer:
        "Our response time typically ranges from 15-45 minutes depending on your location and current demand. We prioritize emergency situations and always strive to reach you as quickly as possible.",
    },
    {
      question: "Do you offer roadside assistance in addition to towing?",
      answer:
        "Yes, we provide a full range of roadside assistance services including jump starts, tire changes, fuel delivery, lockout assistance, and minor mechanical help to get you back on the road.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies based on the service required, distance, vehicle type, and conditions. We provide transparent quotes before beginning service and offer competitive rates with no hidden fees.",
    },
    {
      question: "Can you help with accident recovery?",
      answer:
        "Absolutely. Our team is trained in safe accident recovery procedures. We can carefully remove your vehicle from the scene and transport it to your preferred repair facility or another destination.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="lg:mt-20 mt-14 z-20 space-y-4">
      {faqData.map((item, index) => {
        const isOpen = openItems.includes(index);
        
        return (
          <div
            key={index}
            className="text-[#666666] rounded-3xl hover:shadow-xl mb-5 lg:text-[16px] text-[11px] border border-[#F6B620] bg-[#F6F6F6] hover:bg-white lg:pl-10 lg:pr-5 pl-4 pr-4 font-medium overflow-hidden"
          >
            {/* Question Header */}
            <div
              onClick={() => toggleItem(index)}
              className="flex items-center justify-between lg:text-[18px] text-[12px] py-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="inline-block w-5">{index + 1}.</span>
                <span className="lg:text-[18px] text-[14px]">{item.question}</span>
              </div>
              <IoIosArrowDropdownCircle
                className={`lg:w-8 lg:h-8 w-6 h-6 text-[#F6B620] transition-transform duration-300 ml-4 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            
            {/* Answer Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen 
                  ? "max-h-96 opacity-100 pb-4" 
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="lg:text-[16px] text-[13px] leading-relaxed pl-8 pr-4">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordions;
