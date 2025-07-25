import FadeUp from "@/components/common/FadeUp";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <FadeUp>
        {" "}
        <Heading as="h4" position="left" variant="highlight">
          About Me
        </Heading>
      </FadeUp>
      <FadeUp delay={0.1}>
        {" "}
        <Paragraph>
          👋 Hi, I&apos;m Rifat, a dedicated and detail-oriented Software
          Developer with over 2 years of professional experience in full-stack
          web development. I specialize in building fast, secure, and scalable
          web applications using modern technologies.
        </Paragraph>
      </FadeUp>
      <FadeUp delay={0.2}>
        <Paragraph className="py-1">
          My technical skill set includes React, Next.js, Node.js, Express.js,
          TypeScript, JavaScript, Redux, and Tailwind CSS on the frontend and
          backend. I also work extensively with Prisma ORM, and have hands-on
          experience with both NoSQL (MongoDB) and SQL (PostgreSQL, MySQL)
          databases.
        </Paragraph>
      </FadeUp>
      <FadeUp delay={0.3}>
        {" "}
        <Paragraph className="pb-1">
          I take pride in writing clean, maintainable code and following best
          practices across development, testing, and deployment. Whether
          it&apos;s crafting intuitive user interfaces or developing robust
          APIs, I’m committed to delivering high-quality solutions that solve
          real-world problems.
        </Paragraph>
      </FadeUp>
      <FadeUp delay={0.4}>
        <Paragraph>
          I’m always open to learning new technologies, collaborating with
          passionate teams, and contributing to impactful projects. I hold a
          Bachelor’s degree in Computer Science and Engineering, which provided
          me with a solid foundation in software development, algorithms, and
          systems design.
        </Paragraph>
      </FadeUp>
    </div>
  );
};

export default AboutMe;
