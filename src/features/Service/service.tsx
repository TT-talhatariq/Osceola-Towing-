"use client";
import React from "react";
import Image from "next/image";
import Aboutus from "@/components/Aboutus";
import Button from "@/components/Button";
import Chooseus from "@/components/Chooseus";
import HelpSection from "@/components/HelpSection";
import Strip from "@/components/Strip";
import Link from "next/link";
import Testimonals from "@/components/Testimonals";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";
import Contactus from "@/components/ContactUs";

function Service() {
  return (
    <div>
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center lg:h-[75vh] h-[calc(100vh-40vh)] raleway lg:bg-no-repeat w-full">
        <div className="lg:mt-20">
          <h1
            className={`text-center ${grifter.className} lg:text-[150px] text-[32px] font-bold mb-6`}
          >
            Our Services
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className="lg:w-[600px] w-[150px] left-0 right-0 mx-auto"
          />
          <p className="text-center text-[#666666] raleway lg:text-[20px] text-[14px] mt-10 max-w-[700px] mx-auto">
            Professional towing and roadside assistance services available 24/7
          </p>
        </div>
      </div>
      <Image
        src="/assets/circle.svg"
        alt="circle"
        width={191}
        height={191}
        className="absolute lg:w-[191px] lg:hidden block lg:h-[191px] w-[60px] h-[200px] left-0 top-10"
      />
      <Strip />
      <Wrapper>
        <div className="text-center mb-12 lg:mb-32 px-3">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[52px] ${grifter.className} text-[20px] font-bold`}
          >
            Reliable Towing & Roadside
          </motion.h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[426px] mx-auto w-[200px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`lg:text-[52px] ${grifter.className} text-[20px] font-bold`}
          >
            Assistance You Can Count On
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[2] text-[#666666] lg:text-[18px] text-[14px] lg:mb-0 mb-10"
          >
            At Osceola Towing, we provide a full range of towing and roadside
            assistance services designed to get you back on the road quickly and
            safely. Whether you&apos;re dealing with a breakdown, an accident,
            or a long-distance towing need, our team is here to help 24/7.
          </motion.p>
        </div>
      </Wrapper>

      <Aboutus
        serviceNumber="Service: 01"
        title="Heavy-Duty Towing"
        description="From 18-wheelers to construction equipment, our heavy-duty towing service handles the biggest challenges on the road. With state-of-the-art equipment and certified operators, we ensure safe, damage-free transport for vehicles of any size. Available 24/7 for emergency and scheduled moves."
        perfectForItems={[
          "Commercial Trucks & Trailers",
          "Heavy Equipment & Machinery",
          "Buses & RVs",
          "Construction Vehicles",
        ]}
        buttonText="Request Now"
        buttonLink="#contactUs"
        secondaryButtonText="View Details"
        secondaryButtonLink="/services/heavy-duty-towing"
        imageSrc1="/assets/service-about-image.svg"
        imageSrc2="/assets/towing2.jpg"
        textColor="text-white"
        listColor="text-white"
        descText="text-white"
        background="lg:bg-[url('/assets/service-bg.svg')] bg-[url('/assets/services-bg-mobile.svg')] xl:h-[1000px] lg:h-[900px] pt-[270px] -mt-60 xl:pt-[330px] lg:pt-[330px]"
      />

      <div className="bg-white py-28">
        <Wrapper>
          <div className="flex lg:flex-row flex-col lg:gap-1 px-3">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <p className="lg:text-[22px] text-[14px] text-[#F6B620] font-medium">
                  Service: 02
                </p>
                <h1
                  className={`lg:text-[43px] ${grifter.className} text-[25px] font-bold`}
                >
                  Emergency Roadside
                </h1>
                <Image
                  src="/assets/yellow-vector.svg"
                  alt="circle"
                  width={300}
                  height={7}
                  className="my-2"
                />
                <h1
                  className={`lg:text-[43px] ${grifter.className} mb-2 text-[25px] font-bold`}
                >
                  Assistance
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#666666] lg:text-[17px] text-[14px] leading-[2] raleway mb-8"
              >
                When you&apos;re stranded, every second matters. Our 24/7
                emergency response team arrives quickly with all the necessary
                equipment to get you moving again. With an average response time
                of 30 minutes or less, we&apos;re your reliable partner for any
                roadside emergency, any time of day or night.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="lg:text-[22px] text-[14px] raleway text-[#F6B620]">
                  Our Emergency Services Include:
                </h2>
                <ul className="list-none space-y-4 text-[#232323] raleway">
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="bullet"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                    <div>
                      <p className="font-semibold">Battery Jump-Start</p>
                      <p className="text-[#666666] text-sm">
                        Advanced equipment for safe, quick jump-starts for any
                        vehicle type
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="bullet"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                    <div>
                      <p className="font-semibold">Flat Tire Changes</p>
                      <p className="text-[#666666] text-sm">
                        Professional tire replacement with proper tools and
                        expertise
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="bullet"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                    <div>
                      <p className="font-semibold">Fuel Delivery</p>
                      <p className="text-[#666666] text-sm">
                        Quick delivery of the right fuel type, right where you
                        are
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src="/assets/small-circle.svg"
                      alt="bullet"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                    <div>
                      <p className="font-semibold">Lockout Services</p>
                      <p className="text-[#666666] text-sm">
                        Professional unlocking service for all vehicle makes and
                        models
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4 mt-8 lg:flex-row flex-col"
              >
                <Link href="#contactUs">
                  <Button
                    title="Request Now"
                    center="mx-0"
                    width="lg:w-[200px] w-full"
                    bgcolor="bg-[#096656]"
                  />
                </Link>
                <Link href="/services/emergency-assistance">
                  <Button
                    title="View Details"
                    center="mx-0"
                    width="lg:w-[150px] w-full lg:mb-0 mb-5"
                    bgcolor="bg-[#F6B620]"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/assets/services-2.svg"
                alt="Emergency Roadside Assistance"
                width={567}
                height={474}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </Wrapper>
      </div>

      <Aboutus
        serviceNumber="Service: 03"
        title="Long-Distance Towing"
        description="Trust your vehicle to our expert long-distance towing service. We offer secure, GPS-tracked transport across state lines with real-time updates. Our enclosed and flatbed options ensure your vehicle arrives in the same condition it left, whether it's a luxury car, classic vehicle, or daily driver."
        buttonText="Request Now"
        buttonLink="#contactUs"
        secondaryButtonText="View Details"
        secondaryButtonLink="/services/long-distance-towing"
        perfectForItems={[
          "Interstate Vehicle Transport",
          "Luxury & Classic Cars",
          "Dealership Transfers",
          "Cross-Country Moves",
        ]}
        imageSrc1="/assets/services-3.svg"
        background="bg-[#F6B620] bg-opacity-10"
      />
      <Chooseus
        title="Service : 04"
        heading="Accident Recovery"
        image="/assets/about-choose-image.svg"
        description="When accidents happen, count on our rapid response team for professional recovery services. We handle everything from minor fender-benders to major incidents with specialized equipment and trained professionals. Our team works efficiently to clear the scene while preserving your vehicle's condition."
        perfectForItems={[
          "Collision Recovery",
          "Vehicle Extraction",
          "Scene Cleanup",
          "Insurance Coordination",
        ]}
        ulHeading="Specialized For:"
        visible="block"
        buttonText="Request Now"
        buttonLink="#contactUs"
        secondaryButtonText="View Details"
        secondaryButtonLink="/services/accident-recovery"
      />
      <Testimonals
        background="lg:bg-[url('/assets/testiomonals-bg.svg')] bg-[url('/assets/testiomonals-bg-mobile.svg')] bg-cover bg-center bg-no-repeat"
        headingColor="text-[#096656]"
        iconColor="text-white"
      />

      <HelpSection
        bgImage="lg:bg-[url('/assets/help-black-bg.svg')] bg-[url('/assets/help-black-mobile-bg.svg')]"
        buttonPrimaryProps={{
          title: "Contact Us",
          width: "lg:w-[267px] w-[190px]",
          bgcolor: "bg-[#096656]",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
        buttonSecondaryProps={{
          title: "Call Us",
          width: "lg:w-[148px] w-[100px]",
          bgcolor: "bg-transparent border border-white",
          iconColor: "text-black",
          iconbg: "bg-white",
        }}
      />
      <Contactus background="bg-[#F6B620] bg-opacity-10" />
    </div>
  );
}

export default Service;
