import {
  instagram_dark,
  instagram_light,
  linkedin_dark,
  linkedin_light,
  twitter_dark,
  twitter_light,
} from "@/app/assets";

export const NavItems = [
  {
    id: 1,
    name: "about",
    slug: "#about",
  },
  {
    id: 2,
    name: "my services",
    slug: "#my_services",
  },
  {
    id: 3,
    name: "projects",
    slug: "#projects",
  },
] as const;

export const LinkIcons = [
  {
    id: 1,
    name: "instagram",
    slug: "instagram",
    url: "",
    image: {
      dark: instagram_dark,
      light: instagram_light,
    },
  },
  {
    id: 2,
    name: "twitter",
    slug: "twitter",
    url: "",
    image: {
      dark: twitter_dark,
      light: twitter_light,
    },
  },
  {
    id: 3,
    name: "linkedin",
    slug: "linkedin",
    url: "",
    image: {
      dark: linkedin_dark,
      light: linkedin_light,
    },
  },
] as const;
