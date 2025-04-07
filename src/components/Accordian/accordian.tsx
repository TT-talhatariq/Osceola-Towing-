"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

function Accordions() {
  const [openItem, setOpenItem] = useState<number | null>(null);

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

  const handleItemClick = (key: number | null) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <Accordion variant="splitted" className="lg:mt-20 mt-14 z-20">
      {faqData.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            indicator
            aria-label={`Accordion ${index + 1}`}
            title={
              <div
                onClick={() => handleItemClick(index)}
                className="flex items-center justify-between lg:text-[18px] text-[12px] lg:px-0 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-block w-5">{index + 1}.</span>
                  <span>{item.question}</span>
                </div>
                <IoIosArrowDropdownCircle
                  className={`lg:w-8 lg:h-8 w-4 h-4 text-[#F6B620] transition-transform duration-300 ml-4 ${
                    openItem === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            }
            className="text-[#666666] rounded-3xl hover:shadow-xl mb-5 lg:text-[16px] text-[11px] border border-[#F6B620] bg-[#F6F6F6] hover:bg-white lg:pl-10 lg:pr-5 font-medium"
          >
            {item.answer}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default Accordions;
