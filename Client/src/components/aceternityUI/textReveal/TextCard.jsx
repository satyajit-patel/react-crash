import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export const TextCard = ({it}) => {
  return (
    
    <div
      className="flex items-center justify-center bg-[#0E0E10] h-[20rem] rounded-2xl w-[35rem]">
      <TextRevealCard text="You know the business" revealText={it.author}>
        <TextRevealCardTitle>
          {it.quote}
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the card to reveal the Author.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>

  )
}


