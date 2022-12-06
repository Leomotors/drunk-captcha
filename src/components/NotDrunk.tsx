import clsx from "clsx";
import { Component, createSignal } from "solid-js";

import { Spinner } from "~/icons";
import styles from "~/styles/styles.module.scss";

interface NotDrunkProps {
  onFinish: () => unknown;
}

export const NotDrunk: Component<NotDrunkProps> = (props) => {
  const [loading, setLoading] = createSignal(false);

  return (
    <div
      class={clsx(
        "flex w-fit select-none flex-row items-center gap-1 rounded p-4",
        styles.captchaBox
      )}
    >
      {loading() ? (
        <Spinner />
      ) : (
        <button
          class="mr-2 h-7 w-7 rounded-md border-2 border-neutral-500 transition-colors hover:border-neutral-600"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              props.onFinish();
            }, 500);
          }}
        />
      )}

      <p class="mr-1 text-2xl">I am not drunk</p>
    </div>
  );
};
