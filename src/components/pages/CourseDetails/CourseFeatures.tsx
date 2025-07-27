import Heading from "@/components/common/Heading";
import { FC } from "react";



interface FeatureExplanation {
  title: string;
  description: string;
  icon?: string;
}

interface CourseFeaturesProps {
  features: FeatureExplanation[];
  lang: "en" | "bn";
}

const CourseFeatures: FC<CourseFeaturesProps> = ({ features, lang }) => {
  return (
    <div className="space-y-4" lang={lang}>
      <Heading as="h2" variant="highlight">
        {lang === 'bn' ? 'কোর্সের বিশেষ সুবিধা' : 'Course Exclusive Features'}
      </Heading>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={`${feature.title}-${index}`} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;