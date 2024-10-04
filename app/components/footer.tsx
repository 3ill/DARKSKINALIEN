"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/context/theme.context";
import { dark_logo, light_logo } from "@/app/assets";
import { FooterItems } from "@/app/data/constants";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`bg-secondary-200 flex w-full flex-col bg-opacity-50 px-5 py-3 backdrop-blur-md`}
    >
      <Image
        src={theme === "light" ? light_logo : dark_logo}
        alt={`logo`}
        width={70}
        height={50}
      />
      <section
        className={`mt-[50px] flex flex-col sm:flex-row sm:justify-between`}
      >
        {FooterItems.map((item) => (
          <div key={item.id} className={`flex flex-col text-left`}>
            <h3
              className={`font-Azeret text-[16px] font-bold uppercase text-primary_dark dark:text-white`}
            >
              {item.name}
            </h3>
            <div className={`mt-5 flex flex-col`}>
              {item.children.map((child) => (
                <div key={child.id} className={`flex flex-col gap-3 mb-3`}>
                  <a href={child.url}>
                    <p
                      className={`text-secondary-100 font-helvetica text-[12px] font-light capitalize dark:text-gray-400`}
                    >
                      {child.name}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className={`w-full h-[0.5px] mt-7 border border-[#3f3f3f]`} />
      <div className={`flex flex-col mt-3`}>
        <div className={`flex flex-col sm:flex-row sm:justify-between`}>
          <p className={`font-helvetica text-[12px] font-light text-secondary-100 dark:text-gray-400`}>Copyright 2024 DarkskinAlien, All Rights Reserved.</p>
          <p className={`font-helvetica  text-[12px] font-light text-secondary-100 dark:text-gray-400`}>Designed by Dsacorp, LA</p>
        </div>
        <p className={`font-Azeret self-center sm:self-start mt-2 uppercase font-bold text-primary_dark dark:text-white text-[14px]`}>darkskinalien</p>
      </div>
    </footer>
  );
};
export default Footer;
