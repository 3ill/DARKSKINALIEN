import Title from "@/app/components/title";
import {
  AnimatedTestimonials,
  Testimonial,
} from "@/app/components/ui/animated-testimonials";
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

  const techonolgies = project?.technologies;
  const responsibility = project?.responsibility;
  const testimonials = project?.testimonials;

  return (
    <section className={`flex w-full flex-col`}>
      {/* Banner and Logo */}
      <section className={`project_header_container relative`}>
        <div className={`flex w-full justify-center`}>
          <h1 className="motion-preset-expand font-helvetica text-[35px] font-extrabold uppercase text-neutral-50 motion-duration-700 sm:text-[62px]">
            {project?.name}
          </h1>
        </div>

        <div className={`project_logo_container`}>
          <Image
            src={project?.image as StaticImageData}
            alt={project?.name as string}
            className={`inset-1/2] motion-preset-expand h-fit w-[100px] rounded-full object-contain object-center motion-duration-700 motion-delay-500 sm:w-[150px] lg:w-[200px]`}
          />
        </div>
      </section>

      {/* Description */}
      <section className={`project_section_container`}>
        <Title title="description" addGlow={false} />
        <p
          className={`text_variant2 pt-3 text-left font-grotesk text-[14px] font-light sm:text-[16px] lg:text-[18px]`}
        >
          {project?.description}
        </p>
      </section>

      {/* Technologies and Tools */}
      <section className={`project_section_container`}>
        <Title title="techology & tools" addGlow={false} />
        <div className={`flex flex-col`}>
          <p
            className={`text_variant2 pt-3 text-left font-grotesk text-[14px] font-light sm:text-[16px] lg:max-w-[600px] lg:text-[18px]`}
          >
            {techonolgies?.context}
          </p>

          <div className={`flex flex-col`}>
            {techonolgies?.tools.map((tool) => (
              <div
                key={tool.id}
                className={`flex w-full flex-col items-center justify-normal pt-5`}
              >
                <div
                  className={`flex w-full flex-row items-center justify-start gap-3`}
                >
                  <div
                    className={`h-[5px] w-[5px] rounded-full bg-neutral-700 dark:bg-neutral-50 lg:h-[15px] lg:w-[15px]`}
                  >
                    &nbsp;
                  </div>
                  <div
                    className={`flex h-fit min-w-[200px] flex-row gap-[50px] rounded-[25px] bg-[#1e1e1e] bg-opacity-70 p-3 shadow sm:min-w-[306px] sm:gap-[100px]`}
                  >
                    <Image
                      src={tool.icon as StaticImageData}
                      alt={tool.name}
                      className={`nav_icons`}
                    />

                    <p
                      className={`text_variant2 text-center font-grotesk text-[14px] font-normal capitalize sm:text-[16px] lg:text-[18px]`}
                    >
                      {tool.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role And Responsibiliites */}
      <section className={`project_section_container`}>
        <Title title={`responsibilities`} addGlow={false} />

        <div className={`flex flex-col`}>
          <p
            className={`text_variant2 pt-3 text-left font-grotesk text-[14px] font-light sm:text-[16px] lg:max-w-[600px] lg:text-[18px]`}
          >
            {responsibility?.context}
          </p>

          {responsibility?.responsibilities.map((r) => (
            <div
              key={r.id}
              className={`flex w-full flex-col items-center justify-normal pt-5`}
            >
              <div
                className={`flex w-full flex-row items-center justify-start gap-3`}
              >
                <div
                  className={`h-[5px] w-[5px] rounded-full bg-neutral-700 dark:bg-neutral-50 lg:h-[15px] lg:w-[15px]`}
                >
                  &nbsp;
                </div>
                <div
                  className={`flex h-fit max-w-[600px] flex-row rounded-[25px] bg-[#1e1e1e] bg-opacity-70 p-3 shadow sm:gap-[100px]`}
                >
                  <p
                    className={`text_variant2 text-left font-grotesk text-[14px] font-normal sm:text-[16px] lg:text-[18px]`}
                  >
                    {r.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* todo: remove redundant mb and add testimonial card */}
      <section className={`project_section_container`}>
        <Title title="testimonials" addGlow={false} />
      </section>

      {/* Testimonials Section */}
      <section className={`project_section_container mb-[50px]`}>
        <AnimatedTestimonials testimonials={testimonials as Testimonial[]} />
      </section>
    </section>
  );
};

export default ProjectPage;
