import React from "react";
import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Roadside Assistance | Osceola Towing",
  description:
    "24/7 emergency roadside assistance in Osceola, WI. Fast response for battery jump-starts, tire changes, fuel delivery, and lockout services. Professional team ready to help.",
  keywords: [
    "emergency roadside assistance",
    "roadside service Osceola",
    "24/7 towing service",
    "battery jump start",
    "tire change service",
    "fuel delivery service",
    "car lockout service",
    "emergency car service",
    "mobile mechanic",
    "roadside help Wisconsin",
    "emergency towing",
    "car breakdown service",
    "emergency vehicle repair",
    "Osceola emergency service",
    "fast response towing",
  ],
  openGraph: {
    title: "Emergency Roadside Assistance | Osceola Towing",
    description:
      "24/7 emergency roadside assistance in Osceola, WI. Professional team ready to help with any vehicle emergency.",
    url: "https://osceolatowing.com/services/emergency-assistance",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Roadside Assistance | 24/7 Service",
    description:
      "Fast, reliable emergency roadside assistance in Osceola, WI. Available 24/7.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/services/emergency-assistance",
  },
};

export default function EmergencyAssistance() {
  const servicesList = [
    {
      title: "Battery Services",
      description:
        "Jump-starts and battery testing with professional equipment",
    },
    {
      title: "Tire Changes",
      description: "Fast tire replacement and repair services",
    },
    {
      title: "Fuel Solutions",
      description: "Emergency fuel delivery and fuel system diagnosis",
    },
  ];

  return (
    <ServicePage
      title="Emergency Assistance"
      subtitle="24/7 emergency roadside assistance when you need it most"
      description="When you're stranded on the road, every minute counts. Our emergency response team is available 24/7, ready to provide quick and professional assistance wherever you are."
      additionalDescription="With an average response time of 30 minutes or less, our fully equipped service vehicles and trained technicians ensure you get back on the road safely and quickly."
      servicesList={servicesList}
      imageSrc="/assets/new-images/DJI_0488.jpg"
    />
  );
}
