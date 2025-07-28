"use client";
import Heading from "@/components/common/Heading";
import { FC } from "react";
import { Language } from "@/types/product";
import { processHtmlContent } from "@/utils/helpers/sanitizeHtmlContent";

interface CourseShortDescriptionProps {
  details: string;
  lang: Language;
}

const CourseShortDescription: FC<CourseShortDescriptionProps> = ({
  details,
  lang,
}) => {

  return (
    <div className="space-y-2" lang={lang}>
      <Heading as="h2" variant="highlight">
        {lang === "bn" ? "কোর্সের সংক্ষিপ্ত বিবরণ" : "Course Short Description"}
      </Heading>
      <div className="space-y-4">
        <div className="bg-white dark:bg-background dark:border p-4 rounded-lg shadow-sm">
          <div
            className="text-gray-700 dark:text-gray-300"
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
