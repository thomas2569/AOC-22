const fs = require("fs");
const input = fs.readFileSync("./inputs/d2.txt", "utf-8");
const games = input.split("\n");
const points = {
  win: 6,
  draw: 3,
  loss: 0,
  rock: 1,
  paper: 2,
  scissors: 3,
};

const rules = {
  X: (opponent) => {
    let gameResult = points.loss;
    if (opponent === "A") {
      gameResult += points.scissors;
    } else if (opponent === "B") {
      gameResult += points.rock;
    } else if (opponent === "C") {
      gameResult += points.paper;
    }
    return gameResult;
  },
  Y: (opponent) => {
    let gameResult = points.draw;
    if (opponent === "A") {
      gameResult += points.rock;
    } else if (opponent === "B") {
      gameResult += points.paper;
    } else if (opponent === "C") {
      gameResult += points.scissors;
    }
    return gameResult;
  },
  Z: (opponent) => {
    let gameResult = points.win;
    if (opponent === "A") {
      gameResult += points.paper;
    } else if (opponent === "B") {
      gameResult += points.scissors;
    } else if (opponent === "C") {
      gameResult += points.rock;
    }
    return gameResult;
  },
};
const score = games.reduce((a, game) => {
  const [opponent, me] = game.split(" ");
  const play = rules[me];
  return a + play(opponent);
}, 0);
console.log(score);
