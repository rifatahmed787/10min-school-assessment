"use client";
import Heading from "@/components/common/Heading";
import { FC } from "react";
import DOMPurify from "dompurify";
import { Language } from "@/types/product";

interface CourseShortDescriptionProps {
  details: string;
  lang: Language;
}

const CourseShortDescription: FC<CourseShortDescriptionProps> = ({
  details,
  lang,
}) => {
  const processHtmlContent = (html: string) => {
    if (!html) return "";

    const sanitized = DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
    });

    const withParagraphs = sanitized
      .split(/\n+/)
      .map((line) => {
        const trimmed = line.trim();

        const isHtmlTag =
          /^<\/?(h[1-4]|p|ul|ol|li|strong|em|b|i|img|div|br)[\s>]/i.test(
            trimmed
          );
        return trimmed && !isHtmlTag ? `<p>${trimmed}</p>` : trimmed;
      })
      .join("");

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
    <div className="space-y-2" lang={lang}>
      <Heading as="h2" variant="highlight">
        {lang === "bn" ? "কোর্সের সংক্ষিপ্ত বিবরণ" : "Course Short Description"}
      </Heading>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: processHtmlContent(details),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseShortDescription;
