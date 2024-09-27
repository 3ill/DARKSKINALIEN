import React from "react";
import ThemeToggle from "@/app/components/theme-toggle";

const Page = () => {
  return (
    <main className={`flex h-full w-full flex-col px-3`}>
      <div className={`flex flex-row items-center justify-between`}>
        <h1
          className={`flex self-center font-helvetica text-3xl font-extrabold tracking-widest text-gray-950 dark:text-gray-200`}
        >
          DARKSKINALIEN
        </h1>
        <ThemeToggle />
      </div>
    </main>
  );
};
export default Page;
