import React from "react";
import { motion } from "framer-motion";
import { softVariant2 } from "@/app/utils/motion";
import { ServiceCard } from "@/app/components/service-card";
import { CommunityManagementData } from "@/app/components/services-data";
import { cn } from "@/app/lib/utils";

const CommunityManagement = () => {
  return (
    <section className={`services_container !lg:pt-[150px] !pt-[200px]`}>
      <div className={`flex w-full items-center`}>
        <motion.div
          variants={softVariant2(0.75, 0.5)}
          initial={`hidden`}
          whileInView={`visible`}
          className={`flex w-full items-center gap-1`}
        >
          <div
            className={cn('h-[150px] w-1 rounded-md !bg-gradient-to-r from-yellow-400 to-yellow-600 sm:h-[200px] block')}
          >
            &nbsp;
          </div>

          <h3 className={`services_title`}>
            Community <br /> Management
          </h3>
        </motion.div>
      </div>
      <div className={`service_component_wrapper`}>
        <ServiceCard data={CommunityManagementData} />
      </div>
    </section>
  );
};

export default CommunityManagement;
