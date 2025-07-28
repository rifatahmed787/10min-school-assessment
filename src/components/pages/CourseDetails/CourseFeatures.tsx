import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { Language } from "@/types/product";
import { FeaturesExplanationsSection } from "@/types/section";
import { FC } from "react";


interface CourseFeaturesProps {
  features: FeaturesExplanationsSection['values'];
  lang: Language;
}

const CourseFeatures: FC<CourseFeaturesProps> = ({ features, lang }) => {
  return (
    <div className="space-y-4" lang={lang}>
      <Heading as="h2" variant="highlight">
        {lang === 'bn' ? 'কোর্সের বিশেষ সুবিধা' : 'Course Exclusive Features'}
      </Heading>
      <div className="space-y-3 p-4">
        {features.map((feature, index) => (
          <div key={`${feature.title}-${index}`} className=" bg-gray-50 dark:bg-background dark:border rounded-lg">
            <Paragraph size="sm" className="font-bold">{feature.title}</Paragraph>
            <Paragraph size="xs" className="text-gray-600">{feature.description}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;