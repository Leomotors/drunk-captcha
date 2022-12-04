import { Component } from "solid-js";

import { Game } from "~/core";
import { createQuestions } from "~/data";

const Test: Component = () => {
  const questions = createQuestions();

  return (
    <>
      <h1 class="text-2xl">
        Please complete the following challenge to verify that you are not drunk
      </h1>
      <Game questions={questions} />
    </>
  );
};

export default Test;
