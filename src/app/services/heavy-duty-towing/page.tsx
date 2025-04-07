import React from "react";
import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heavy Duty Towing Services | Osceola Towing",
  description:
    "Professional heavy duty towing services for trucks, construction equipment, and commercial vehicles in Osceola, WI. 24/7 emergency service with state-of-the-art equipment.",
  keywords: [
    "heavy duty towing",
    "commercial vehicle towing",
    "truck towing Osceola",
    "equipment transport Wisconsin",
    "heavy equipment towing",
    "semi truck towing",
    "construction equipment transport",
    "commercial towing service",
    "heavy duty wrecker service",
    "professional towing company",
    "Osceola towing service",
    "24/7 heavy duty towing",
    "emergency truck towing",
    "Wisconsin towing company",
  ],
  openGraph: {
    title: "Heavy Duty Towing Services | Osceola Towing",
    description:
      "Professional heavy duty towing and transport services in Osceola, WI. Equipped for trucks, heavy equipment, and commercial vehicles.",
    url: "https://osceolatowing.com/services/heavy-duty-towing",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Duty Towing Services | Professional Towing",
    description:
      "Expert heavy duty towing services in Osceola, WI. Available 24/7 for all commercial vehicles.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/services/heavy-duty-towing",
  },
};

export default function HeavyDutyTowing() {
  const equipmentList = [
    {
      title: "Heavy-Duty Wreckers",
      description:
        "Capable of towing semi-trucks, buses, and large commercial vehicles",
    },
    {
      title: "Rotator Trucks",
      description:
        "For complex recovery situations and difficult-to-reach locations",
    },
    {
      title: "Landoll Trailers",
      description: "Perfect for hauling construction equipment and machinery",
    },
  ];

  return (
    <ServicePage
      title="Heavy Duty Towing"
      subtitle="Professional heavy-duty towing services for commercial vehicles and equipment"
      description="Our heavy-duty towing service is equipped to handle the most challenging towing situations. With state-of-the-art equipment and certified operators, we ensure safe and efficient transport for all types of large vehicles and equipment."
      additionalDescription="Whether you need emergency towing for a broken-down semi-truck or scheduled transport for heavy machinery, our team has the expertise and equipment to get the job done right."
      equipmentList={equipmentList}
      imageSrc="/assets/service-about-image.svg"
    />
  );
}
