import clsx from "clsx";
import { Component, For } from "solid-js";

import { QuestionProps } from "~/core";
import styles from "~/styles/styles.module.scss";

interface QuizProps extends QuestionProps {
  question: string;
  answers: Array<{ text: string; correct: boolean }>;
  /** @default "row" */
  flexDirection?: "row" | "col";
  imgSrc?: string;
  imgAlt?: string;
}

export const Quiz: Component<QuizProps> = (props) => {
  return (
    <div class="flex flex-col items-center justify-center gap-4 p-8">
      {props.imgSrc && (
        <img src={props.imgSrc} alt={props.imgAlt} class="max-w-xs" />
      )}

      <p class="text-3xl font-bold">{props.question}</p>

      <section
        class={clsx(
          "flex justify-center gap-2",
          props.flexDirection === "col" && "flex-col"
        )}
      >
        <For each={props.answers}>
          {(answer) => (
            <button
              class={styles.blueButton}
              onClick={() => props.onComplete(answer.correct)}
            >
              {answer.text}
            </button>
          )}
        </For>
      </section>
    </div>
  );
};
