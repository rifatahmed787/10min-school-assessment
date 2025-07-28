import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { Language } from "@/types/product";
import { FeaturesSection } from "@/types/section";
import { FC } from "react";

interface CourseFeaturesProps {
  features: FeaturesSection["values"];
  lang: Language;
}
const CourseLayout: FC<CourseFeaturesProps> = ({ features, lang }) => {
  return (
    <div className="space-y-2">
      <Heading as="h2" variant="highlight">
        {lang === "bn"
          ? "কোর্সটি কিভাবে সাজানো হয়েছে"
          : "How the course is laid out"}
      </Heading>
      <div className="space-y-3 p-4">
        {features.map((feature, index) => (
          <div
            key={`${feature.title}-${index}`}
            className=" bg-gray-50 dark:bg-background dark:border rounded-lg"
          >
            <Paragraph size="sm" className="font-bold dark:px-2">
              {feature.title}
            </Paragraph>
            <Paragraph size="xs" className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLayout;
