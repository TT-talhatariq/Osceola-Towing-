"use client";
import React from "react";
import Image from "next/image";
import { grifter } from "@/app/layout";
import Wrapper from "@/components/Wrapper/wrapper";
import Button from "@/components/Button";
import Link from "next/link";
import Strip from "@/components/Strip";
import HelpSection from "@/components/HelpSection";
import Contactus from "@/components/ContactUs";
import AboutUsOffer from "@/components/AboutUsOffer";
import BookServiceCard from "@/data/bookServiceCard.json";
interface ServiceItem {
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  additionalDescription?: string;
  equipmentList?: ServiceItem[];
  servicesList?: ServiceItem[];
  imageSrc: string;
}

export default function ServicePage({
  title,
  subtitle,
  description,
  additionalDescription,
  equipmentList,
  servicesList,
  imageSrc,
}: ServicePageProps) {
  return (
    <div>
      <div className="lg:bg-[url('/assets/aboutus-bg.svg')] bg-cover flex flex-col justify-center items-center lg:h-[75vh] h-[calc(100vh-50vh)] raleway lg:bg-no-repeat w-full">
        <div className="lg:mt-20">
          <h1
            className={`text-center ${grifter.className} lg:text-[120px] text-[32px] font-bold mb-6`}
          >
            {title}
          </h1>
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={511}
            height={12}
            className="lg:w-[600px] w-[150px] left-0 right-0 mx-auto"
          />
          <p className="text-center text-[#666666] raleway lg:text-[20px] text-[14px] mt-10 max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
      <Strip />

      <Wrapper>
        <div className="py-20 px-3">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`${grifter.className} lg:text-[42px] text-[28px] font-bold mb-6`}
              >
                {title}
              </h2>
              <div className="space-y-6 text-[#666666]">
                <p>{description}</p>
                {additionalDescription && <p>{additionalDescription}</p>}
              </div>

              {(equipmentList || servicesList) && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">
                    {equipmentList ? "Our Equipment:" : "Our Services:"}
                  </h3>
                  <ul className="list-none space-y-4">
                    {(equipmentList || servicesList)?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Image
                          src="/assets/small-circle.svg"
                          alt="bullet"
                          width={15}
                          height={15}
                          className="mt-2"
                        />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-[#666666] text-sm">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex gap-4 lg:flex-row flex-col">
                <Link href="/book-services">
                  <Button
                    title="Request Service"
                    width="lg:w-[200px] w-full"
                    bgcolor="bg-[#096656]"
                  />
                </Link>
                <a href="tel:+17157553281">
                  <Button
                    title="Call Now"
                    width="lg:w-[150px] w-full lg:mb-0 mb-5"
                    bgcolor="bg-[#F6B620]"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src={imageSrc}
                alt={title}
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Wrapper>

      <AboutUsOffer
        data={BookServiceCard}
        visible="block"
        imageStyling="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] "
        title="How We Work"
        heading="How to Book Your Service"
        background="bg-transparent"
        headingColor="text-black"
        titleColor="text-[#F6B620]"
      />

      <HelpSection
        bgImage="lg:bg-[url('/assets/help-black-bg.svg')] bg-[url('/assets/help-black-mobile-bg.svg')]"
        buttonPrimaryProps={{
          title: "Request Service",
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
