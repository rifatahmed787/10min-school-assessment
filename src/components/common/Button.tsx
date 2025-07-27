"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "blue" | "red" | "green" | "purple";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "blue",
  size = "md",
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-colors";

  // Variant styles
  const variantStyles = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500",
    red: "bg-red-500 hover:bg-red-600 text-white border-red-500",
    green: "bg-green-500 hover:bg-green-600 text-white border-green-500",
    purple: "bg-purple-500 hover:bg-purple-600 text-white border-purple-500",
  };

  // Size styles
  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;