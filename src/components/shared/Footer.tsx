"use client";
import React from "react";
import { FaChevronLeft, FaSquareWhatsapp } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { useParams } from "next/navigation";
import { ThemeToggle } from "@/utils/ThemeToggle";
import LanguageSwitcher from "@/utils/LanguageSwitcher";

const Footer = () => {
  const { lang } = useParams();
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 rounded-t-[80px]">
      <div className="container mx-auto px-5 overflow-hidden flex flex-col lg:flex-row justify-center lg:justify-between">
        <div>
          <div className="w-full flex justify-center lg:justify-start">
            <Link href="/" className="block">
              <div className="text-black  text-primary font-serif font-semibold text-3xl flex items-center">
                <span className="">
                  <FaChevronLeft size={30} className="text-primary" />
                </span>
                <span className="-ml-4">
                  <RxSlash size={35} className="text-primary" />
                </span>
                <span className="-ml-2">R</span>
                <span>i</span>
                <span>FAT</span>
                <span>
                  <FaChevronRight size={30} className="text-primary" />
                </span>
              </div>
            </Link>
          </div>
          <ul className="example-2 mt-5">
            <li className="icon-content">
              <a
                data-social="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/developerrifat/"
                target="_blank"
              >
                <div className="filled"></div>
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-linkedin"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  ></path>
                </svg>
              </a>
              <div className="tooltip">LinkedIn</div>
            </li>
            <li className="icon-content">
              <a
                data-social="github"
                aria-label="GitHub"
                href="https://github.com/rifatahmed787"
                target="_blank"
              >
                <div className="filled"></div>
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-github"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  ></path>
                </svg>
              </a>
              <div className="tooltip">GitHub</div>
            </li>
            <li className="icon-content">
              <a
                href="https://web.facebook.com/developerrifatt"
                aria-label="Facebook"
                data-social="facebook"
                target="_blank"
              >
                <div className="filled"></div>
                <FaFacebook />
              </a>
              <div className="tooltip">Facebook</div>
            </li>
            <li className="icon-content">
              <a
                href="https://wa.me/01945518927"
                aria-label="Whatsapp"
                data-social="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="filled"></div>
                <FaSquareWhatsapp />
              </a>
              <div className="tooltip">WhatsApp</div>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 text-sm mt-6 lg:mt-0">
          <ul className="list-none p-0 font-thin flex flex-col gap-2 text-left w-full">
            <li className="py-2 px-3 uppercase font-medium tracking-wide text-white">
              Menu
            </li>
            <li>
              <Link
                href={`/${lang}/home`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/work`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/experience`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/about`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/blog`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>

          <ul className="list-none p-0 font-thin flex flex-col gap-2 text-left w-full">
            <li className="py-2 px-3 uppercase font-medium tracking-wide text-white">
              Creative
            </li>
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1nV6ghao-fGArIVj7HtuvsfDE_uswnYUW"
                download
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <Link
                href={`/${lang}/blog`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/photo-gallery`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Photos
              </Link>
            </li>
          </ul>

          <ul className="list-none p-0 font-thin flex flex-col gap-2 text-left w-full">
            <li className="py-2 px-3 uppercase font-medium tracking-wide text-white">
              Helpful links
            </li>
            <li>
              <Link
                href={`/${lang}/contact`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/privacy-policy`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/guides`}
                className="py-2 px-3 text-gray-500 hover:text-white duration-300"
              >
                Guides
              </Link>
            </li>
          </ul>

          <div className="flex flex-col text-gray-700">
            <div className="py-2 px-3 uppercase font-medium tracking-wide text-white">
              Preferences
            </div>
            <div className="flex flex-col max-w-min py-2 dark:text-gray-300 gap-5">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-6 mt-6 border-t border-gray-800 text-center text-gray-600">
        © {getCurrentYear()}{" "}
        <div className="text-black text-primary font-serif font-semibold text-lg flex items-center">
          <span className="">
            <FaChevronLeft size={18} className="text-primary" />
          </span>
          <span className="-ml-2">
            <RxSlash size={20} className="text-primary" />
          </span>
          <span className="text-xl -ml-1">R</span>
          <span className="text-xl">i</span>
          <span className="text-xl">FAT</span>
          <span>
            <FaChevronRight size={18} className="text-primary" />
          </span>
        </div>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
