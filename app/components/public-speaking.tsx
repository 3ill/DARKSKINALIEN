"use client";

import React from "react";
import { motion } from "framer-motion";
import { softVariant2 } from "@/app/utils/motion";
import { ServiceCard } from "@/app/components/service-card";
import { PublicSpeakingData } from "@/app/components/services-data";

const PublicSpeaking = () => {
  return (
    <div className={`services_container`}>
      <div className={`flex w-full`}>
        <motion.div
          variants={softVariant2(0.75, 0.5)}
          initial={`hidden`}
          whileInView={`visible`}
          className={`flex w-full items-center gap-1`}
        >
          <div
            className={`h-[150px] w-1 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 sm:h-[200px]`}
          ></div>

          <h3 className={`services_title`}>
            Public <br /> Speaking
          </h3>
        </motion.div>
      </div>
      <div className={`service_component_wrapper`}>
        <ServiceCard data={PublicSpeakingData} />
      </div>
    </div>
  );
};
export default PublicSpeaking;