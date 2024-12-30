"use client"

import React, { useRef } from "react";
import Title from "@/app/components/title";
import { ProjectsCard } from "@/app/components/projects-card";
import { ProjectsData } from "@/app/data/constants";
import ProjectsCarousel from "@/app/components/projects-carousel";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";


const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      const newScrollPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <section id={`projects`} className="flex h-screen flex-col pt-[350px] lg:pt-[700px]">
      <Title title="Projects" />
      <div className="hidden lg:flex flex-col gap-4">
        <div
          ref={scrollContainerRef}
          className="flex flex-row items-center px-5 gap-3 overflow-x-hidden scroll-smooth"
        >
          {ProjectsData.map((project) => (
            <div  key={project.id} className="flex flex-row w-fit motion-preset-blur-up motion-duration-700">
              <ProjectsCard
                index={project.id}
                id={project.id}
                duration={project.duration}
                name={project.name}
                role={project.role}
                image={project.image}
              />
            </div>
          ))}
        </div>

        {/*Scroll Control*/}
        <div className="mr-10 -mt-[30px] flex flex-row justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={() => handleScroll('left')}

          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={() => handleScroll('right')}

          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>

      {/*Mobile View*/}
      <div className={`flex lg:hidden w-full`}>
        <ProjectsCarousel />
      </div>
    </section>
  );
};
export default Projects;