"use client";

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropDownFill } from "react-icons/ri";
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLang = segments[1] || "en";
  
  const languages = [
    { label: "EN", value: "en", flag: <LiaFlagUsaSolid /> },
    { label: "BN", value: "bn", flag: "🇧🇩" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeLanguage = (lang: string) => {
    if (currentLang !== lang) {
      setIsTransitioning(true);
      setTimeout(() => {
        segments[1] = lang;
        const newPath = segments.join("/");
        router.push(newPath);
        setIsOpen(false);
      }, 200);
    }
  };

  const currentLanguage = languages.find(lang => lang.value === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center gap-2 px-3 py-1 rounded-lg border",
          "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
          "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          isTransitioning && "opacity-70"
        )}
        aria-label="Change language"
      >
        <FaGlobe className="text-gray-600 dark:text-gray-300" />
        <span className="font-medium text-gray-700 dark:text-gray-200">
          {currentLanguage?.label}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500"
        >
          <RiArrowDropDownFill size={30} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 origin-top-right rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-gray-200 dark:border-gray-700"
          >
            <div className="py-1">
              {languages.map(({ label, value, flag }) => (
                <button
                  key={value}
                  onClick={() => changeLanguage(value)}
                  className={clsx(
                    "flex items-center gap-3 w-full px-4 py-2 text-left text-sm",
                    currentLang === value
                      ? "bg-primary/10 text-primary dark:text-primary-300"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                >
                  <span className="text-lg">{flag}</span>
                  <span>{label}</span>
                  {currentLang === value && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}