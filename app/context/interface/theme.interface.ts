import { ReactNode } from "react";

export type ITheme = "light" | "dark";

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export interface IThemeContextProvider {
  children: ReactNode;
}