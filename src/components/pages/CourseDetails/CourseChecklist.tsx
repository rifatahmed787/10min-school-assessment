import React from "react";
import Image from "next/image";
import Heading from "@/components/common/Heading";

interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color?: string;
  has_visibility_in_recommendation?: boolean;
  list_page_visibility?: boolean;
}

interface CourseChecklistProps {
  items: ChecklistItem[];
  lang: "en" | "bn";
}

const CourseChecklist: React.FC<CourseChecklistProps> = ({ items, lang }) => {
  return (
    <div className="space-y-4 p-6 bg-white dark:bg-background dark:border rounded-lg shadow-md mt-5">
      <Heading as="h2" variant="highlight">
        {lang === "bn" ? "কোর্সের বৈশিষ্ট্য" : "Course Features"}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              <Image
                src={item.icon}
                alt={item.text}
                width={32}
                height={32}
                quality={80}
                loading="lazy"
                className="object-contain dark:bg-white"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseChecklist;
