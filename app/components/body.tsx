"use client";

import React from "react";
import { motion } from "framer-motion";
import { softVariant, staggerContainer } from "../utils/motion";

interface Props {
  children: React.ReactNode;
}

const Body = ({ children }: Props) => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial={`hidden`}
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`flex w-full flex-col`}
    >
      <motion.div
        variants={softVariant}
        initial={`hidden`}
        whileInView={`visible`}
        className={`max-w-[800px] text-left`}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Body;
