import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { Language } from "@/types/product";
import { InstructorsSection } from "@/types/section";
import { FC } from "react";

interface CourseInstructorsProps {
  instructors: InstructorsSection["values"];
  lang: Language;
}

const CourseInstructors: FC<CourseInstructorsProps> = ({
  instructors,
  lang,
}) => {
  return (
    <div className="space-y-4">
      <Heading as="h2" variant="highlight">
        {lang === "bn" ? "প্রশিক্ষকগণ" : "Instructors"}
      </Heading>
      <div className="grid grid-cols-2 gap-4">
        {instructors?.map((instructor, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-background"></div>
            <div>
              <Paragraph size="sm" className="font-bold">
                {instructor?.name}
              </Paragraph>
              <Paragraph size="xs" className="text-gray-600 dark:text-gray-300">
                {instructor?.title}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInstructors;
