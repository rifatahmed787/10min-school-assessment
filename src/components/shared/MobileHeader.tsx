"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/utils/ThemeToggle";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import { appConfiguration } from "@/utils/constant/appConfiguration";
import { publicNavigationLinks } from "@/utils/constant/navigationLinks";

const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/products?search=${searchQuery}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm lg:hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
          <FaBars size={20} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={appConfiguration.logo}
            alt="10minute-school-Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Search Button */}
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="text-gray-700 dark:text-gray-300"
        >
          <FaSearch size={20} />
        </button>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 shadow-md z-50"
          >
            <div className="flex items-center">
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="mr-3 text-gray-700 dark:text-gray-300"
              >
                <FaTimes size={18} />
              </button>
              <form onSubmit={handleSearchSubmit} className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Search courses..."
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-80 bg-white dark:bg-gray-900 shadow-lg z-[100] overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Image
                    src={appConfiguration.logo}
                    alt="10minute-school-Logo"
                    width={32}
                    height={32}
                  />
                  <span className="font-semibold">10 Minute School</span>
                </div>
                <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4">
                {/* Navigation Links */}
                <ul className="space-y-2">
                  {publicNavigationLinks.map((link) => (
                    <li key={link.key} className="border-b border-gray-100 dark:border-gray-800">
                      {link.subLinks ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.key)}
                            className="w-full flex justify-between items-center py-3 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                          >
                            <span>{link.label.en}</span>
                            <motion.span
                              animate={{ rotate: activeDropdown === link.key ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <IoMdArrowDropdown />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === link.key && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-6 space-y-1"
                              >
                                {link.subLinks.map((subLink) => (
                                  <li key={subLink.key}>
                                    <Link
                                      href={subLink.href}
                                      className="block py-2 px-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                                      onClick={toggleMenu}
                                    >
                                      {subLink.label.en}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="block py-3 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                          onClick={toggleMenu}
                        >
                          {link.label.en}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Account Section */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  
                  <Link
                    href="/login"
                    className="mt-4 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition w-full"
                    onClick={toggleMenu}
                  >
                    <FaRegUser />
                    <span>Login / Register</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[99]"
              onClick={toggleMenu}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;