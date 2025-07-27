"use client";
import Heading from "@/components/common/Heading";
import { FC } from "react";
import DOMPurify from "dompurify";
import { AboutSection } from "@/types/section";
import { Language } from "@/types/product";

interface CourseDescriptionProps {
  details: AboutSection['values'];
  lang: Language;
}

const CourseDescription: FC<CourseDescriptionProps> = ({ details, lang }) => {
  const processHtmlContent = (html: string) => {
  if (!html) return "";

  // Step 1: Sanitize the HTML to prevent XSS
  const sanitized = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

  // Step 2: Split by newline and wrap non-tag lines in <p>
  const withParagraphs = sanitized
    .split(/\n+/)
    .map((line) => {
      const trimmed = line.trim();
      // If already a valid tag (e.g., <p>, <h1>, <ul>, etc.), leave it
      const isHtmlTag = /^<\/?(h[1-4]|p|ul|ol|li|strong|em|b|i|img|div|br)[\s>]/i.test(trimmed);
      return trimmed && !isHtmlTag ? `<p>${trimmed}</p>` : trimmed;
    })
    .join("");

  // Step 3: Add Tailwind styling to specific tags
  return withParagraphs
    .replace(/<h1>/g, '<h1 class="text-2xl font-bold mb-2">')
    .replace(/<h2>/g, '<h2 class="text-xl font-semibold mb-2">')
    .replace(/<h3>/g, '<h3 class="text-lg font-semibold mb-2">')
    .replace(/<h4>/g, '<h4 class="text-base font-semibold mb-2">')
    .replace(/<p>/g, '<p class="mb-4 text-base leading-relaxed">')
    .replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">')
    .replace(/<li>/g, '<li class="mb-1">');
};


  return (
    <div className="space-y-4" lang={lang}>
      <Heading as="h2" variant="highlight">
        {lang === 'bn' ? 'কোর্সের বিবরণ' : 'Course Details'}
      </Heading>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={`${detail.title}-${index}`} className="bg-white p-4 rounded-lg shadow-sm">
            {detail.title && (
              <Heading as="h3" className="text-lg font-semibold mb-3 text-primary">
                {detail.title}
              </Heading>
            )}
            <div 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ 
                __html: processHtmlContent(detail.description) 
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDescription;