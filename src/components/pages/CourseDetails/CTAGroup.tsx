"use client"
import CTAButton from "@/components/common/CTAButton";
import React, { FC } from "react";

interface CTAItem {
  name: string;
  template?: "primary" | "secondary";
  resource_data?: string;
}

interface CTAText {
  name: string;
  id?: string;
  value?: string;
}

interface CTAGroupsProps {
  ctaText: CTAText;
  ctaGroup?: CTAItem[];
  lang: "en" | "bn";
}

const CTAGroup: FC<CTAGroupsProps> = ({ ctaText, ctaGroup, lang }) => {
  return (
    <div className="space-y-3">
      {/* Primary CTA */}
      <CTAButton 
        text={ctaText.name} 
        lang={lang} 
        className="w-full py-3" 
      />
      
      {/* Secondary CTAs */}
      {ctaGroup?.map((cta, index) => {
        const buttonType = cta.template === "secondary" ? "secondary" : "primary";
        const linkMatch = cta.resource_data?.match(/link=(.*)/);
        const link = linkMatch ? linkMatch[1] : undefined;

        return (
          <CTAButton
            key={`${cta.name}-${index}`}
            text={cta.name}
            lang={lang}
            variant={buttonType}
            className="w-full py-3"
            onClick={() => link && window.open(link, "_blank")}
          />
        );
      })}
    </div>
  );
};

export default CTAGroup;