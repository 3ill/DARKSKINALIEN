"use client";

import React from "react";
import { motion } from "framer-motion";
import { navVariants, softVariant, staggerContainer } from "@/app/utils/motion";
import Image from "next/image";
import { useTheme } from "@/app/context/theme.context";
import {
  dark_logo,
  light_logo,
  menu_close_dark,
  menu_open_dark,
  moon,
  sun,
} from "@/app/assets";
import { LinkIcons, NavItems } from "@/app/data/constants";
import { useMobileMenuStore } from "@/app/store/store";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const { isToggled, setToggled } = useMobileMenuStore();

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial={`hidden`}
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`z-50 flex flex-col`}
    >
      {/*DESKTOP NAV*/}
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
              <a href={item.slug} className={`scroll-smooth`}>
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

                  className={`nav_icons`}
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
            className={`nav_icons ml-5`}
          />
        </div>
      </motion.nav>

      {/*MOBILE NAV*/}
      <motion.nav
        variants={navVariants}
        className={`relative flex flex-row items-center py-1 sm:hidden`}
      >
        <Image
          src={theme === "light" ? light_logo : dark_logo}
          alt={`logo`}
          width={50}
          height={30}
          className={`absolute top-[10px]`}
        />

        <div
          className={`absolute z-20 right-2 top-[12px] items-center rounded-[15px] bg-[#252525] bg-opacity-90 px-2 py-1 backdrop-blur-md dark:bg-[#252525] dark:bg-opacity-90 ${isToggled ? " w-[150px] transition-all  motion-translate-x-in-[10px] motion-preset-expand motion-duration-500" : "w-[fit-content]"}`}
          onClick={setToggled}
        >
          <Image
            src={
              theme === "light"
                ? isToggled
                  ? menu_open_dark
                  : menu_close_dark
                : isToggled
                  ? menu_open_dark
                  : menu_close_dark
            }
            alt={`menu`}
            width={25}
            height={25}
            className={`${isToggled ? "absolute left-[120px] top-[5px]" : "flex"}`}
          />

          {isToggled && (
            <motion.div
              variants={softVariant}
              initial={`hidden`}
              whileInView={`visible`}
              className={`mt-[20px]`}
            >
              {NavItems.map((item) => (
                <div key={item.id} className={`flex flex-col items-center`}>
                  <a href={item.slug} className={`scroll-smooth`}>
                    <p
                      className={`mt-3 font-helvetica text-[14px] font-semibold uppercase text-primary_light hover:text-white`}
                    >
                      {item.name}
                    </p>
                  </a>
                </div>
              ))}

              <div
                className={`relative mt-7 flex flex-row items-center gap-2 rounded-[15px] border border-primary_dark border-opacity-50 bg-white bg-opacity-50 px-2 py-1 backdrop-blur dark:border-primary_light dark:bg-primary_dark dark:bg-opacity-50`}
              >
                {LinkIcons.map((icon) => (
                  <div key={icon.id}>
                    <a href={icon.url}>
                      <Image
                        src={
                          theme === "light" ? icon.image.light : icon.image.dark
                        }
                        alt={icon.slug}
                        className={`nav_icons`}
                      />
                    </a>
                  </div>
                ))}
                <Image
                  src={theme === "light" ? sun : moon}
                  alt={`logo`}

                  onClick={toggleTheme}
                  className={`nav_icons`}
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </motion.section>
  );
};
export default Nav;