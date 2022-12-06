import { Quiz, Rick } from "./components";
import { mathQuestions } from "./math";

import { Questions } from "~/core";

export function createQuestions(): Questions {
  return [
    {
      Component: Quiz,
      props: {
        question: "Are you drunk?",
        answers: [
          { text: "Yes", correct: false },
          { text: "No", correct: true },
        ],
      },
    },
    {
      Component: Quiz,
      props: {
        // https://creativetalklive.com/why-traffic-light-is-red-yellow-green/
        imgSrc: "traffic1.webp",
        imgAlt: "Red Traffic Light",
        question: "You see this, what do you do?",
        answers: [
          { text: "Go forward full speed", correct: false },
          { text: "Stop", correct: true },
        ],
        flexDirection: "col",
      },
    },
    ...(Math.random() >= 0.25 ? [{ Component: Rick, props: {} }] : []),
    ...mathQuestions,
    // muck typescript
  ] as unknown as Questions;
}
