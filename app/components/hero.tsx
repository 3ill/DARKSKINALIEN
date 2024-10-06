"use client";

import React from "react";
import Image from "next/image";
import { hero } from "@/app/assets";
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
      className={`flex h-screen w-full overflow-x-hidden overflow-y-hidden pt-[50px] sm:pt-[10px] lg:pt-[50px]`}
    >
      <div className={`flex w-full flex-col`}>
        <p className={`hero_text`}>
          darkskin
          <span className={`hero_span_text`}>
            <br className={`flex lg:hidden`} />
            alien
          </span>
        </p>
        <div className={`hero_sub_wrapper`}>
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
        <div className={`relative`}>
          <div
            className={`absolute max-md:left-[350px] max-md:top-[50px] max-sm:left-[170px] max-sm:top-[200px] lg:left-[700px] lg:top-[40px]`}
          >
            <NavSlider />
          </div>
        </div>
        <Image
          src={hero}
          alt={`profile`}
          width={700}
          height={900}
          quality={100}
          className={`absolute top-[100px] -z-30 object-cover object-center max-md:left-0 max-md:top-[100px] max-sm:-left-3 lg:left-[360px] lg:top-0`}
        />
      </div>
    </motion.section>
  );
};
export default Hero;
