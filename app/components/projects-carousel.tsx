"use client";

import React, { useState } from "react";
import { ProjectsData } from "@/app/data/constants";
import { useSwipeable } from "react-swipeable";
import { ProjectsCard } from "@/app/components/projects-card";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const ProjectCarousel = () => {
  const [dataIndex, setDataIndex] = useState<number>(0);

  const handleNext = () => {
    setDataIndex((prev) => (prev === ProjectsData.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setDataIndex((prev) => (prev === 0 ? ProjectsData.length - 1 : prev - 1));
  };

  const projectHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <section className={`flex w-full lg:hidden`}>
      <div
        {...projectHandlers}
        className={`cusor-grab flex w-full flex-col items-center justify-center active:cursor-grabbing`}
      >
        <div className={`w-full flex-col`}>
          <ProjectsCard
            index={dataIndex}
            id={ProjectsData[dataIndex].id}
            duration={ProjectsData[dataIndex].duration}
            name={ProjectsData[dataIndex].name}
            role={ProjectsData[dataIndex].role}
            image={ProjectsData[dataIndex].image}
          />

          <div className="mr-10 -mt-[30px] flex flex-row justify-end gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={handlePrev}

            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={handleNext}

            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;