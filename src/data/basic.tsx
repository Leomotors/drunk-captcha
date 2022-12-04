import { Component } from "solid-js";

import { QuestionProps } from "~/core";
import styles from "~/styles/styles.module.scss";

export const AreYouDrunk: Component<QuestionProps> = (props) => {
  return (
    <div class="flex flex-col items-center justify-center gap-4 p-8">
      <p class="text-3xl font-bold">Are you drunk?</p>

      <section class="flex justify-center gap-2">
        <button
          class={styles.blueButton}
          onClick={() => props.onComplete(false)}
        >
          Yes
        </button>
        <button
          class={styles.blueButton}
          onClick={() => props.onComplete(true)}
        >
          No
        </button>
      </section>
    </div>
  );
};
