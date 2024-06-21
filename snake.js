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
 * Snake
 * 
 * an array of coordinates `[x,y]` that determine the snake's position.
 * 
 * snake[0] is the snake's head; subsequent elements are the following body parts.
 * 
 * snake.length is the current score.
 */
let snake = [[3,1],[2,1],[1,1]]

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
  getFirst(head).y += 1;
}