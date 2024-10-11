import React from "react";

const NavSlider = () => {
  return (
    <div
      className={`flex h-[70px] w-10 items-center justify-center rounded-[25px] border border-white bg-black bg-opacity-50 sm:h-[80px] sm:w-10`}
    >
      <a href={`#about`}>
        <div
          className={`flex h-7 w-5 animate-bounce self-center rounded-full bg-white duration-1000 sm:h-7 sm:w-5`}
        />
      </a>
    </div>
  );
};
export default NavSlider;
