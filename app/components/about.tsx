import React from "react";
import Title from "./title";
import Body from "./body";
import { CarouselDemo } from "./carousel";

const About = () => {
  return (
    <section
      id="about"
      className={`flex h-screen w-full flex-col pt-0 sm:pt-[150px]`}
    >
      <Title title={`About Me`} />
      <div className={`flex flex-col pt-9`}>
        <Body>
          <p
            className={`body_text_variant font-helvetica text-[14px] font-light sm:text-[16px]`}
          >
            Hi, I&apos;m{" "}
            <span className={`text-black dark:text-white`}>Martins Victor</span>
            , though some know me as{" "}
            <span className={`text-black dark:text-white`}>DarkSkinAlien</span>.
            I{" "}
            <span className={`text-black dark:text-white`}>
              started DSA CORP
            </span>{" "}
            to bring people together through learning, teamwork, and personal
            growth. My focus is on{" "}
            <span className={`text-black dark:text-white`}>
              building strong communities and helping people understand the
              potential of Web3 technology
            </span>
            , especially for creatives across Africa. <br /> <br /> At DSA CORP,
            I work on projects that encourage creativity and personal
            development, giving people the tools to explore new ideas and grow
            beyond what they thought possible.{" "}
            <span className={`text-black dark:text-white`}>
              My goal is straightforward: to open doors for future thinkers,
              offer support to creative minds, and inspire people to achieve
              their best in a connected, digital world
            </span>
            .
          </p>
        </Body>

        <CarouselDemo />
      </div>
    </section>
  );
};
export default About;