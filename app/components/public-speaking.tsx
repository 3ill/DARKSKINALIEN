"use client"

import React from "react";
import { motion } from "framer-motion";
import { softVariant2 } from "@/app/utils/motion";
import { ServiceCard } from "@/app/components/service-card";
import { PublicSpeakingCards } from "@/app/components/services-data";

const PublicSpeaking = () => {
  return (
    <div className={`services_container`}>
      <div className={`flex w-full`}>
      <motion.h3
        variants={softVariant2(0.75, 0.5)}
        initial={`hidden`}
        whileInView={`visible`}
        className={`services_title`}
      >
        Public <br /> Speaking
      </motion.h3>

      </div>
      <div
        className={`flex flex-col items-center justify-center lg:justify-normal w-full`}
      >
        <ServiceCard data={PublicSpeakingCards} />
      </div>
    </div>
  );
};

export default PublicSpeaking;