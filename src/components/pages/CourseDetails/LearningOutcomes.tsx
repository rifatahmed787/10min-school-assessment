import Heading from "@/components/common/Heading";
import { Language } from "@/types/product";
import { PointersSection } from "@/types/section";
import { FC } from "react";

interface LearningOutcomesProps {
  outcomes: PointersSection['values'];
  lang: Language;
}
const LearningOutcomes:FC<LearningOutcomesProps> = ({ outcomes, lang }) => (
  <div className="space-y-4">
    <Heading as="h2" variant="highlight">
      {lang === 'bn' ? 'কোর্স থেকে যা শিখবেন' : 'What you will learn'}
    </Heading>
    <ul className="space-y-2 list-disc pl-5">
      {outcomes?.map((outcome, index) => (
        <li key={index}>{outcome.text}</li>
      ))}
    </ul>
  </div>
);

export default LearningOutcomes