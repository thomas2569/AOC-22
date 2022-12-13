const fs = require("fs");
const input = fs.readFileSync("./inputs/d2.txt", "utf-8");
const games = input.split("\n");
const points = {
  win: 6,
  draw: 3,
  loss: 0,
};

const rules = {
  X: (opponent) => {
    let gameResult = points.loss;
    if (opponent === "A") {
      gameResult = points.draw;
    } else if (opponent === "C") {
      gameResult = points.win;
    }
    return gameResult + 1;
  },
  Y: (opponent) => {
    let gameResult = points.loss;
    if (opponent === "A") {
      gameResult = points.win;
    } else if (opponent === "B") {
      gameResult = points.draw;
    }
    return gameResult + 2;
  },
  Z: (opponent) => {
    let gameResult = points.loss;
    if (opponent === "B") {
      gameResult = points.win;
    } else if (opponent === "C") {
      gameResult = points.draw;
    }
    return gameResult + 3;
  },
};
const score = games.reduce((a, game) => {
  const [opponent, me] = game.split(" ");
  const play = rules[me];
  return a + play(opponent);
}, 0);
console.log(score);
