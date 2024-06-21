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

let snake = [[]]

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
................
................
................
................
................
................
................
................
................
................
................
................
................
................
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
.............
.............
.............
.............
.............
.............
.............`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {
  
})