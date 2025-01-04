import { ProjectsData } from "@/app/data/constants";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = ProjectsData.find(
    (project) => project.id.toString() === params.id,
  );
  return (
    <section className={`flex h-screen w-full flex-col`}>
      <div className={`project_header_container relative`}>
        <h1 className="font-helvetica text-[35px] font-extrabold uppercase text-neutral-50 sm:text-[62px]">
          {project?.name}
        </h1>

        <div className={`project_logo_container`}>
          <Image
            src={project?.image as StaticImageData}
            alt={project?.name as string}
            className={`inset-1/2] h-fit w-[100px] rounded-full object-contain object-center sm:w-[150px] lg:w-[200px]`}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
