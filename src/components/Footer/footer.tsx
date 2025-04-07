import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import FooterLinksJson from "@/data/footerLinks.json";
import RenderSection from "@/components/Footer/renderFooterLinks";
import Link from "next/link";
import Wrapper from "@/components/Wrapper/wrapper";

function Footer() {
  const { NavigationLinks } = FooterLinksJson;

  const servicesLinks = [
    { name: "All Services", link: "/services" },
    { name: "Heavy Duty Towing", link: "/services/heavy-duty-towing" },
    { name: "Emergency Assistance", link: "/services/emergency-assistance" },
    { name: "Long Distance Towing", link: "/services/long-distance-towing" },
    { name: "Accident Recovery", link: "/services/accident-recovery" },
  ];

  return (
    <>
      <Wrapper>
        <div className="raleway lg:flex lg:justify-between justify-center lg:text-start text-center py-10">
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

            <p className="lg:text-[18px] text-[14px] text-[#666666] mb-3 mt-5 lg:w-96">
              Osceola Towing delivers 24/7 emergency towing and roadside
              assistance across Osceola County and beyond, combining fast
              response, affordable rates, and state-of-the-art expertise to keep
              you moving safely.
            </p>
            <div className="flex items-center lg:justify-start justify-center gap-4">
              <div className="bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center flex-col justify-center">
                <Link href="https://web.facebook.com/p/Osceola-Transport-and-towing-100064027475834/?_rdc=1&_rdr#">
                  <FaFacebookF className="text-[#F6B620]" />
                </Link>
              </div>{" "}
            </div>
          </div>

          <RenderSection title="Navigation Links" items={NavigationLinks} />
          <RenderSection title="Our Services" items={servicesLinks} />
        </div>
      </Wrapper>
      <div>
        <h1 className="lg:text-[20px] text-[9px] text-white raleway bg-[#232323] text-center p-3">
          copy right by Osceola Towing Website Design. All Right Reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
