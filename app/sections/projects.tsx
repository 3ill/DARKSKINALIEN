import React from "react";
import Title from "@/app/components/title";
import { ProjectsCard } from "@/app/components/projects-card";
import { ProjectsData } from "@/app/data/constants";
import ProjectsCarousel from "@/app/components/projects-carousel";

const Projects = () => {
  return (
    <section id={`projects`} className="flex h-screen flex-col  pt-[350px] lg:pt-[700px]">
      <Title title="Projects" />
      <div className={`hidden lg:grid grid-cols-3 px-5 gap-3`}>
        {ProjectsData.map((project) => (
          <div key={project.id} className={`flex flex-row  w-fit motion-preset-blur-up motion-duration-700`}>
            <ProjectsCard index={project.id} id={project.id} duration={project.duration} name={project.name} role={project.role} image={project.image} />
          </div>
        ))}
      </div>
      {/*Mobile View*/}
      <div className={`flex lg:hidden w-full`}>
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default Projects;