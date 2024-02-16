const randomLocation = (scope) => {
  const [min, max] = scope;
  const newposition = Math.floor(Math.random() * (max - min)) + min;
  return `${newposition}px`;
};

const runAway = (element, height, width) => {
  element.style.top = randomLocation(height);
  element.style.left = randomLocation(width);
};

const randomColor = () => Math.floor(Math.random() * 256);

const changeColor = (element) => {
  element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
};

const updateCounter = () => {
  const counter = document.querySelector("#counter");
  console.log(counter.innerText);
  let currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue + 1;
};

export { randomLocation, runAway, changeColor, updateCounter };
