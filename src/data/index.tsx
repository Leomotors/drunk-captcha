import { AreYouDrunk } from "./basic";
import { Calculus } from "./calculus";

import { Questions } from "~/core";

export function createQuestions(): Questions {
  return [
    {
      Component: AreYouDrunk,
      props: {},
    },
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
  ] as Questions;
}
