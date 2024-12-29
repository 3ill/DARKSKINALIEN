import React from "react";
import { motion } from "framer-motion";
import { softVariant2 } from "@/app/utils/motion";
import { ServiceCard } from "@/app/components/service-card";
import { CommunityManagementCard } from "@/app/components/services-data";

const CommunityManagement = () => {
  return (
    <section className={`services_container !pt-[200px] !lg:pt-[150px]`}>
      <div className={`flex w-full`}>
      <motion.h3
        variants={softVariant2(0.75, 0.5)}
        initial={`hidden`}
        whileInView={`visible`}
        className={`services_title`}
      >
        Community <br /> Management
      </motion.h3>

      </div>
      <div
        className={`flex flex-col items-center justify-center lg:justify-normal w-full`}
      >
        <ServiceCard data={CommunityManagementCard} />
      </div>
    </section>
  );
};

export default CommunityManagement;