import { Component } from "solid-js";
import { useNavigate } from "solid-start";

import styles from "~/styles/styles.module.scss";

const Pass: Component = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 class="text-2xl font-bold">
        Congratulations! You passed the challenge to verify that you are not
        drunk
      </h1>
      <button
        class={styles.blueButton}
        onClick={() => {
          window.open(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "_blank",
            "noreferrer"
          );
          navigate("/");
        }}
      >
        Access Database
      </button>
    </>
  );
};

export default Pass;
