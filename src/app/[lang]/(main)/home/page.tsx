import PageWrapper from "@/components/common/PageWrapper";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Home - 10Minute School",
  openGraph: {
    title: "10Minute School: Learn Anything in 10 Minutes",
    description:
      "Bangladesh's #1 online learning platform with 10,000+ lessons",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "10Minute School Homepage",
      },
    ],
    url: "https://www.10minuteschool.com",
    type: "website",
    locale: "en_US",
    siteName: "10Minute School",
  },
  twitter: {
    card: "summary_large_image",
    title: "10Minute School - Digital Education for Bangladesh",
    description: "Master any subject with bite-sized lessons",
    images: ["/twitter-card.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

const HomePage = () => {
  return <PageWrapper className="py-8 space-y-6">hellow</PageWrapper>;
};

export default HomePage;
