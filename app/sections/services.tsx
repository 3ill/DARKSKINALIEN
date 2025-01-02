"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/app/utils/motion";
import PublicSpeaking from "@/app/components/public-speaking";
import CommunityManagement from "@/app/components/community-management";
import ProjectManagement from "@/app/components/project-management";
import Title from "../components/title";

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
      <Title title="Services" />
      <PublicSpeaking />
      <CommunityManagement />
      <ProjectManagement />
    </motion.section>
  );
};

export default Services;
