"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { nav_links } from "./NavLinks";
import { useParams, usePathname } from "next/navigation";
import gsap from "gsap";
import AnimatedButton from "../common/AnimatedButton";
import { FaChevronLeft } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa6";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang } = useParams();
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!gradientRef.current || !navContainerRef.current) return;

    const isNavLink = nav_links.some(
      (link) => `/${lang}${link.href}` === pathname
    );

    if (isNavLink) {
      const activeLink = document.querySelector(`a[href='${pathname}']`);
      if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const containerRect = navContainerRef.current.getBoundingClientRect();

        const offset = linkRect.left - containerRect.left;
        const width = linkRect.width + 16;

        gsap.to(gradientRef.current, {
          x: offset,
          width: width,
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut",
        });
      }
    } else {
      // Not a nav link → hide the background
      gsap.to(gradientRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [pathname, lang]);

  // Animate border on scroll
  useEffect(() => {
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        opacity: isScrolled ? 0 : 1,
        scale: isScrolled ? 0.95 : 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [isScrolled]);

  return (
    <>
      <nav
        className={`fixed hidden lg:block top-0 left-0 right-0 z-50 py-2 transition-all ${
          isScrolled
            ? "shadow-sm backdrop-blur-md bg-white/10 duration-300"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 container mx-auto">
          {/* Left - Logo */}
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

          {/* Center - Navigation Links */}
          <div
            ref={navContainerRef}
            className="relative flex items-center gap-4 px-4 py-1.5 rounded-full"
          >
            {/* Smoothly animated border */}
            <div
              ref={borderRef}
              className="absolute inset-0 border border-primary rounded-full transition-all duration-500"
            ></div>

            {/* Gradient background that smoothly moves */}
            <div
              ref={gradientRef}
              className="absolute text-white -left-[9px] top-auto bottom-auto h-8 bg-gradient-to-r from-[#5e1717] to-[#ff3333] rounded-full transition-all duration-300 pointer-events-none opacity-0"
            />

            {nav_links.map((link) => {
              const fullHref = `/${lang}${link.href}`;
              const isActive = pathname === fullHref;

              return (
                <Link
                  key={link.href}
                  href={fullHref}
                  className={`relative  px-3 text-lg flex items-center gap-1 ${
                    isActive ? "text-white duration-700" : "text-gray-700 dark:text-gray-300 scale-100 hover:scale-105 duration-500"
                  }`}
                >
                  <span>{link.icon && <link.icon className="w-5 h-5" />}</span>
                  <span className="pt-1">
                    {lang === "en" ? link.label.en : link.label.bn}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right - Contact Button */}
          <Link href={`/${lang}/contact`}>
            <AnimatedButton>Contact Me</AnimatedButton>
          </Link>
        </div>
      </nav>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Navbar;

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { nav_links } from "./NavLinks";
// import { useParams, usePathname } from "next/navigation";
// import gsap from "gsap";
// import AnimatedButton from "../common/AnimatedButton";
// import LanguageSwitcher from "@/utils/LanguageSwitcher";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { lang } = useParams();
//   const pathname = usePathname();
//   const gradientRef = useRef<HTMLDivElement | null>(null);
//   const navContainerRef = useRef<HTMLDivElement | null>(null);
//   const [activeLink, setActiveLink] = useState<string>(pathname);
//   const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const links = document.querySelectorAll(".nav-item");
//     const gradient = gradientRef.current;
//     if (!gradient || links.length === 0) return;

//     let lastHoveredElement: HTMLElement | null = null;

//     const moveGradient = (target: HTMLElement, instant = false) => {
//       const rect = target.getBoundingClientRect();
//       const containerRect = navContainerRef.current!.getBoundingClientRect();

//       const x = rect.left - containerRect.left;
//       const y = rect.top - containerRect.top;

//       gsap.to(gradient, {
//         width: rect.width,
//         height: rect.height,
//         x,
//         y,
//         duration: instant ? 0 : 0.3,
//         ease: "power2.out",
//       });

//       links.forEach((link) => {
//         if (link === target) {
//           link.classList.add("text-white");
//         } else {
//           link.classList.remove("text-white");
//           link.classList.add("text-gray-300");
//         }
//       });
//     };

//     const handleMouseEnter = (e: Event) => {
//       lastHoveredElement = e.currentTarget as HTMLElement;
//       moveGradient(lastHoveredElement);
//     };

//     const handleMouseLeave = () => {
//       const activeElement = document.querySelector(`.nav-item[href="${activeLink}"]`);
//       if (activeElement) moveGradient(activeElement as HTMLElement);
//     };

//     const handleClick = (e: MouseEvent) => {

//       const clickedElement = e.currentTarget as HTMLElement;

//       setActiveLink(clickedElement.getAttribute("href")!);

//       // Store the click position so the gradient stays in place
//       const rect = clickedElement.getBoundingClientRect();
//       const containerRect = navContainerRef.current!.getBoundingClientRect();

//       setClickPosition({
//         x: rect.left - containerRect.left,
//         y: rect.top - containerRect.top,
//       });

//       moveGradient(clickedElement, true);
//     };

//     links.forEach((link) => {
//       link.addEventListener("mouseenter", handleMouseEnter);
//       link.addEventListener("mouseleave", handleMouseLeave);
//       link.addEventListener("click", handleClick as EventListener);
//     });

//     // Ensure gradient is correctly placed at the start
//     const activeElement = document.querySelector(`.nav-item[href="${activeLink}"]`);
//     if (activeElement) {
//       moveGradient(activeElement as HTMLElement, true);
//     }

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("mouseenter", handleMouseEnter);
//         link.removeEventListener("mouseleave", handleMouseLeave);
//         link.removeEventListener("click", handleClick as EventListener);
//       });
//     };
//   }, [activeLink]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all ${
//         isScrolled ? "shadow-sm backdrop-blur-md bg-white/10" : "bg-transparent"
//       }`}
//     >
//       <div className="flex items-center justify-between px-5 max-w-7xl mx-auto">
//         {/* Left - Logo */}
//         <div className="text-black dark:bg-gray-300 font-primary font-semibold text-lg">
//           RIFAT
//         </div>

//         {/* Center - Navigation Links */}
//         <div
//           ref={navContainerRef}
//           className={`relative flex items-center gap-5 px-6 py-1  ${
//             isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent border border-gray-300  transition-all rounded-full"
//           }`}
//         >
//           {/* Gradient background that smoothly moves */}
//           <div
//             ref={gradientRef}
//             className="absolute -top-[1px] left-0 w-0 h-0 bg-gradient-to-r from-[#5e1717] to-[#ff3333] rounded-md transition-all duration-300 pointer-events-none"
//             style={{
//               transform: clickPosition
//                 ? `translate(${clickPosition.x}px, ${clickPosition.y}px)`
//                 : undefined,
//             }}
//           ></div>

//           {nav_links.map((link) => (
//             <Link
//               key={link.href}
//               href={`/${lang}/${link.href}`}
//               className={`relative px-3 py-1  rounded-md transition nav-item ${
//                 pathname === link.href ? "text-white" : "text-gray-700"
//               }`}
//             >
//               <span>{lang === "en" ? link.label.en : link.label.bn}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Right - Contact Button */}
//         <Link href={`/${lang}/contact`}>
//           <AnimatedButton>Contact Me</AnimatedButton>
//         </Link>
//         <LanguageSwitcher/>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
