import React from "react";
import Image from "next/image";
import { ContactProps } from "./type";
import Form from "@/components/Forms";
function Contactus({
  background = "bg-[#F6B620] bg-opacity-10",
}: ContactProps) {
  return (
    <div className={`${background} raleway mt-10 lg:p-28 p-5`}>
      <div className="lg:flex gap-20 items-center">
        <div>
          <h1 className="lg:text-[22px] text-[18px] text-[#F6B620] font-medium">
            Contact Us
          </h1>
          <h1 className="lg:text-[52px] text-[28px] font-bold">
            Need Assistance?{" "}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
          />
          <h1 className="mb-10 lg:text-[52px] text-[28px] font-bold">
            Contact Us Now!
          </h1>
          <Form />
        </div>
        <div className="lg:w-[554px] lg:mt-0 mt-10 w-full lg:h-[649px] lg:pb-0 pb-10 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57939.708043769475!2d67.14775275!3d24.821746949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1736359142519!5m2!1sen!2s"
            style={{ borderRadius: "15px" }}
            loading="lazy"
            className="lg:w-[554px] w-full lg:h-[649px] h-[303px] "
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
