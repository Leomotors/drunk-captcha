import { Component } from "solid-js";

import { GitHub } from "~/icons";

export const Footer: Component = () => {
  return (
    <footer class="flex items-center gap-1 text-2xl">
      <p>Source Code available at</p>

      <a
        class="flex items-center gap-1 text-slate-800 transition-colors hover:text-slate-600"
        href="https://github.com/Leomotors/drunk-captcha"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <GitHub size="32" />
      </a>

      <p class="ml-4 text-xl">⚠️This Website is currently work in progress⚠️</p>
    </footer>
  );
};
