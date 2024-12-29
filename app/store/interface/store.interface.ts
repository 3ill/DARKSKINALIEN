import React from "react";
import { StaticImageData } from "next/image";

export interface IMenuToggled {
  isToggled: boolean;
  setToggled: () => void;
}

export interface IServiceCard {
  data: {
    description: string;
    title: string;
    src: string |  StaticImageData;
    ctaText: string;
    ctaText2: string;
    ctaLink: string;
    content: () => React.JSX.Element;
  }[];
}