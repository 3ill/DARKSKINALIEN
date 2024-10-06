"use client";

import React from "react";
import Image from "next/image";
import { alien, dsa, hero } from "@/app/assets";
import NavSlider from "@/app/components/nav-slider";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/app/utils/motion";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`flex h-screen w-full pt-[70px] sm:pt-[10px] lg:pt-[50px]`}
    >
      <div className={`relative flex w-full flex-col -z-50`}>
        <div className={`relative -z-50 flex w-full flex-col`}>
          <p className={`hero_text overflow-x-hidden`}>
            darkskin
            <span className={`max-md:hidden max-sm:hidden`}>
              <br className={`flex sm:hidden`} />
              alien
            </span>
          </p>
          <p
            className={`hero_text -z-50 flex self-center max-md:-mt-[100px] max-md:flex max-sm:-mt-[50px] lg:hidden`}
          >
            Alien
          </p>
        </div>

        <div className={`hero_sub_wrapper overflow-x-hidden`}>
          <motion.p
            variants={slideIn("left", "tween", 0.5, 0.75)}
            initial={`hidden`}
            whileInView={`show`}
            className={`hero_sub_text`}
          >
            Community Engr
          </motion.p>
          <motion.p
            variants={slideIn("right", "tween", 0.5, 0.75)}
            initial={`hidden`}
            whileInView={`show`}
            className={`hero_sub_text`}
          >
            Thought leader
          </motion.p>
        </div>

        <Image
          src={alien}
          alt={`profile`}
          quality={100}
          className={`absolute -z-30 h-[500px] w-[300px] object-contain object-center max-md:left-[10px] max-md:top-[70px] max-sm:left-6 max-sm:top-0 sm:h-[700px] sm:w-[900px] lg:left-[300px] lg:top-0`}
        />
      </div>
      <div className={`relative z-50`}>
        <div
          className={`absolute max-md:-left-[370px] z-50 max-md:top-[650px] max-sm:-left-[218px] max-sm:top-[520px] lg:-left-[750px] lg:top-[600px]`}
        >
          <NavSlider />
        </div>
      </div>
    </motion.section>
  );
};
export default Hero;
