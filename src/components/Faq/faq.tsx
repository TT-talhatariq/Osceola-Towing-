import Image from "next/image";
import React from "react";
import Accordians from "@/components/Accordian";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";

function Faq() {
  return (
    <>
      <div className="bg-[url('/assets/pair-circel.svg')] raleway bg-no-repeat bg-cover bg-center w-full">
        <Wrapper>
          <div className="raleway lg:py-32 lg:px-24 p-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:text-[22px] text-[18px] text-center text-[#F6B620] font-medium"
            >
              FAQs{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ fontWeight: "bold" }}
              className={`${grifter.className} text-center lg:text-[43px] text-[30px] `}
            >
              Frequently Asked Question{" "}
            </motion.h1>
            <Image
              src="/assets/yellow-vector.svg"
              alt="circle"
              width={326}
              height={7}
              className="lg:w-[326px] w-[250px] mx-auto"
            />
            <div>
              <Accordians />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Faq;
