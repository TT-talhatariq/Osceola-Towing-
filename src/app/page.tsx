import Homepage from "@/features/Homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Osceola Towing | 24/7 Professional Towing & Recovery Services",
  description:
    "Leading towing and recovery service in Osceola, Wisconsin. Available 24/7 for heavy-duty towing, emergency assistance, long-distance towing, and accident recovery. Professional team serving Osceola County and beyond.",
  keywords: [
    "Osceola Towing",
    "towing service Wisconsin",
    "24/7 towing Osceola",
    "heavy duty towing",
    "emergency roadside assistance",
    "long distance towing",
    "accident recovery",
    "commercial towing",
    "emergency towing service",
    "truck recovery",
    "equipment transport",
    "roadside assistance",
    "professional towing company",
    "tow truck service",
    "vehicle recovery Wisconsin",
    "Osceola towing company",
  ],
  openGraph: {
    title: "Osceola Towing | 24/7 Professional Towing & Recovery Services",
    description:
      "Your trusted partner for professional towing and recovery services in Osceola, Wisconsin. Available 24/7 for all your towing needs.",
    url: "https://osceolatowing.com",
    siteName: "Osceola Towing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osceola Towing | Professional Towing Services",
    description:
      "24/7 professional towing and recovery services in Osceola, WI. Emergency response available.",
  },
  alternates: {
    canonical: "https://osceolatowing.com",
  },
};

function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}
export default Home;
