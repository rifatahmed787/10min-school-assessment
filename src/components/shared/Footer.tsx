"use client";
import { appConfiguration } from "@/utils/constant/appConfiguration";
import { content } from "@/utils/constant/footerContent";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import googlePlay from "../../assets/googleplay.jpg"
import appStore from "../../assets/appstore.jpg"

const Footer = () => {
  const { lang } = useParams() as { lang: "en" | "bn" };
  const t = content[lang] || content.en;

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start gap-6">
            <Link href="/" className="mb-2">
              <Image
                src={appConfiguration.logo}
                alt="10 Minute School Logo"
                className="h-10 w-auto"
                width={800}
                height={800}
                priority
              />
            </Link>

            <div className="w-full">
              <p className="text-sm mb-3 text-center sm:text-left">{t.downloadApp}</p>
              <div className="flex  gap-3 justify-center sm:justify-start">
                <Link href="#" className="flex flex-col items-center sm:items-start">
                  <span className="text-xs mb-1">{t.getOnGooglePlay}</span>
                  <Image
                    src={googlePlay}
                    alt="Google Play"
                    className="h-10 w-auto min-w-[120px]"
                    width={135}
                    height={40}
                  />
                </Link>
                <Link href="#" className="flex flex-col items-center sm:items-start">
                  <span className="text-xs mb-1">{t.downloadOnAppStore}</span>
                  <Image
                    src={appStore}
                    alt="App Store"
                    className="h-10 w-auto min-w-[120px]"
                    width={135}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              {[
                t.career,
                t.joinTeacher,
                t.joinAffiliate,
                t.privacy,
                t.refund,
                t.terms
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-blue-300 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.others}</h3>
            <ul className="space-y-2">
              {[
                t.blog,
                t.bookStore,
                t.freeNotes,
                t.jobCourses,
                t.verifyCert,
                t.freeDownload
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-blue-300 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Hidden on mobile, shown from tablet up */}
          <div className="hidden sm:block">
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t.callUs}</li>
              <li>{t.whatsapp}</li>
              <li>{t.outsideBD}</li>
              <li>{t.email}</li>
            </ul>
          </div>
        </div>

        {/* Mobile Contact Info - Only shown on mobile */}
        <div className="sm:hidden mb-6">
          <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
          <ul className="space-y-2 text-sm">
            <li>{t.callUs}</li>
            <li>{t.whatsapp}</li>
            <li>{t.outsideBD}</li>
            <li>{t.email}</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-400 pt-4 border-t border-gray-800">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;