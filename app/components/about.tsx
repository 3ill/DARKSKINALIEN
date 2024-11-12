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
            I’m an African creative dedicated to reshaping narratives for
            African innovators through the potential of Web3. Starting without a
            clear path, I built a career in community building and management,
            reaching a pivotal milestone that affirmed my belief in Web3&apos;s
            capacity to amplify African voices globally. <br /> <br />{" "}
            Currently, I’m developing{" "}
            <span className={`text-black dark:text-gray-200`}>
              DSA CORP—a network focused on supporting Web3 integration for
              African creatives.
            </span>{" "}
            At DSA CORP, we view community as the driving force of the Web3
            movement, enabling essential collaborations for a decentralized
            future. <br /> <br /> My mission is to inspire and empower African
            creatives to reach their full potential, leaving a lasting impact on
            the industry and the next generation.
          </p>
        </Body>

        <CarouselDemo />
      </div>
    </section>
  );
};
export default About;