const fs = require("fs");
const input = fs.readFileSync("./inputs/d2.txt", "utf-8");
const games = input.split("\n");
const rules = {
  X: (opponent) => {
    let gameResult = 0;
    if (opponent === "A") {
      gameResult = 3;
    } else if (opponent === "C") {
      gameResult = 6;
    }
    return gameResult + 1;
  },
  Y: (opponent) => {
    let gameResult = 0;
    if (opponent === "A") {
      gameResult = 6;
    } else if (opponent === "B") {
      gameResult = 3;
    }
    return gameResult + 2;
  },
  Z: (opponent) => {
    let gameResult = 0;
    if (opponent === "B") {
      gameResult = 6;
    } else if (opponent === "C") {
      gameResult = 3;
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
