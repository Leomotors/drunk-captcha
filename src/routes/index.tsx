import { Component } from "solid-js";
import { useNavigate } from "solid-start";

import { NotDrunk } from "~/components";

const Home: Component = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 class="text-3xl font-bold">Drunk Captcha</h1>
      <p class="text-2xl">
        Before accessing sensitive system, please verify that you are not drunk
      </p>
      <NotDrunk onFinish={() => navigate("/test")} />
    </>
  );
};

export default Home;
