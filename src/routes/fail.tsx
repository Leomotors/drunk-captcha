import { Component } from "solid-js";

const Fail: Component = () => {
  return (
    <>
      <h1 class="text-3xl font-bold">You are drunk</h1>

      <iframe
        class="mx-auto aspect-video w-[90%] max-w-3xl"
        src="https://www.youtube.com/embed/KUm8PUsrKXs?autoplay=1"
        title="เลิกเหล้า เลิกจน สสส"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      />
    </>
  );
};

export default Fail;
