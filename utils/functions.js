const randomLocation = (scope) => {
  return `${Math.floor(Math.random() * scope)}px`;
};

const runAway = (element, height, width) => {
  element.style.top = randomLocation(height);
  element.style.left = randomLocation(width);
};

const randomColor = () => Math.floor(Math.random() * 256);

const changeColor = (element) => {
  element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
};

export { randomLocation, runAway, changeColor };
