"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  variant?: "blue" | "red" | "green" | "purple";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "blue",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const bgRef = useRef<HTMLSpanElement | null>(null);
  const rippleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    gsap.set(bgRef.current, { x: "-100%" });
  }, []);

  // Consistent Hover Animation (Same Speed In & Out)
  const handleMouseEnter = () => {
    if (!bgRef.current || !btnRef.current) return;
    gsap.to(bgRef.current, { x: "0%", duration: 0.1, ease: "power2.inOut" });
    gsap.to(btnRef.current, { boxShadow: "0px 0px 10px rgba(255,255,255,0.4)", duration: 0.3 });
  };

  const handleMouseLeave = () => {
    if (!bgRef.current || !btnRef.current) return;
    gsap.to(bgRef.current, { x: "100%", duration: 0.1, ease: "power2.inOut" });
    gsap.to(btnRef.current, { boxShadow: "0px 0px 5px rgba(255,255,255,0.2)", duration: 0.3 });
  };

  // Click Effect: Ripple Animation
  const handleClick = (e: React.MouseEvent) => {
    if (!rippleRef.current || !btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.fromTo(
      rippleRef.current,
      { x, y, opacity: 1, scale: 0 },
      { opacity: 0, scale: 4, duration: 0.4, ease: "power2.out" }
    );

    if (onClick) onClick();
  };

  // Theme-based styles
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-200 shadow-md cursor-pointer border";

  const variantStyles = {
    blue: "border-blue-500 bg-blue-500 text-white dark:bg-blue-600 dark:border-blue-600",
    red: "border-red-500 bg-red-500 text-white dark:bg-red-600 dark:border-red-600",
    green: "border-green-500 bg-green-500 text-white dark:bg-green-600 dark:border-green-600",
    purple: "border-purple-500 bg-purple-500 text-white dark:bg-purple-600 dark:border-purple-600",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const bgStyles = {
    blue: "bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800",
    red: "bg-gradient-to-r from-red-400 to-red-600 dark:from-red-600 dark:to-red-800",
    green: "bg-gradient-to-r from-green-400 to-green-600 dark:from-green-600 dark:to-green-800",
    purple: "bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800",
  };

  return (
    <button
      ref={btnRef}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Background Animation Layer */}
      <span
        ref={bgRef}
        className={cn(
          "absolute inset-0 w-full h-full transition-all duration-300",
          bgStyles[variant]
        )}
      ></span>

      {/* Ripple Effect */}
      <span ref={rippleRef} className="absolute w-10 h-10 bg-white opacity-0 rounded-full"></span>

      {/* Static Text (No Animation on Text) */}
      <span className="relative z-10 text-lg font-bold">{children}</span>
    </button>
  );
};

export default Button;
