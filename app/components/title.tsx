"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "../utils/motion";

export interface Props {
  title: string;
  addGlow?: boolean;
}
const Title = ({ title, addGlow }: Props) => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial={`hidden`}
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`flex w-full flex-col`}
    >
      <motion.div
        variants={textVariant2}
        initial={`hidden`}
        whileInView={`show`}
        className={` ${addGlow === false ? "" : "glow"} flex flex-row items-center gap-1`}
      >
        <div
          className={`h-[50px] w-1 rounded-md bg-primary_dark dark:bg-primary_light`}
        >
          &nbsp;
        </div>
        <p
          className={`text_variant2 font-Azeret text-[24px] font-extrabold uppercase sm:text-[40px]`}
        >
          {title}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Title;
