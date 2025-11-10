"use client";
import React from "react";
import Image from "next/image";
import Aboutus from "@/components/Aboutus";
import Services from "@/components/Services";
import ChooseCard from "@/data/chooseCard.json";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contactus from "@/components/ContactUs";
import Chooseus from "@/components/Chooseus";
import Button from "@/components/Button";
import Emergency from "@/components/Emergency";
import ServiceData from "@/data/serviceCards.json";
import Strip from "@/components/Strip";
import Testimonals from "@/components/Testimonals";
import Link from "next/link";
import { motion } from "framer-motion";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";

function Homepage() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#FFF7DC] mt-20 md:mt-28 lg:mt-32">
        <div className="pointer-events-none absolute -top-16 md:-top-24 left-1/2 h-[300px] w-[300px] md:h-[420px] md:w-[420px] -translate-x-1/2 rounded-full bg-[#F6B620]/15 blur-3xl lg:left-[10%] lg:-translate-x-0" />
        <Wrapper>
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid items-center gap-8 md:gap-10 lg:gap-12 py-12 md:py-16 lg:py-20 xl:py-24 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col gap-5 md:gap-6 text-center lg:text-left"
            >
              <span className="mx-auto inline-flex items-center justify-center rounded-full bg-[#096656]/10 px-4 py-2 text-xs md:text-sm font-semibold text-[#096656] lg:mx-0 lg:text-base">
                24/7 Emergency Tow & Recovery
              </span>
              <h1
                className={`${grifter.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] md:leading-tight text-[#232323]`}
              >
                Reliable Towing When Your Day Takes a Detour
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4A4A4A] max-w-2xl mx-auto lg:mx-0">
                Count on Osceola Towing for rapid roadside assistance, light and
                heavy-duty recovery, and damage-free transport. Our local team is
                on-call day and night to keep you moving safely.
              </p>
              <div className="flex flex-col items-center gap-3 md:gap-4 sm:flex-row sm:justify-center lg:justify-start mt-2">
                <Link href="#contactUs" className="w-full sm:w-auto">
                  <Button
                    title="Request a Tow Now"
                    width="w-full sm:w-auto"
                    center="mx-0"
                  />
                </Link>
                <Link
                  href="tel:+17157553281"
                  className="flex items-center justify-center gap-2.5 md:gap-3 rounded-full bg-white px-5 py-3 text-xs md:text-sm font-semibold text-[#096656] shadow-md transition hover:shadow-lg lg:text-base w-full sm:w-auto"
                >
                  <span className="h-2 w-2 rounded-full bg-[#F6B620]" />
                  Call (715) 755-3281
                </Link>
              </div>
              <dl className="grid grid-cols-2 gap-3 md:gap-4 text-left lg:max-w-xl mt-2 md:mt-4">
                <div className="rounded-xl md:rounded-2xl bg-white/80 p-3 md:p-4 shadow-lg backdrop-blur">
                  <dt className={`${grifter.className} text-2xl md:text-3xl font-bold text-[#232323]`}>
                    15+
                  </dt>
                  <dd className="text-xs md:text-sm text-[#4A4A4A] mt-1">
                    Years keeping Osceola County drivers safe
                  </dd>
                </div>
                <div className="rounded-xl md:rounded-2xl bg-white/80 p-3 md:p-4 shadow-lg backdrop-blur">
                  <dt className={`${grifter.className} text-2xl md:text-3xl font-bold text-[#232323]`}>
                    20min
                  </dt>
                  <dd className="text-xs md:text-sm text-[#4A4A4A] mt-1">
                    Average dispatch time within our service area
                  </dd>
                </div>
              </dl>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative flex flex-col items-center lg:items-start gap-4 md:gap-5"
            >
              <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-[42px] bg-[#0B1D18] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#096656]/40 via-transparent to-transparent" />
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/new-images/homeherobanner.png"
                    alt="Osceola Towing facility with service vehicles ready for dispatch"
                    fill
                    priority
                    sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 88vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="max-w-md text-center lg:text-left text-xs md:text-sm text-[#4A4A4A] px-2 md:px-0">
                Local, insured, and trusted by motorists across the St. Croix
                Valley for rapid accident recovery and roadside support.
              </figcaption>
            </motion.figure>
          </motion.section>
        </Wrapper>
      </div>
      <Strip />
      <Aboutus
        serviceNumber="About Us"
        title="Welcome to Osceola Towing"
        description="At Osceola Towing, we provide fast, reliable, and affordable towing services for all your needs. Whether it's a roadside breakdown, accident recovery, or heavy-duty towing, our experienced team is here to help. With a commitment to customer satisfaction and safety, we're your trusted towing partner in Osceola County and beyond."
        buttonText="Read More"
        imageSrc1="/assets/welcome-image.svg"
        background="bg-white"
      />

      <Services
        data={ServiceData}
        backgroundImage="lg:bg-[url('/assets/services-image.svg')]  lg:bg-transparent  bg-[#232323] bg-opacity-90 "
        title="Our Services"
        heading="Our Towing Services Include:"
        visible="block"
      />
      <Chooseus
        title="Why Choose Us"
        heading="Why Osceola Towing?"
        image="/assets/choose-image.svg"
        data={ChooseCard}
      />
      <Testimonals
        background="bg-[#F6B620] bg-opacity-10"
        titleColor="text-[#FFC107]"
        heading="text-black"
      />
      <Gallery />
      <Emergency
        image="/assets/priority-image.svg"
        backgroundImage="lg:bg-[url('/assets/emergency-bg.svg')] lg:h-full h-[1140px] bg-[url('/assets/emergency-mobile.svg')]"
        textColor1="text-white"
        textColor2="text-white"
      />
      <Faq />
      <Contactus background="bg-[#F6B620] bg-opacity-10" />
    </>
  );
}

export default Homepage;
