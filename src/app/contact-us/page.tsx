import React from "react";
import type { Metadata } from "next";
import Contactus from "@/features/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | Osceola Towing",
  description:
    "Get in touch with Osceola Towing for professional towing services in Wisconsin. Available 24/7 for emergency towing and roadside assistance.",
  keywords: [
    "contact Osceola Towing",
    "towing service contact",
    "emergency towing contact",
    "roadside assistance contact",
    "Wisconsin towing company",
    "24/7 towing service",
    "towing company near me",
    "emergency contact towing",
    "towing service phone number",
    "local towing contact",
  ],
  openGraph: {
    title: "Contact Us | Osceola Towing",
    description:
      "Contact Osceola Towing for professional towing services. Available 24/7 for emergency assistance.",
    url: "https://osceolatowing.com/contact-us",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Osceola Towing",
    description:
      "Contact Osceola Towing for professional towing services. Available 24/7.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/contact-us",
  },
};

export default function ContactUs() {
  return <Contactus />;
}
