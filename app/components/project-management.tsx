"use client";

import React from "react";
import { motion } from "framer-motion";
import { softVariant2 } from "@/app/utils/motion";
import { ServiceCard } from "@/app/components/service-card";
import { ProjectManagementData } from "@/app/components/services-data";

const ProjectManagement = () => {
  return (
    <section className={`services_container !lg:pt-[150px] !pt-[200px]`}>
      <div className={`flex w-full`}>
        <motion.h3
          variants={softVariant2(0.75, 0.5)}
          initial={`hidden`}
          whileInView={`visible`}
          className={`services_title`}
        >
          Project <br /> Management
        </motion.h3>
      </div>
      <div className={`service_component_wrapper`}>
        <ServiceCard data={ProjectManagementData} />
      </div>
    </section>
  );
};

export default ProjectManagement;