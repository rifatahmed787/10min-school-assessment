"use client";

import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useRouter, usePathname, useParams } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "@/utils/ThemeToggle";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import { appConfiguration } from "@/utils/constant/appConfiguration";
import { publicNavigationLinks } from "@/utils/constant/navigationLinks";

export default function PublicHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { lang } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery) {
      router.push(`/${lang}/products?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#F1F1F1] dark:bg-background px-4 w-full border-b">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar - Search and Login */}
        <div className="flex items-center justify-between py-2">
          {/* Logo - Hidden on desktop (will show in nav center) */}
          <div className="lg:hidden">
            <Link href={`/${lang}`}>
              <Image
                src={appConfiguration.logo}
                alt="10minute-school-Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div ref={wrapperRef} className="flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Search courses..."
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <IoSearch className="text-gray-500 text-xl" />
              </button>
            </form>
          </div>

          {/* Login/Register */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              href={`/${lang}/login`}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
              <FaRegUser />
              <span>Login</span>
            </Link>
          </div>
        </div>

        {/* Main Navigation - Centered */}
        <nav className="hidden lg:flex justify-center py-3">
          <ul className="flex items-center gap-8">
            {publicNavigationLinks.map((link) => (
              <li key={link.key} className="relative">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.key)}
                      className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                    >
                      {link.label[lang as keyof typeof link.label] ||
                        link.label.en}
                      <motion.span
                        animate={{
                          rotate: activeDropdown === link.key ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoMdArrowDropdown />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.key && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 py-1"
                        >
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.key}>
                              <Link
                                href={`/${lang}${subLink.href}`}
                                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subLink.label[
                                  lang as keyof typeof subLink.label
                                ] || subLink.label.en}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={`/${lang}${link.href}`}
                    className={`font-medium ${
                      pathname === `/${lang}${link.href}`
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-200 hover:text-primary"
                    } transition-colors`}
                  >
                    {link.label[lang as keyof typeof link.label] ||
                      link.label.en}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center py-2">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 text-gray-700 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50"
              >
                <ul className="py-2">
                  {publicNavigationLinks.map((link) => (
                    <li key={link.key}>
                      {link.subLinks ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.key)}
                            className="w-full flex justify-between items-center px-4 py-3 text-left"
                          >
                            <span>
                              {link.label[lang as keyof typeof link.label] ||
                                link.label.en}
                            </span>
                            <motion.span
                              animate={{
                                rotate: activeDropdown === link.key ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <IoMdArrowDropdown />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === link.key && (
                              <motion.ul
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-gray-50 dark:bg-gray-700"
                              >
                                {link.subLinks.map((subLink) => (
                                  <li key={subLink.key}>
                                    <Link
                                      href={`/${lang}${subLink.href}`}
                                      className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                      onClick={() => setIsDropdownOpen(false)}
                                    >
                                      {subLink.label[
                                        lang as keyof typeof subLink.label
                                      ] || subLink.label.en}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={`/${lang}${link.href}`}
                          className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {link.label[lang as keyof typeof link.label] ||
                            link.label.en}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/${lang}/login`}
                      className="block px-4 py-3 font-medium text-primary"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
