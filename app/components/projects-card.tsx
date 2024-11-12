"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { IconFolderShare } from "@tabler/icons-react";
import { hbb } from "@/app/assets";
import { useTheme } from "@/app/context/theme.context";

export function ProjectsCard() {
  const { theme } = useTheme();
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 bg-opacity-75 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem
          translateZ="50"
          className="font-medium text-neutral-600 dark:text-primary_light"
        >
          Nov 23 - Dec 24
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={hbb}
            height="1000"
            width="1000"
            className="h-80 w-full rounded-xl object-cover object-center group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <div className={`flex flex-row items-center gap-1`}>
            <CardItem translateZ={-20} translateX={-40}>
              <IconFolderShare
                color={theme === "light" ? " #404040" : "#d4d4d4"}
                width={70}
                height={70}
              />
            </CardItem>
            <div className={`flex flex-col`}>
              <CardItem
                as="p"
                translateZ={-20}
                translateX={-40}
                className="mt-2 max-w-sm text-lg uppercase text-neutral-700 accent-neutral-700 dark:text-neutral-300"
              >
                Heads by bnxn
              </CardItem>
              <CardItem
                as="p"
                translateZ={20}
                translateX={-40}
                className="max-w-sm text-[15px] capitalize text-neutral-500 accent-neutral-300 dark:text-neutral-300"
              >
                Community Engr
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}