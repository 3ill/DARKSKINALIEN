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

export const FooterItems = [
  {
    id: 1,
    name: "media",
    children: [
      {
        id: 1,
        name: "news",
        url: "",
      },
      {
        id: 2,
        name: "videos",
        url: "",
      },
    ],
  },
  {
    id: 2,
    name: "connect",
    children: [
      {
        id: 1,
        name: "instagram",
        url: "",
      },
      {
        id: 2,
        name: "x.com",
        url: "",
      },
      {
        id: 3,
        name: "linkedin",
        url: "",
      },
      {
        id: 4,
        name: "email",
        url: "",
      },
    ],
  },
  {
    id: 3,
    name: "partnerships",
    children: [
      {
        id: 1,
        name: "headsbybnxn",
        url: "",
      },
      {
        id: 2,
        name: "floats",
        url: "",
      },
      {
        id: 3,
        name: "web3 global",
        url: "",
      },
      {
        id: 4,
        name: "young people in tech",
        url: "",
      },
    ],
  },
] as const;
