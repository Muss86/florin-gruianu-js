// element out of DOM
const hero = document.querySelector('.hero');
const controls = document.querySelector('.controls');
const stageElement = document.querySelector('.stage');

const character = {
  width: hero.offsetWidth,
  height: hero.offsetHeight,
  element: hero,
};

const stage = {
  width: stageElement.offsetWidth,
  height: stageElement.offsetHeight,
};

// set initial game state
const gameState = {
  left: 0,
  top: 0,
};

const increments = 15;
const speed = {
  forward: increments,
  back: -increments,
  up: -increments,
  down: increments,
};

const orthogonal = {
  x: 'left',
  y: 'top',
  ArrowLeft: 'left',
  ArrowRight: 'left',
  ArrowUp: 'top',
  ArrowDown: 'top',
};

character.element.style.cssText = generateCssText(gameState);

//event delegation on buttons
controls.addEventListener('click', (event) => {
  const button = event.target;

  // delegation conditions
  if (button.nodeName !== 'BUTTON') {
    return;
  }

  // const axis = button.dataset.axis;
  // const direction = button.dataset.direction;
  const { axis, direction } = button.dataset;

  if (axis === 'xy' && direction === 'NW') {
    gameState.left -= increments;
    gameState.top -= increments;
  }

  if (axis === 'xy' && direction === 'SE') {
    gameState.left += increments;
    gameState.top += increments;
  }

  if (axis === 'yx' && direction === 'NE') {
    gameState.left += increments;
    gameState.top -= increments;
  }

  if (axis === 'yx' && direction === 'SW') {
    gameState.left -= increments;
    gameState.top += increments;
  }

  moveCharacter(axis, direction);
});

document.body.addEventListener('keydown', (event) => {
  const key = event.code;
  const axis = ['ArrowRight', 'ArrowLeft'].includes(key) ? 'x' : 'y';
  const directionOptions = {
    ArrowRight: 'forward',
    ArrowLeft: 'back',
    ArrowUp: 'up',
    ArrowDown: 'down',
  };
  const direction = directionOptions[key];

  moveCharacter(axis, direction);
});

// hoisting

function moveCharacter(axis, direction) {
  // (left, top, etc)
  const positionProperty = orthogonal[axis]; // x sau y
  const coeficient = speed[direction];

  gameState[positionProperty] += coeficient;
  // gameState[positionProperty] = gameState[positionProperty] + coeficient;

  preventOutOfBoundsBehavior(gameState);

  character.element.style.cssText = generateCssText(gameState);
}

function generateCssText(gameState) {
  // return `top: ${gameState.top}px; left: ${gameState.left}px`;
  return `transform: translateX(${gameState.left}px) translateY(${gameState.top}px) `;
}

function preventOutOfBoundsBehavior(gameState) {
  // prevent negative x, y axis
  if (gameState.left <= 0) {
    gameState.left = 0;
  }

  if (gameState.top <= 0) {
    gameState.top = 0;
  }

  // prevent positive x, y axis out of bounds
  if (gameState.left + character.width >= stage.width) {
    gameState.left = stage.width - character.width;
  }

  if (gameState.top + character.height >= stage.height) {
    gameState.top = stage.height - character.height;
  }
}
