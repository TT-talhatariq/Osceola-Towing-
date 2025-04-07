import React from "react";
import type { Metadata } from "next";
import Gallery from "@/features/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Osceola Towing",
  description:
    "View our gallery of professional towing and recovery services. See our equipment and team in action, handling various towing situations.",
  keywords: [
    "towing gallery",
    "towing photos",
    "recovery gallery",
    "towing equipment",
    "towing service images",
    "emergency towing photos",
    "heavy duty towing gallery",
    "towing company photos",
    "vehicle recovery images",
    "towing service portfolio",
  ],
  openGraph: {
    title: "Gallery | Osceola Towing",
    description:
      "View our gallery of professional towing and recovery services. See our equipment and team in action.",
    url: "https://osceolatowing.com/gallery",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Osceola Towing",
    description:
      "View our gallery of professional towing and recovery services.",
  },
  alternates: {
    canonical: "https://osceolatowing.com/gallery",
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
