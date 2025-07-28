import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import React, { FC } from "react";

interface TrailorProps {
  lang: "en" | "bn";
}
const Trailor: FC<TrailorProps> = ({ lang }) => {
  return (
    <div className="space-y-6 p-6 bg-white dark:bg-background dark:border rounded-lg shadow-md">
      <Heading variant="default" as="h3">
        {lang === "bn" ? "কোর্স বিবরণ" : "Course Details"}
      </Heading>

      {/* Price */}
      <div className="space-y-2">
        <Paragraph size="lg">{lang === "bn" ? "মূল্য:" : "Price:"}</Paragraph>
        <Paragraph size="xl" variant="highlight">
          {lang === "bn" ? "৳১,০০০" : "BDT 1,000"}
        </Paragraph>
      </div>

      {/* Duration */}
      <div className="space-y-2">
        <Paragraph size="lg">
          {lang === "bn" ? "সময়কাল:" : "Duration:"}
        </Paragraph>
        <Paragraph size="xl" variant="highlight">
          3-year program
        </Paragraph>
      </div>
    </div>
  );
};

export default Trailor;
