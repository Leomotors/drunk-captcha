/* eslint-disable solid/no-innerhtml */

import clsx from "clsx";
import katex from "katex";
import { Component, createSignal, For } from "solid-js";

import { QuestionProps } from "~/core";
import styles from "~/styles/styles.module.scss";

interface CalculusProps extends QuestionProps {
  question: string;
  answer: Array<{ term: string; key: string }>;
}

const plus = katex.renderToString("+");

export const Calculus: Component<CalculusProps> = (props) => {
  const [answers, setAnswers] = createSignal<Record<number, string>>({});

  function submitAnswer() {
    for (const [index, answer] of props.answer.entries()) {
      if (answers()[index] !== answer.key) return props.onComplete(false);
    }

    props.onComplete(true);
  }

  return (
    <div class="flex flex-col items-center gap-2 p-4">
      <p class="flex items-center gap-2">
        <span class="text-3xl font-bold">Evaluate</span>
        <span
          class="text-2xl"
          innerHTML={katex.renderToString(props.question)}
        />
      </p>

      <div class="flex items-center gap-2">
        <For each={props.answer}>
          {(answer, index) => (
            <>
              <input
                type="text"
                class={clsx("w-16", styles.input)}
                value={answers()[index()] ?? ""}
                onChange={(e) =>
                  setAnswers({ ...answers(), [index()]: e.currentTarget.value })
                }
              />
              {answer.term !== "constants" && (
                <span
                  class="text-2xl"
                  innerHTML={katex.renderToString(answer.term)}
                />
              )}

              {index() < props.answer.length - 1 && <p innerHTML={plus} />}
            </>
          )}
        </For>
      </div>

      <p>All answers in boxs must be quotient number</p>
      <button class={styles.blueButton} onClick={submitAnswer}>
        Submit
      </button>
    </div>
  );
};
