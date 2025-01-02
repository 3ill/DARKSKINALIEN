import React from "react";
import Title from "../components/title";
import { GlobeDemo } from "../components/github-globe";
import { ConnectItems } from "../data/constants";

const Connect = () => {
  return (
    <section
      className={`flex h-screen w-full flex-col pt-[150px] sm:pt-[150px]`}
    >
      <Title title="Connect With Me" />

      <div
        className={`relative flex h-full w-full flex-col items-center lg:flex-row lg:px-5`}
      >
        <GlobeDemo />
        <div
          className={`flex flex-row items-center gap-1 lg:flex-col lg:gap-5`}
        >
          {ConnectItems.map((item) => (
            <div
              key={item.id}
              className="item-center motion-preset-expand flex flex-row gap-0 rounded-[25px] bg-[#313131] bg-opacity-30 p-2 shadow hover:bg-neutral-50 dark:hover:bg-neutral-800 lg:min-w-[300px] lg:gap-[100px]"
            >
              <a href={item.url}>{item.icon}</a>

              <p
                className={`hidden font-helvetica font-medium uppercase text-neutral-800 dark:text-neutral-200 lg:flex`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
