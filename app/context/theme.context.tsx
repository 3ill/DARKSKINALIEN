"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  ITheme,
  IThemeContext,
  IThemeContextProvider,
} from "@/app/context/interface/theme.interface";

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ITheme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("use theme must be used within a context provider");
  }
  return context;
};

export default ThemeContextProvider;