import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { HelpSectionProps } from "./type";
import { grifter } from "@/app/layout";
import Link from "next/link";
function HelpSection({
  bgImage,
  buttonPrimaryProps,
  buttonSecondaryProps,
}: HelpSectionProps) {
  return (
    <div>
      <div
        className={`${bgImage} bg-cover lg:h-[528px] h-[490px]  bg-center lg:pt-20 mt-10 pt-10 pb-10 text-white my-20 w-full raleway bg-no-repeat lg:w-[85%] m-5 rounded-3xl mx-auto`}
      >
        <div className="text-center lg:px-0 px-3">
          <h1 className="lg:text-[22px] text-[18px] text-white text-center font-medium">
            Contact Us Today!{" "}
          </h1>
          <h1
            className={`lg:text-[52px] lg:w-[750px] ${grifter.className} mx-auto text-white text-[26px] text-center font-bold`}
          >
            Need Help Now? We’ve Got You Covered!{" "}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[439px] mx-auto w-[200px]"
          />
          <p className="lg:text-[18px] text-[12px] mt-5 text-center lg:px-20 leading-[2] px-5">
            Stranded on the road or in need of reliable towing services? Don’t
            wait—our experienced team is ready to assist you 24/7. With fast
            response times, professional service, and competitive pricing, we’re
            here to get you back on the road quickly and safely.
          </p>
          <div className="flex items-center mt-10 justify-center lg:gap-5 gap-3">
            <Link href="#Contactus" className="cursor-pointer">
              <Button {...buttonPrimaryProps} />
            </Link>
            <a href="tel:715-755-3281" className="cursor-pointer">
              <Button {...buttonSecondaryProps} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
