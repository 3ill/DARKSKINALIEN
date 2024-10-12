import React from "react";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";
import About from "./components/about";

const Page = () => {
  return (
    <main
      className={`flex h-full w-full flex-col overflow-x-hidden overflow-y-hidden`}
    >
      <div className={`w-full overflow-x-hidden overflow-y-hidden px-3`}>
        <Nav />
        <Hero />
        <About />
      </div>
      <Footer />
    </main>
  );
};
export default Page;
