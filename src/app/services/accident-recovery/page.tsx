import React from "react";
import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accident Recovery Services | Osceola Towing",
  description:
    "Professional accident recovery and vehicle removal services in Osceola, WI. Fast response, expert handling, and safe recovery of vehicles from any situation. 24/7 emergency service available.",
  keywords: [
    "accident recovery",
    "vehicle recovery service",
    "crash recovery",
    "emergency vehicle removal",
    "accident scene cleanup",
    "wreck recovery",
    "collision recovery",
    "accident towing service",
    "emergency accident response",
    "professional recovery service",
    "Osceola accident recovery",
    "Wisconsin towing service",
    "vehicle extraction",
    "24/7 accident recovery",
    "insurance approved recovery",
  ],
  openGraph: {
    title: "Accident Recovery Services | Osceola Towing",
    description:
      "Professional accident recovery and vehicle removal services in Osceola, WI. Fast response and expert handling for any situation.",
    url: "https://osceolatowing.com/services/accident-recovery",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accident Recovery Services | Professional Recovery",
    description:
      "Expert accident recovery services in Osceola, WI. Fast response and professional handling.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/services/accident-recovery",
  },
};

export default function AccidentRecovery() {
  const servicesList = [
    {
      title: "Rapid Response",
      description:
        "24/7 emergency response to accident scenes with priority dispatch",
    },
    {
      title: "Vehicle Recovery",
      description:
        "Expert extraction and recovery of vehicles from any situation",
    },
    {
      title: "Scene Management",
      description:
        "Professional handling of accident scenes and debris cleanup",
    },
  ];

  return (
    <ServicePage
      title="Accident Recovery"
      subtitle="Professional accident recovery and vehicle removal services"
      description="Our accident recovery team provides fast, professional response to accident scenes. We have the expertise and equipment to handle any recovery situation, from minor incidents to major accidents."
      additionalDescription="With our state-of-the-art recovery equipment and trained professionals, we ensure safe and efficient removal of vehicles while minimizing additional damage. We work closely with emergency services and insurance companies."
      servicesList={servicesList}
      imageSrc="/assets/new-images/DJI_0484.jpg"
    />
  );
}
