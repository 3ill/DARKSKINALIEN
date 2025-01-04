import React from "react";
import Nav from "@/app/components/nav";
import Hero from "@/app/sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Services from "@/app/sections/services";

const Page = () => {
  return (
    <main
      className={`flex h-full w-full flex-col overflow-x-hidden overflow-y-hidden`}
    >
      <div
        className={`min-h-screen w-full overflow-x-hidden overflow-y-hidden px-3`}
      >
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Services />
      </div>
    </main>
  );
};
export default Page;
