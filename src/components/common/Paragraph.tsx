import { cn } from "@/lib/utils";
import React from "react";
interface ParagraphProps {
  children: React.ReactNode;
  variant?: "default" | "muted" | "highlight";
  size?: "sm" | "md" | "lg";
  className?: string;
  position?:"left" | "right" | "center"
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  position="left"
}) => {
  const baseStyles = "leading-relaxed text-gray-900 dark:text-gray-100";

  const variantStyles = {
    default: "text-gray-800 dark:text-gray-200",
    muted: "text-gray-500 dark:text-gray-400",
    highlight: "text-primary font-semibold",
  };

  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const sizeStyles = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
  };

  return (
    <p className={cn(baseStyles, variantStyles[variant], alignment[position], sizeStyles[size], className)}>
      {children}
    </p>
  );
};

export default Paragraph;
