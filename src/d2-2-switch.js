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
    switch (opponent) {
      case "A": {
        gameResult += points.scissors;
        break;
      }
      case "B": {
        gameResult += points.rock;
        break;
      }
      case "C": {
        gameResult += points.paper;
        break;
      }
    }
    return gameResult;
  },
  Y: (opponent) => {
    let gameResult = points.draw;
    switch (opponent) {
      case "A": {
        gameResult += points.rock;
        break;
      }
      case "B": {
        gameResult += points.paper;
        break;
      }
      case "C": {
        gameResult += points.scissors;
        break;
      }
    }
    return gameResult;
  },
  Z: (opponent) => {
    let gameResult = points.win;
    switch (opponent) {
      case "A": {
        gameResult += points.paper;
        break;
      }
      case "B": {
        gameResult += points.scissors;
        break;
      }
      case "C": {
        gameResult += points.rock;
        break;
      }
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
