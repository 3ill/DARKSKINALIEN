import React from "react";
import { FlipWords } from "@/app/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["founder", "thought leader", "community engr"];

  return (
    <div className="flex items-center justify-center px-4">
      <div className="text_variant2 mx-auto font-Azeret text-[18px] font-semibold capitalize sm:text-[24px]">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
