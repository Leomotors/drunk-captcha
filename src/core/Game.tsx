import clsx from "clsx";
import { Component, createComponent, createMemo, createSignal } from "solid-js";
import { useNavigate } from "solid-start";

import { Questions } from "./types";

import styles from "~/styles/styles.module.scss";

interface GameProps {
  questions: Questions;
}

export const Game: Component<GameProps> = (props) => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = createSignal(0);

  const question = createMemo(() => props.questions[questionIndex()]);

  return (
    <main class={clsx(styles.captchaBox, "rounded-lg")}>
      {createComponent(question().Component, {
        ...question().props,
        onComplete: (success) => {
          if (!success) return navigate("/fail", { replace: true });

          if (questionIndex() < props.questions.length - 1) {
            setQuestionIndex(questionIndex() + 1);
          } else {
            navigate("/pass", { replace: true });
          }
        },
      })}
    </main>
  );
};
