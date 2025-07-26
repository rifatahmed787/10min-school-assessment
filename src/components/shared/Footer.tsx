"use client"
import { content } from '@/utils/constant/footerContent';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Footer = () => {
  const { lang } = useParams() as { lang: 'en' | 'bn' };

  const t = content[lang] || content.en;

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and App Download */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">10 MINUTE SCHOOL</h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-center">
              <p className="text-sm mb-2">{t.downloadApp}</p>
              <div className="flex flex-col items-center">
                <span className="text-xs mb-1">{t.getOnGooglePlay}</span>
                <Link href="#">
                  <Image
                    src="/google-play-badge.png" 
                    alt="Google Play" 
                    className="h-10 w-auto"
                    width={800}
                    height={800}
                  />
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <span className="text-xs mb-1">{t.downloadOnAppStore}</span>
                <Link href="#">
                  <Image 
                    src="/app-store-badge.png" 
                    alt="App Store" 
                    className="h-10 w-auto"
                    width={800}
                    height={800}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-300">{t.career}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.joinTeacher}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.joinAffiliate}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.privacy}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.refund}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.terms}</Link></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.others}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-300">{t.blog}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.bookStore}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.freeNotes}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.jobCourses}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.verifyCert}</Link></li>
              <li><Link href="#" className="hover:text-blue-300">{t.freeDownload}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li>{t.callUs}</li>
              <li>{t.whatsapp}</li>
              <li>{t.outsideBD}</li>
              <li>{t.email}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;