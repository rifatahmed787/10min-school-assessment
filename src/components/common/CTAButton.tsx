"use client"
import React from "react";

interface CTAButtonProps {
  text?: string;
  lang: "en" | "bn";
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  lang = "en", 
  className = "", 
  variant = "primary",
  onClick,
  type = "button",
  disabled = false
}) => {
  // Default texts for different languages
  const defaultTexts = {
    en: "Enroll Now",
    bn: "এনরোল করুন"
  };

  // Determine the button text
  const buttonText = text || defaultTexts[lang];

  // Base classes
  const baseClasses = "rounded-md font-medium transition-colors duration-200 w-full";

  // Variant classes
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-white hover:bg-gray-50 text-primary border border-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={buttonText}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default CTAButton;