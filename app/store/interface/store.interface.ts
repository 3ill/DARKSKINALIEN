import React from "react";

export interface IMenuToggled {
  isToggled: boolean;
  setToggled: () => void;
}

export interface IServiceCard {
  data: {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaText2: string;
    ctaLink: string;
    content: () => React.JSX.Element;
  }[];
}