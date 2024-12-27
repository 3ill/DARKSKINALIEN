import React from "react";
import Title from "@/app/components/title";
import { ProjectsCard } from "@/app/components/projects-card";
import { ProjectsData } from "@/app/data/constants";

const Projects = () => {
  return (
    <section id={`projects`} className="flex h-screen flex-col mt-[50px] pt-[50px] sm:pt-[250px] lg:pt-[600px] mb-[1000px]">
      <Title title="Projects" />
      <div className={`flex flex-row px-5`}>
        {ProjectsData.map((project) => (
          <div key={project.id} className={`flex flex-row w-fit`}>
            <ProjectsCard id={project.id} duration={project.duration} name={project.name} role={project.role} image={project.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;