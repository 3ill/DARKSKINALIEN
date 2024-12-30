import React from "react";
import { motion } from "framer-motion";
import { softVariant2 } from "@/app/utils/motion";
import { ServiceCard } from "@/app/components/service-card";
import { CommunityManagementData } from "@/app/components/services-data";

const CommunityManagement = () => {
  return (
    <section className={`services_container !lg:pt-[150px] !pt-[200px]`}>
      <div className={`flex w-full`}>
        <motion.div
          variants={softVariant2(0.75, 0.5)}
          initial={`hidden`}
          whileInView={`visible`}
          className={`flex w-full items-center gap-1`}
        >

          <div className={`w-1 h-[100px] sm:h-[200px] rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600`}/>

          <motion.h3 className={`services_title`}>
            Community <br /> Management
          </motion.h3>
        </motion.div>
      </div>
      <div className={`service_component_wrapper`}>
        <ServiceCard data={CommunityManagementData} />
      </div>
    </section>
  );
};

export default CommunityManagement;