const fs = require("fs");
const input = fs.readFileSync("./inputs/d1.txt", "utf-8");
const elves = input.split("\n\n");
const splitElf = (elf) => {
  return elf.split("\n");
};
const elvesSplit = elves.map(splitElf);
const calories = elvesSplit.map((elf) => {
  let sum = 0;
  for (let i = 0; i < elf.length; i++) {
    sum = sum + parseInt(elf[i]);
  }
  return sum;
});

const result = Math.max(...calories);
console.log(result);
