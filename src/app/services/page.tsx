import React from "react";
import type { Metadata } from "next";
import Service from "@/features/Service";

export const metadata: Metadata = {
  title: "Our Services | Osceola Towing",
  description:
    "Professional towing and recovery services in Osceola, WI. Offering heavy-duty towing, emergency assistance, long-distance towing, and accident recovery. Available 24/7.",
  keywords: [
    "towing services",
    "emergency towing",
    "heavy duty towing",
    "roadside assistance",
    "vehicle recovery",
    "long distance towing",
    "accident recovery",
    "24/7 towing service",
    "professional towing",
    "Wisconsin towing company",
  ],
  openGraph: {
    title: "Our Services | Osceola Towing",
    description:
      "Professional towing and recovery services in Osceola, WI. Available 24/7 for all your towing needs.",
    url: "https://osceolatowing.com/services",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Osceola Towing",
    description:
      "Professional towing and recovery services in Osceola, WI. Available 24/7.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/services",
  },
};

export default function ServicesPage() {
  return <Service />;
}
