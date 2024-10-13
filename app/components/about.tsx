import React from "react";
import Title from "./title";
import Body from "./body";

const About = () => {
  return (
    <section
      id="about"
      className={`flex h-screen w-full flex-col pt-0 sm:pt-[150px]`}
    >
      <Title title={`About Me`} />
      <div className={`flex flex-col pt-9 sm:flex-row`}>
        <Body>
          <p
            className={`body_text_variant font-helvetica text-[14px] font-light sm:text-[16px]`}
          >
            Hi, I&apos;m Martins Victor, but most people know me as
            DarkSkinAlien. I&apos;m a passionate African creative on a mission
            to change the narrative for African innovators and creators,
            especially within the Web 3.0 ecosystem. <br /> <br /> My journey
            has been one of uncertainty and growth, but through it all,
            I&apos;ve developed a deep belief in the transformative power of
            collaboration. <br /> <br /> From community building to management,
            I&apos;ve found my calling in helping others unlock their potential
            and thrive in this new digital frontier. I&apos;m here to create,
            connect, and drive change. Let&apos;s build something amazing
            together.
          </p>
        </Body>
      </div>
    </section>
  );
};
export default About;
