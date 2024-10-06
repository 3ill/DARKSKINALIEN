import React from "react";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

const Page = () => {
  return (
    <main className={`flex h-full w-full flex-col overflow-y-hidden overflow-x-hidden`}>
      <div className={` w-full px-3 overflow-x-hidden overflow-y-hidden`}>
        <Nav />
        <Hero />
      </div>
      <Footer />
    </main>
  );
};
export default Page;
