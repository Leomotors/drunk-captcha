import clsx from "clsx";
import { Component, createSignal } from "solid-js";

import { QuestionProps } from "~/core";
import styles from "~/styles/styles.module.scss";

export const Rick: Component<QuestionProps> = (props) => {
  const [input, setInput] = createSignal("");

  function onSubmit() {
    props.onComplete(
      ["rickroll", "rickastley", "nevergonnagiveyouup"].includes(
        input().toLowerCase().replaceAll(" ", "")
      )
    );
  }

  return (
    <div class="flex flex-col items-center justify-center gap-4 p-8">
      <p class="text-3xl font-bold">What's this</p>

      <button
        class={clsx(styles.baseButton, "bg-green-600")}
        onClick={() =>
          window.open(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "_blank",
            "noreferrer"
          )
        }
      >
        Click me
      </button>

      <input
        class={styles.input}
        type="text"
        value={input()}
        onChange={(e) => setInput(e.currentTarget.value)}
      />

      <button class={styles.blueButton} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};
