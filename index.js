import { runAway, changeColor, updateCounter } from "./utils/functions.js";

const runner = document.getElementById("runner");

runner.addEventListener("mouseover", () => {
  const runnerSize = parseInt(
    window.getComputedStyle(runner).getPropertyValue("height")
  );
  const container = document.querySelector("#container");

  const top = parseInt(container.offsetTop) + runnerSize;
  const bottom =
    top +
    parseInt(window.getComputedStyle(container).getPropertyValue("height")) -
    2 * runnerSize;

  const left = parseInt(container.offsetLeft) + runnerSize;
  const right =
    left +
    parseInt(window.getComputedStyle(container).getPropertyValue("width")) -
    2 * runnerSize;

  runAway(runner, [top, bottom], [left, right]);
});

runner.addEventListener("click", () => {
  changeColor(runner);
  updateCounter();
});
