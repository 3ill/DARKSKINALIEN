import React from "react";

const NavSlider = () => {
  return (
    <div
      className={`flex h-[60px] w-9 items-center justify-center rounded-[25px] border border-white bg-black bg-opacity-50 sm:h-[70px] sm:w-9`}
    >
      <a href={`#about`}>
        <div
          className={`flex h-6 w-5 animate-bounce self-center rounded-full bg-white duration-1000 sm:h-7 sm:w-5`}
        />
      </a>
    </div>
  );
};
export default NavSlider;
