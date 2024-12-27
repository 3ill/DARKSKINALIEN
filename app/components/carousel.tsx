"use client";

import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import { darkskinalien, roundtable, roundtable3, top_teki } from "@/app/assets";
import { CarouselData } from "@/app/data/constants";

export function CarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="">
      <Carousel items={cards} />
    </div>
  );
}

interface ContentProps {
  title: string;
  context: string;
}

const DummyContent = ({ title, context }: ContentProps) => {
  return (
    <>
      <div className="glow mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
        <p className="mx-auto max-w-3xl font-grotesk text-base capitalize text-neutral-600 dark:text-neutral-400 md:text-2xl">
          <span className="font-helvetica font-bold uppercase text-neutral-700 dark:text-neutral-200">
            {title}
          </span>{" "}
          <br /> <br />
          {context}
        </p>
      </div>
    </>
  );
};

const data = [
  {
    category: "TECH",
    title: "RoundTable 3.0",
    src: roundtable3,
    content: (
      <DummyContent
        title={CarouselData.RoundTable3.title}
        context={CarouselData.RoundTable3.context}
      />
    ),
  },
  {
    category: "TECH",
    title: "RoundTable 2.0.",
    src: roundtable,
    content: (
      <DummyContent
        title={CarouselData.RoundTable2.title}
        context={CarouselData.RoundTable2.context}
      />
    ),
  },
  {
    category: "TECH AWARD",
    title: "Top Teki 100",
    src: top_teki,
    content: (
      <DummyContent
        title={CarouselData.TopTeki.title}
        context={CarouselData.TopTeki.context}
      />
    ),
  },
  {
    category: "WEB 3.0",
    title: "Tech Nxt 2.0",
    src: darkskinalien,
    content: (
      <DummyContent
        title={CarouselData.TechNxt.title}
        context={CarouselData.TechNxt.context}
      />
    ),
  },
];