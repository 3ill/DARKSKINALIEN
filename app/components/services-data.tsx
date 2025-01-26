import {
  btf,
  dsa_bnxn,
  limitless_party,
  metaverse_conf,
  ypit_mindset,
} from "@/app/assets";

export const PublicSpeakingData = [
  {
    description: "Limitless Party",
    title: "Event Host",
    src: limitless_party,
    ctaText: "explore",
    ctaText2: "book",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Whether you&apos;re planning an elegant corporate gala, a tech event,
          or a lively product launch, a skilled MC can transform your event into
          an unforgettable experience. <br /> <br /> As your professional Event
          Host, I bring energy, charisma, and seamless flow to your event,
          ensuring everything runs smoothly and keeps your guests engaged from
          start to finish.
        </p>
      );
    },
  },
  {
    description: "Africa Metaverse Conference",
    title: "Tech Talks",
    src: metaverse_conf,
    ctaText: "explore",
    ctaText2: "book",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          In a world where technology is evolving faster than ever, staying
          ahead of the curve is crucial. <br /> <br /> As a passionate advocate
          and expert in emerging technologies, I offer engaging Tech Talk
          sessions that dive deep into the innovations shaping our future.
          <br /> <br />
          From AI and blockchain to cybersecurity and IoT, my talks provide your
          audience with the insights, trends, and practical knowledge they need
          to navigate today’s tech landscape.
        </p>
      );
    },
  },

  {
    description: "Young People In Tech",
    title: "Motivational",
    src: ypit_mindset,
    ctaText: "explore",
    ctaText2: "book",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          We all have the power to achieve more, but sometimes we just need a
          push to tap into our full potential. <br /> <br /> Whether it’s
          overcoming challenges, pursuing dreams, or fostering resilience, my
          Motivational Talks are designed to inspire and empower your audience
          to take action and achieve greatness. <br /> <br /> With a blend of
          personal stories, practical advice, and high-energy delivery, I help
          individuals and teams break through barriers and move toward their
          goals with renewed purpose and confidence.
        </p>
      );
    },
  },
];

export const CommunityManagementData = [
  {
    description: "HeadsByBnxn",
    title: "Web3 Communities",
    src: dsa_bnxn,
    ctaText: "explore",
    ctaText2: "book",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          In the fast-paced and evolving world of Web3, building a vibrant and
          engaged community is not just important—it’s essential. <br /> <br />
          Whether you’re launching an NFT project, a decentralized finance
          (DeFi) platform, or a blockchain-based initiative, a loyal and active
          community is the foundation of success. <br /> <br /> With my
          Community Management services, I help you foster genuine connections,
          drive engagement, and create a sustainable ecosystem that supports
          long-term growth.
        </p>
      );
    },
  },
];

export const ProjectManagementData = [
  {
    description: "Building The Future",
    title: "Campaign",
    src: btf,
    ctaText: "explore",
    ctaText2: "book",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Managing tech initiatives, educational programs, and motivational
          campaigns requires precision, strategic thinking, and seamless
          execution.
          <br /> <br /> I specialize in taking your vision and turning it into a
          reality—ensuring every detail is handled from start to finish. With a
          focus on efficiency, effective resource allocation, and clear
          communication, I manage the entire process, keeping everything on
          track and aligned with your goals.
          <br /> <br /> From initial planning to final delivery, I’m here to
          ensure your project stays on time, on budget, and exceeds
          expectations. <br /> <br /> Ready to bring your vision to life? Book a
          consultation today, and let&apos;s get started.
        </p>
      );
    },
  },
];
