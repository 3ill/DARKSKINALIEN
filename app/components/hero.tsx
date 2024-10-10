"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/app/utils/motion";
import Image from "next/image";
import { alien } from "../assets";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`flex h-screen w-full pt-9`}
    >
      <section className={`flex w-full flex-col`}>
        <div className={`flex flex-col lg:flex-row lg:justify-between`}>
          {/**Hero Text: Left */}
          <div className={`flex w-full flex-col`}>
            <h1
              className={`text_variant2 font-thunder text-[120px] uppercase tracking-wide sm:text-[170px] lg:text-[250px]`}
            >
              DarkSkin
            </h1>
            <h1
              className={`text_variant2 -mt-[80px] font-thunder text-[120px] uppercase tracking-wide sm:-mt-[100px] sm:text-[170px] lg:-mt-[150px] lg:text-[250px]`}
            >
              Alien
            </h1>
            <div className={`glow flex flex-row gap-2`}>
              <div
                className={`h-full w-1 rounded-md bg-primary_dark dark:bg-primary_light`}
              />
              <div className={`flex flex-col sm:text-[18px] lg:text-[20px]`}>
                <p className={`text_variant2 font-Semibold font-Azeret`}>
                  Founder
                </p>
                <p className={`text_variant2 font-Semibold font-Azeret`}>
                  Leader
                </p>
                <p className={`text_variant2 font-Semibold font-Azeret`}>
                  Community Engr
                </p>
              </div>
            </div>
          </div>

          <div className={`relative flex h-full w-full flex-col`}>
            <Image
              src={alien}
              alt="alien"
              quality={100}
              className={`absolute -right-[60px] -top-[90px] h-[450px] w-[500px] self-end object-contain object-center sm:-right-[130px] sm:-top-[350px] sm:h-[600px] sm:w-[600px] lg:-top-[80px] lg:h-[850px] lg:w-[900px]`}
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
};
export default Hero;
