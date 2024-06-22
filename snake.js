/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const head = "O";
const body = "o";
const apple = "*";
const dead = " ";

/**
 * `snake`
 *
 * an array of coordinates `[x,y]` that determine the snake's position.
 *
 * snake[0] is the snake's head; subsequent elements are the following body parts.
 *
 * snake.length is the current score.
 */
let snake = [
  [3, 1],
  [2, 1],
  [1, 1],
];

/**
 * `direction`
 *
 * a tuple representing the snake head's direction
 *
 * $\abs{x} \oplus \abs{y} = 1$; $\left\{ \ \left\{ x,y \right\} \subset \mathbb{Z} \ \ | \ -1 \leq x \leq 1 \ \ \& \ \ -1 \leq y \leq 1 \ \right\}$
 *
 * if you don't speak latex, x and y are either -1, 0, or 1; one of them has to be 0 and one of them has to be either -1 or 1
 */
let direction = [1, 0];

let fruitPos = [9, 6];

setLegend(
  [
    head,
    bitmap`
................
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
................`,
  ],
  [
    body,
    bitmap`
................
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
................`,
  ],
  [
    apple,
    bitmap`
................
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
.33333333333333.
................`,
  ],
  [
    dead,
    bitmap`
................
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
................`,
  ]
);

setSolids([]);

let level = 0;
const levels = [
  map`
.............
.ooO.........
.............
.............
.............
.............
.........*...
.............
.............
.............
.............
.............
.............`,
];

setMap(levels[level]);

// setPushables({
//   [ player ]: []
// })

onInput("w", () => {
  const potentialDirection = [0, -1];
  if (checkCanMove(potentialDirection)) direction = potentialDirection;
});

onInput("a", () => {
  const potentialDirection = [-1, 0];
  if (checkCanMove(potentialDirection)) direction = potentialDirection;
});

onInput("s", () => {
  const potentialDirection = [0, 1];
  if (checkCanMove(potentialDirection)) direction = potentialDirection;
});

onInput("d", () => {
  const potentialDirection = [1, 0];
  if (checkCanMove(potentialDirection)) direction = potentialDirection;
});

afterInput(
  /*async*/ () => {
    updateSnake();
    // setFruit();

    // await wait(500);
  }
);

async function wait(time) {
  return new Promise((res, _rej) => {
    setTimeout(res, time);
  });
}

function vec2Add(v, u) {
  return [v[0] + u[0], v[1] + u[1]];
}

function checkCanMove(potentialDirection) {
  return JSON.stringify(snake.slice(1)).includes(
    JSON.stringify(vec2Add(snake[0], potentialDirection))
  );
}

function updateSnake() {
  // if (checkCollisions()) die();
  snake[0] = vec2Add(snake[0], direction);
  [getFirst(head).y, getFirst(head).x] = snake[0];
}
