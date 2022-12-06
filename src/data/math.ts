import { Calculus, Quiz } from "./components";
import { nCr, shuffle } from "./utils";

import { Questions } from "~/core";

const basicQuestions = [
  ["sin", "cos"],
  ["cos", "-sin"],
];

const items = [];

for (const [D, I] of basicQuestions) {
  items.push({
    question: `What is derivative of ${D}?`,
    answers: shuffle(["sin", "cos", "-sin", "-cos"]).map((x) => ({
      text: x,
      correct: x === I,
    })),
  });
  items.push({
    question: `What is integral of ${I}?`,
    answers: shuffle(["sin", "cos", "-sin", "-cos"]).map((x) => ({
      text: x,
      correct: x === D,
    })),
  });
}

export const mathQuestions = [
  ...nCr(items, 1 + Math.floor(Math.random() * 2)).map((item) => ({
    Component: Quiz,
    props: { ...item },
  })),
  {
    Component: Calculus,
    props: {
      question: "\\int_0^\\frac{\\pi}{2} xcosx\\ dx",
      answer: [
        { term: "constants", key: "-1" },
        { term: "\\pi", key: "1/2" },
      ],
    },
  },
] as unknown as Questions;
