import React from "react";
import {
  blockchain,
  Discord,
  floats,
  hbb,
  instagram_dark,
  instagram_light,
  linkedin_dark,
  linkedin_light,
  Opensea,
  react,
  solidity,
  twitter_dark,
  twitter_light,
  uhuru,
  web3_global,
  ypit,
} from "@/app/assets";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";

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
      {
        id: 5,
        name: "tech unwind",
        url: "",
      },
      {
        id: 6,
        name: "nft ng",
        url: "",
      },
      {
        id: 7,
        name: "hindsight development organization",
        url: "",
      },
    ],
  },
] as const;

export const HeroSubText = [
  {
    id: 1,
    name: "founder",
  },
  {
    id: 2,
    name: "leader",
  },
  {
    id: 3,
    name: "community engr",
  },
] as const;

export const CarouselData = {
  RoundTable3: {
    title: "Sep 7th, 2024. The Jewel Aeida",
    context: "A village assembly for young people seeking more",
  },
  RoundTable2: {
    title: "Nov 25th, 2023. The Lekki Coliseum",
    context:
      "A deep conversation for entrepreneurs and creators in and beyond the tech space",
  },
  TopTeki: {
    title: "Nov 30th, 2023. Tech Excellence",
    context:
      "Recognition for pushing the boundaries of innovation, dedication to excellence, and shaping the future of technology",
  },
  TechNxt: {
    title: "Oct 4th, 2022. Landmark Towers",
    context:
      "An active discussion about the future and disruptive potential of Web 3.0",
  },
};

export const ProjectsData = [
  {
    id: 1,
    duration: "Nov 23 - Dec 24",
    name: "heads by bnxn",
    role: "community engr",
    image: hbb,
    description:
      "Heads by BNXN is an innovative NFT project reated by Afro-pop artist BNXN. Designed to strengthen the bond between the artist and his dedicated fanbase, this project leverages the Polygon blockchain to offer exclusive access to unique perks and experiences available only to loyal supporters.",
    technologies: {
      context:
        "To foster seamless communication among fans, enhance interaction with the artist, and streamline the NFT purchase process, a range of technologies and tools were utilized.",
      tools: [
        {
          id: 1,
          name: "discord",
          icon: Discord,
        },
        {
          id: 2,
          name: "opensea",
          icon: Opensea,
        },
        {
          id: 3,
          name: "blockchain",
          icon: blockchain,
        },
        {
          id: 4,
          name: "solidity",
          icon: solidity,
        },
        {
          id: 5,
          name: "react",
          icon: react,
        },
      ],
    },
    responsibility: {
      context:
        "My role in this project was community management, and my responsibilities include the following",
      responsibilities: [
        {
          id: 1,
          description:
            "Cultivating an engaging and welcoming online community for fans and NFT holders.",
        },
        {
          id: 2,
          description:
            "Managing communication channels, including Discord and social media platforms, to foster active interaction.",
        },
        {
          id: 3,
          description:
            "Coordinating and hosting virtual events to increase engagement and strengthen fan connections with the artist.",
        },
        {
          id: 4,
          description:
            "Coordinating and hosting virtual events to increase engagement and strengthen fan connections with the artist.",
        },
        {
          id: 5,
          description:
            "Addressing user inquiries, resolving issues, and providing timely support to maintain a positive experience.",
        },
        {
          id: 6,
          description:
            "Collecting and analyzing user feedback to identify improvement opportunities for community engagement.",
        },
        {
          id: 7,
          description:
            "Collaborating with cross-functional teams to align community initiatives with broader project goals.",
        },
      ],
    },
  },
  {
    id: 2,
    duration: "Nov 22 - Oct 23",
    name: "uhuru NFT",
    role: "community engr",
    image: uhuru,
    description: "",
    technologies: {
      context: "",
      tools: [],
    },
    responsibility: {
      context: "",
      responsibilities: [],
    },
  },
  {
    id: 3,
    duration: "Feb 23 - Jun 23",
    name: "after hours",
    role: "community moderator",
    image: floats,
    description: "",
    technologies: {
      context: "",
      tools: [],
    },
    responsibility: {
      context: "",
      responsibilities: [],
    },
  },
  {
    id: 4,
    duration: "Sept 24 - Oct 24",
    name: "young people in tech",
    role: "community partner",
    image: ypit,
    description: "",
    technologies: {
      context: "",
      tools: [],
    },
    responsibility: {
      context: "",
      responsibilities: [],
    },
  },
  {
    id: 5,
    duration: "Oct 6 - Nov 1",
    name: "Web3 Global",
    role: "community partner",
    image: web3_global,
    description: "",
    technologies: {
      context: "",
      tools: [],
    },
    responsibility: {
      context: "",
      responsibilities: [],
    },
  },
] as const;

export const ConnectItems = [
  {
    id: 1,
    name: "instagram",
    icon: React.createElement(IconBrandInstagram, {
      className: "connect_icon_style",
    }),
    url: "",
  },
  {
    id: 2,
    name: "X",
    icon: React.createElement(IconBrandX, {
      className: "connect_icon_style",
    }),
    url: "",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: React.createElement(IconBrandLinkedin, {
      className: "connect_icon_style",
    }),
    url: "",
  },
] as const;
