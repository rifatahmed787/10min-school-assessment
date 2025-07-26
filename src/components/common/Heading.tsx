"use client"
import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "default" | "muted" | "highlight";
  position?: "left" | "center" | "right";
  bordered?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      as = "h2",
      variant = "default",
      className = "",
      position = "left",
      bordered = false,
      ...props
    },
    ref
  ) => {
    const Tag = as;

    const baseStyles = "font-bold leading-tight";

    const variantStyles = {
      default: "text-gray-900 dark:text-gray-100",
      muted: "text-gray-500 dark:text-gray-400",
      highlight: "text-primary",
    };

    const alignment = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    const sizeStyles = {
      h1: "text-4xl md:text-5xl",
      h2: "text-3xl md:text-4xl",
      h3: "text-2xl md:text-3xl",
      h4: "text-xl md:text-2xl",
      h5: "text-lg md:text-xl",
      h6: "text-base md:text-lg",
    };

    const borderStyles = "relative after:absolute after:content-[''] after:bg-primary after:w-full after:h-1 after:bottom-0 after:left-0 inline-block";

    return (
      <Tag
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          alignment[position],
          sizeStyles[as],
          bordered && borderStyles,
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;