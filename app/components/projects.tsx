import React from "react";
import Title from "@/app/components/title";
import { ProjectsCard } from "@/app/components/projects-card";

const Projects = () => {
  return (
    <div className="flex h-screen flex-col pt-[50px] sm:pt-[200px] lg:pt-[600px] mb-[1000px]">
      <Title title="Projects" />
      <div className={`flex flex-row px-5`}>
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Projects;