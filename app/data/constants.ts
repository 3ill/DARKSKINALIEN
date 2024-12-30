import {
  floats,
  hbb,
  instagram_dark,
  instagram_light,
  linkedin_dark,
  linkedin_light,
  twitter_dark,
  twitter_light, uhuru, ypit
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
    context: "An active discussion about the future and disruptive potential of Web 3.0"
  }
};

export const ProjectsData = [
  {
    id: 1,
    duration: "Nov 23 - Dec 24",
    name: "heads by bnxn",
    role: "community engr",
    image: hbb
  },
  {
    id: 2,
    duration: "Nov 22 - Oct 23",
    name: "uhuru NFT",
    role: "community engr",
    image: uhuru
  },
  {
    id: 3,
    duration: "Feb 23 - Jun 23",
    name: "after hours",
    role: "community moderator",
    image: floats

  },
  {
    id: 4,
    duration: "Sept 24 - Oct 24",
    name: "ypit",
    role: "community partner",
    image: ypit
  }
] as const