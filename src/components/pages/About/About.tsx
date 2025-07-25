import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import aboutme from "../../../assets/about-rifat.png";
import React from "react";
import Image from "next/image";
import AboutMe from "./AboutMe";
import FadeUp from "@/components/common/FadeUp";

const About = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <section className="text-center">
        <Heading
          animated
          bordered
          className="tracking-wider font-primary uppercase"
          as="h3"
          position="center"
          variant="highlight"
        >
          About Me
        </Heading>
        <FadeUp><Paragraph
          variant="default"
          position="center"
          size="md"
          className="pt-2"
        >
          Get to know me better — a quick peek into who I am and what I do.
        </Paragraph></FadeUp>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-7 py-10">
        <div className="relative p-1.5 rounded-md">
          <div className="absolute inset-0 rounded-md animate-border-gradient bg-[length:200%_200%] bg-gradient-to-r from-[#2c3559] via-[#dc2743] to-[#25d366] z-0" />
          <div className="relative z-10 rounded-md bg-white p-2">
            <Image
              src={aboutme}
              alt="about me"
              priority
              quality={100}
              className="w-full h-full rounded-md"
            />
          </div>
        </div>

        <div>
          <AboutMe/>
        </div>
      </section>
    </div>
  );
};

export default About;

// const About = () => {
//   return (
//     <div className='h-full w-full' style={{
//         backgroundImage: `url(${ABOUT_ME?.worldBanner})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}>
//       <h1>sfsdf</h1>
//     </div>
//   )
// }

// export default About
