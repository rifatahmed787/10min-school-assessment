import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { Language } from "@/types/product";
import { FeaturesSection } from "@/types/section";
import { FC } from "react";

interface CourseFeaturesProps {
  features: FeaturesSection["values"];
  lang: Language;
}
const CourseLayout: FC<CourseFeaturesProps> = ({ features, lang }) => (
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
          className=" bg-gray-50 rounded-lg"
        >
          <Paragraph size="sm" className="font-bold">
            {feature.title}
          </Paragraph>
          <Paragraph size="xs" className="text-gray-600">
            {feature.description}
          </Paragraph>
        </div>
      ))}
    </div>
  </div>
);

export default CourseLayout;
