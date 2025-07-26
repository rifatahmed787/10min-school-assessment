import PublicHeader from "@/components/shared/PublicHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.10minuteschool.com'),
  title: {
    default: "10Minute School - Bangladesh's Largest Online Learning Platform",
    template: "%s | 10Minute School" 
  },
  description: "Learn anything in 10 minutes! 10,000+ video lessons, live classes, and quizzes for students (Class 6 to University) and professionals in Bangladesh.",
  keywords: ["online education Bangladesh", "SSC/HSC preparation", "online classes", "skill development courses"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  verification: {
    google: 'your-google-verification-code',
  }
};
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader/>
      <div className="min-h-screen">{children}</div>
    </>
  );
}

