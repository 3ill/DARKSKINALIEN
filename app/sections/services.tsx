"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/app/utils/motion";
import PublicSpeaking from "@/app/components/public-speaking";
import CommunityManagement from "@/app/components/community-management";
import ProjectManagement from "@/app/components/project-management";

const Services = () => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial={`hidden`}
      whileInView={`show`}
      viewport={{ once: true, amount: 0.25 }}
      id={`services`}
      className={`mb-[100px] flex min-h-screen w-full flex-col pt-[450px] lg:pt-[800px]`}
    >
      <motion.div
        variants={textVariant2}
        initial={`hidden`}
        whileInView={`show`}
        className={`glow flex flex-row items-center gap-1`}
      >
        <div
          className={`h-9 w-1 rounded-md bg-primary_dark dark:bg-primary_light`}
        />
        <p
          className={`text_variant2 font-Azeret text-[24px] font-extrabold uppercase sm:text-[40px]`}
        >
          Services
        </p>
      </motion.div>
      <PublicSpeaking />
      <CommunityManagement />
      <ProjectManagement />
    </motion.section>
  );
};

export default Services;
