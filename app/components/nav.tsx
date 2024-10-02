"use client";

import React from "react";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "@/app/utils/motion";
import Image from "next/image";
import { useTheme } from "@/app/context/theme.context";
import { dark_logo, light_logo } from "@/app/assets";

const Nav = () => {
  const { theme } = useTheme();
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial={`hidden`}
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`flex flex-col`}
    >
      <motion.nav
        variants={navVariants}
        className={`flex flex-row items-center justify-between px-5`}
      >
        <Image
          src={theme === "light" ? light_logo : dark_logo}
          alt={`logo`}
          width={70}
          height={50}
        />
      </motion.nav>
    </motion.section>
  );
};
export default Nav;
