import { Component } from "solid-js";

import styles from "~/styles/styles.module.scss";

const Fail: Component = () => {
  return (
    <>
      <h1 class="text-3xl font-bold">You are drunk</h1>

      <iframe
        class="mx-auto aspect-video w-[90%] max-w-3xl select-none"
        src="https://www.youtube.com/embed/KUm8PUsrKXs?autoplay=1"
        title="เลิกเหล้า เลิกจน สสส"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      />

      <section class="flex gap-2">
        <a href="https://www.brikl.com/jobs" target="_blank" rel="noreferrer">
          <button class={styles.blueButton}>ทำงาน (???)</button>
        </a>

        <a
          href="https://www.cp.eng.chula.ac.th/cedt"
          target="_blank"
          rel="noreferrer"
        >
          <button class={styles.blueButton}>ได้เรียน (🥐)</button>
        </a>
      </section>
    </>
  );
};

export default Fail;
