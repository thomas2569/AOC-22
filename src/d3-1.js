const fs = require("fs");
const input = fs.readFileSync("./inputs/d3.txt", "utf-8");
const items = input.split("\n");
const splitter = (item) => {
  const i = item.length / 2;
  return [item.slice(0, i), item.slice(i)];
};
const splitItems = items.map(splitter);

const priorities = splitItems.map(([left, right]) => {
  for (let i = 0; i < left.length; i++) {
    const rightIndex = right.search(left[i]);
    if (right[rightIndex]) return right[rightIndex];
  }
});
const result = priorities.reduce((a, letter) => {
  return (
    letter.charCodeAt(0) + a + (letter.toLowerCase() === letter ? -96 : -38)
  );
}, 0);
console.log(result);
