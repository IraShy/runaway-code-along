import { runAway, changeColor } from "./utils/functions.js";

const runner = document.getElementById("runner");

runner.addEventListener("mouseover", () => {
  const runnerSize = parseInt(runner.style.height);
  const height = document.body.clientHeight - runnerSize;
  const width = document.body.clientWidth - runnerSize;

  runAway(runner, height, width);
});

runner.addEventListener("click", () => changeColor(runner));
