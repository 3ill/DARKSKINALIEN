import React from "react";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

const Page = () => {
  return (
    <main className={`flex h-full w-full flex-col`}>
      <div className={` w-full px-3 h-screen`}>
        <Nav />
      </div>
      <Footer />
    </main>
  );
};
export default Page;
