"use client";
import Heading from "@/components/common/Heading";
import { FC } from "react";
import { AboutSection } from "@/types/section";
import { Language } from "@/types/product";
import { processHtmlContent } from "@/utils/helpers/sanitizeHtmlContent";

interface CourseDescriptionProps {
  details: AboutSection['values'];
  lang: Language;
}

const CourseDescription: FC<CourseDescriptionProps> = ({ details, lang }) => {



  return (
    <div className="space-y-4" lang={lang}>
      <Heading as="h2" variant="highlight">
        {lang === 'bn' ? 'কোর্সের বিবরণ' : 'Course Details'}
      </Heading>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={`${detail.title}-${index}`} className="bg-white dark:bg-background dark:border p-4 rounded-lg shadow-sm">
            {detail.title && (
              <Heading as="h3" className="text-lg font-semibold mb-3 text-primary">
                {detail.title}
              </Heading>
            )}
            <div 
              className="text-gray-700 dark:text-gray-300"
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