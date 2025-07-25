"use client";

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");

  const currentLang = segments[1] || "en";
  const languages = [
    { label: "English", value: "en" },
    { label: "বাংলা", value: "bn" },
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeLanguage = (lang: string) => {
    if (currentLang !== lang) {
      setIsTransitioning(true);
      setTimeout(() => {
        segments[1] = lang;
        const newPath = segments.join("/");
        router.push(newPath);
      }, 200); // Small delay before switching
    }
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center p-1 rounded-full bg-muted shadow-inner border w-fit transition-opacity duration-300",
        isTransitioning && "opacity-50"
      )}
    >
      {languages.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => changeLanguage(value)}
          className={clsx(
            "px-4 py-1 rounded-full transition-all text-sm font-medium",
            currentLang === value
              ? "bg-primary text-white shadow"
              : "text-muted-foreground hover:bg-muted"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
