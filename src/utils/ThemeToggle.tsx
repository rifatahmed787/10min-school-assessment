import { useTheme } from "@/app/[lang]/lib/ThemeProvider";
import { useState } from "react";
import clsx from "clsx";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<Theme>((theme as Theme) || "light");

  const handleClick = (value: Theme) => {
    setTheme(value);
    setActive(value);
  };

  return (
    <div className="relative inline-flex items-center p-1 rounded-full bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md border border-gray-200 dark:border-gray-700 w-fit">
      {/* Sun/Moon Icons */}
      <button
        onClick={() => handleClick("light")}
        className={clsx(
          "px-3 py-2 rounded-full transition-all duration-300 flex items-center justify-center",
          active === "light"
            ? "bg-amber-100 text-amber-600 shadow-sm"
            : "text-gray-500 hover:text-amber-500 dark:hover:text-amber-400"
        )}
        aria-label="Light mode"
      >
        <IoSunnyOutline className="text-lg" />
      </button>
      
      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1" />
      
      <button
        onClick={() => handleClick("dark")}
        className={clsx(
          "px-3 py-2 rounded-full transition-all duration-300 flex items-center justify-center",
          active === "dark"
            ? "bg-indigo-900 text-indigo-200 shadow-sm"
            : "text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300"
        )}
        aria-label="Dark mode"
      >
        <IoMoonOutline className="text-lg" />
      </button>
      
      {/* Active indicator (bookmark shaped) */}
      <div
        className={clsx(
          "absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent transition-all duration-300",
          active === "light"
            ? "border-b-amber-200"
            : "border-b-indigo-800"
        )}
      />
    </div>
  );
};