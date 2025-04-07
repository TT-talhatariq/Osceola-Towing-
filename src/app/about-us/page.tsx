import React from "react";
import type { Metadata } from "next";
import Aboutus from "@/features/AboutUs";

export const metadata: Metadata = {
  title: "About Us | Osceola Towing",
  description:
    "Learn about Osceola Towing's commitment to professional towing services in Wisconsin. Our experienced team provides reliable 24/7 towing and recovery solutions.",
  keywords: [
    "Osceola Towing",
    "about us",
    "towing company",
    "professional towing",
    "Wisconsin towing",
    "towing service",
    "roadside assistance",
    "vehicle recovery",
    "emergency towing",
    "local towing company",
  ],
  openGraph: {
    title: "About Us | Osceola Towing",
    description:
      "Professional towing services in Wisconsin. 24/7 emergency response and reliable vehicle recovery.",
    url: "https://osceolatowing.com/about-us",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Osceola Towing",
    description:
      "Professional towing services in Wisconsin. 24/7 emergency response.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/about-us",
  },
};

export default function AboutUs() {
  return <Aboutus />;
}
