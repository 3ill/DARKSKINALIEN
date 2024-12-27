import React from "react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage = ({params}: ProjectPageProps) => {
  return (
    <div>
      <h1 className={`text-white`}>{params.id}</h1>
    </div>
  );
};

export default ProjectPage;