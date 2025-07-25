"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { nav_links } from "./NavLinks";
import Link from "next/link";
import AnimatedButton from "../common/AnimatedButton";
import gsap from "gsap";

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useParams();
  const [active, setActive] = useState(nav_links[0].href);

  const menuRef = useRef<HTMLUListElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (menuRef.current) {
      if (isVisible) {
        // Show menu
        tl.set(menuRef.current, { display: "flex" })
          .fromTo(
            menuRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.5 }
          )
          .fromTo(
            menuItemsRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.2"
          );
      } else {
        // Hide menu
        tl.to(menuItemsRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.in",
        })
          .to(
            menuRef.current,
            { opacity: 0, y: -20, duration: 0.5 },
            "-=0.2"
          )
          .set(menuRef.current, { display: "none" });
      }
    }
  }, [isVisible]);

  return (
    <nav className="h-16 w-full fixed top-0 left-0 right-0 z-50 border-b border-[#2B3E6E] bg-[#011627]">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        {/* Logo */}
        <div className="text-white font-serif font-semibold text-3xl flex items-center">
          <span>
            <FaChevronLeft size={30} />
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

        {/* Toggle */}
        <div className="lg:hidden">
          <input
            type="checkbox"
            id="checkbox"
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
            className="hidden"
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>

        {/* Menu */}
        <ul
          ref={menuRef}
          className="absolute left-0 top-16 z-10 hidden h-screen w-full flex-col bg-[#011627] md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[65%]"
        >
          {nav_links.map((link, index) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              ref={(el: HTMLAnchorElement | null) => {
                menuItemsRef.current[index] = el;
              }}
              
              className={`flex items-center gap-2 py-3 border-b border-[#2B3E6E] px-4 text-2xl md:border-y-0 md:border-e md:px-8 md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0 ${
                active === link.href
                  ? "text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => {
                setActive(link.href);
                setIsVisible(false);
              }}
            >
              <span>{link.icon && <link.icon className="w-5 h-5" />}</span>
              <span className="pt-1">
                {lang === "en" ? link.label.en : link.label.bn}
              </span>
            </Link>
          ))}

          {/* Contact button */}
          <div className="mt-3 mx-auto">
            <Link
              href={`/${lang}/contact`}
              onClick={() => setIsVisible(false)}
            >
              <AnimatedButton>Contact Me</AnimatedButton>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
