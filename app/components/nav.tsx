"use client";

import React from "react";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "@/app/utils/motion";
import Image from "next/image";
import { useTheme } from "@/app/context/theme.context";
import { dark_logo, light_logo, moon, sun } from "@/app/assets";
import { LinkIcons, NavItems } from "@/app/data/constants";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
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
        className={`hidden flex-row items-center justify-between px-5 sm:flex`}
      >
        <Image
          src={theme === "light" ? light_logo : dark_logo}
          alt={`logo`}
          width={70}
          height={50}
        />

        <div className={`flex flex-row items-center gap-5`}>
          {NavItems.map((item) => (
            <div key={item.id} className={`group flex flex-col items-center`}>
              <a href={item.slug}>
                <p className={`nav_item_text`}>{item.name}</p>
              </a>
              <div className={`nav_hover_effect`} />
            </div>
          ))}
        </div>

        <div className={`flex flex-row items-center gap-3`}>
          {LinkIcons.map((icon) => (
            <div key={icon.id}>
              <a href={icon.url}>
                <Image
                  src={theme === "light" ? icon.image.light : icon.image.dark}
                  alt={icon.slug}
                  width={25}
                  height={25}
                  className={`transform-gpu animate-spin transition-all duration-200 hover:scale-110 active:scale-100`}
                />
              </a>
            </div>
          ))}
          <Image
            src={theme === "light" ? sun : moon}
            alt={`logo`}
            width={30}
            height={30}
            onClick={toggleTheme}
            className={`ml-5 transform-gpu animate-spin transition-all duration-200 hover:scale-110 active:scale-100`}
          />
        </div>
      </motion.nav>
    </motion.section>
  );
};
export default Nav;
