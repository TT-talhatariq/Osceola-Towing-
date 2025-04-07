import React from "react";
import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long Distance Towing Services | Osceola Towing",
  description:
    "Professional long distance towing services from Osceola, WI. Safe and reliable transport for all vehicle types across state lines. Competitive rates and real-time tracking available.",
  keywords: [
    "long distance towing",
    "interstate vehicle transport",
    "cross country towing",
    "state to state towing",
    "long haul towing",
    "multi car transport",
    "vehicle shipping service",
    "nationwide towing",
    "long distance car transport",
    "professional auto transport",
    "Osceola towing company",
    "Wisconsin towing service",
    "enclosed car transport",
    "luxury car shipping",
    "cross state towing",
  ],
  openGraph: {
    title: "Long Distance Towing Services | Osceola Towing",
    description:
      "Professional long distance towing and transport services from Osceola, WI. Safe and secure nationwide vehicle transport.",
    url: "https://osceolatowing.com/services/long-distance-towing",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Distance Towing Services | Professional Transport",
    description:
      "Expert long distance towing services from Osceola, WI. Safe and reliable nationwide transport.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/services/long-distance-towing",
  },
};

export default function LongDistanceTowing() {
  const servicesList = [
    {
      title: "Interstate Transport",
      description: "Safe and secure vehicle transport across state lines",
    },
    {
      title: "Multi-Vehicle Transport",
      description: "Efficient transport for multiple vehicles in one trip",
    },
    {
      title: "Enclosed Transport",
      description: "Protected transport for luxury and classic vehicles",
    },
  ];

  return (
    <ServicePage
      title="Long Distance Towing"
      subtitle="Professional long-distance towing services for all vehicle types"
      description="Our long-distance towing service provides reliable and secure transport for your vehicle, whether you're moving across the state or across the country. We specialize in safe, efficient, and timely delivery."
      additionalDescription="With our experienced drivers and well-maintained fleet, we ensure your vehicle arrives at its destination in the same condition it was picked up. We handle everything from standard cars to luxury vehicles."
      servicesList={servicesList}
      imageSrc="/assets/services-3.svg"
    />
  );
}
