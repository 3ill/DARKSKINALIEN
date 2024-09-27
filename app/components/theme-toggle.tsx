"use client";

import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "@/app/context/theme.context";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`h-[3rem] w-[3rem] transition-all hover:scale-110 active:scale-100`}
    >
      {theme === "light" ? <BsSunFill /> : <BsMoonFill color={`white`} />}
    </button>
  );
};
export default ThemeToggle;