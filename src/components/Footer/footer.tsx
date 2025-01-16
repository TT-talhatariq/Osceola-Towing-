import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import FooterLinksJson from "@/data/footerLinks.json";
import RenderSection from "@/components/Footer/renderFooterLinks";
import Link from "next/link";
function Footer() {
  const { NavigationLink, SupportLink } = FooterLinksJson;

  return (
    <>
      <div className="raleway  lg:flex  lg:justify-between justify-center lg:text-start text-center lg:p-24 p-5">
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              src="./assets/logo.svg"
              alt="logo"
              width={70}
              height={14}
              className="lg:w-[140px] lg:mx-0 mx-auto lg:h-[68px]"
            />
          </Link>

          <p className="lg:text-[18px]  text-[11px] text-[#666666] mb-3 mt-5 lg:w-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tincidunt ex non pretium scelerisque. Sed dapibus nulla sit amet
            libero eleifend, in tempus felis interdum.
          </p>
          <div className="flex items-center lg:justify-start justify-center gap-4">
            <div className="bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center flex-col justify-center">
              <Link href="">
                <FaFacebookF className="text-[#F6B620]" />
              </Link>
            </div>{" "}
            <div className="bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center flex-col justify-center">
              <Link href="">
                <FaInstagram className="text-[#F6B620]" />
              </Link>
            </div>{" "}
            <div className="bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center flex-col justify-center">
              <Link href="">
                <FaTwitter className="text-[#F6B620]" />
              </Link>
            </div>{" "}
            <div className="bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center flex-col justify-center">
              <Link href="">
                <FaLinkedinIn className="text-[#F6B620]" />
              </Link>
            </div>
          </div>
        </div>

        <RenderSection title="Navigation Link" items={NavigationLink} />
        <RenderSection title="Support Link" items={SupportLink} />
      </div>
    </>
  );
}
export default Footer;
