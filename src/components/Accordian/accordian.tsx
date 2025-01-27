"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";
function Accordions() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const defaultContent =
    "Yes, we provide round-the-clock towing and roadside assistance services, including holidays and weekends.";

  const handleItemClick = (key: number | null) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <Accordion variant="splitted" className="lg:mt-20 mt-14 z-20 ">
      {[
        "What types of vehicles do you tow?",
        "Are your services available 24/7?",
        "How quickly can you reach me?",
        "Do you offer roadside assistance in addition to towing?",
        "How much do your services cost?",
        "Can you help with accident recovery?",
      ].map((question, index) => {
        return (
          <AccordionItem
            key={index}
            indicator
            aria-label={`Accordion ${index + 1}`}
            title={
              <div
                onClick={() => handleItemClick(index)}
                className="flex justify-between  items-center lg:text-[18px] text-[12px] lg:px-0  gap-4 cursor-pointer"
              >
                {`${index + 1}. ${question}`}
                <IoIosArrowDropdownCircle
                  className={`lg:w-8 lg:h-8  w-4 h-4 text-[#F6B620] transition-transform duration-300 ${
                    openItem === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            }
            className={`text-[#666666] rounded-full px-2 hover:shadow-xl mb-5 lg:text-[16px] text-[11px] border border-[#F6B620] bg-[#F6F6F6] hover:bg-white lg:pl-10 lg:pr-5 font-medium `}
          >
            {defaultContent}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default Accordions;
