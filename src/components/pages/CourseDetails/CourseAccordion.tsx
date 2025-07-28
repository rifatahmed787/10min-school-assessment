import Heading from "@/components/common/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Language } from "@/types/product";
import { AccordionSection } from "@/types/section";
import React, { FC } from "react";

interface CourseAccordionProps {
  accordion: AccordionSection; // Changed from AccordionSection['values'] to AccordionSection
  lang: Language;
}

const CourseAccordion: FC<CourseAccordionProps> = ({ accordion, lang }) => {
  // Localization fallbacks
  const localizedStrings = {
    en: {
      expand: "Expand",
      collapse: "Collapse",
    },
    bn: {
      expand: "প্রসারিত করুন",
      collapse: "সঙ্কুচিত করুন",
    },
  };

  return (
    <div className="w-full" lang={lang}>
      {accordion?.name && (
        <Heading as="h2" variant="highlight">
          {accordion.name}
        </Heading>
      )}
      <Accordion type="single" collapsible className="w-full">
        {accordion?.values?.map((item, index) => (
          <AccordionItem key={`${item.id}`} value={`item-${index}`}>
            <AccordionTrigger
              className="text-xl font-semibold hover:no-underline"
              aria-label={localizedStrings[lang].expand}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <div
                className="prose prose-sm max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:mb-1 [&_p]:mb-2"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseAccordion;
