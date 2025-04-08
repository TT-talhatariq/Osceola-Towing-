import React from "react";
import Image from "next/image";
import { ContactProps } from "./type";
import Form from "@/components/Forms/ContactForm";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";

function Contactus({ background = "bg-[#F6B620]" }: ContactProps) {
  return (
    <div id="contactUs" className={`${background} raleway py-20`}>
      <Wrapper>
        <div className="lg:flex items-stretch gap-12">
          {/* Form Section */}
          <div className="lg:w-[55%] bg-white rounded-2xl p-8 lg:p-12 shadow-md">
            <div className="mb-8">
              <h3 className="text-[#F6B620] font-medium text-lg mb-3">
                Contact Us
              </h3>
              <h1
                className={`${grifter.className} text-[32px] lg:text-[42px] font-bold leading-tight mb-2`}
              >
                Need Assistance?
              </h1>
              <div className="relative">
                <h1
                  className={`${grifter.className} text-[32px] lg:text-[42px] font-bold leading-tight`}
                >
                  Contact Us Now!
                </h1>
                <Image
                  src="/assets/yellow-vector.svg"
                  alt="decoration"
                  width={326}
                  height={7}
                  className="absolute -bottom-4 left-0"
                />
              </div>
            </div>
            <Form />
          </div>

          {/* Map Section */}
          <div className="lg:w-[45%] lg:mt-0 mt-8">
            <div className="bg-white p-3 rounded-2xl shadow-md h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.996228468582!2d-92.6797617!3d45.308501799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2970899221ce9%3A0xb75f3f66f886387b!2sOsceola%20Towing%20%26%20Recovery!5e0!3m2!1sen!2s!4v1744005915028!5m2!1sen!2s"
                className="w-full h-full min-h-[500px] rounded-xl"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Contactus;
