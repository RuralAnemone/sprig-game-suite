/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const head = "O"
const body = "o"
const apple = "*"

/**
 * `snake`
 * 
 * an array of coordinates `[x,y]` that determine the snake's position.
 * 
 * snake[0] is the snake's head; subsequent elements are the following body parts.
 * 
 * snake.length is the current score.
 */
let snake = [[3,1],[2,1],[1,1]]

/**
 * `direction`
 * 
 * a tuple representing the snake head's direction
 * 
 * $\abs{x} \oplus \abs{y} = 1$; $\left\{ \ \left\{ x,y \right\} \subset \mathbb{Z} \ \ | \ -1 \leq x \leq 1 \ \ \& \ \ -1 \leq y \leq 1 \ \right\}$
 * 
 * if you don't speak latex, x and y are either -1, 0, or 1; one of them has to be 0 and one of them has to be either -1 or 1
 */
let direction = [1,0];

let fruitPos = [9,6];

setLegend(
  [ head, bitmap`
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
................` ],
  [ body, bitmap`
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
................`],
  [ apple, bitmap`
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
................`],
  [ dead, bitmap`
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
................`],
)

setSolids([])

let level = 0
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
.............`
]

setMap(levels[level])

// setPushables({
//   [ player ]: []
// })

// onInput("s", () => {
//   getFirst(player).y += 1
// })

afterInput(async () => {
  updateSnake();
  setFruit();

  await wait(500);
})

async function wait(time) {
  return new Promise((res, _rej) => {
    setTimeout(res, time);
  });
}

function updateSnake() {
  if (checkCollisions()) die();
  
}